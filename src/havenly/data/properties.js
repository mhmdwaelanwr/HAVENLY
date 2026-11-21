import { useSyncExternalStore } from "react";

export const seedProperties = [
  { id: 1, title: "Modern Luxury Villa", location: "New Cairo, Egypt", purpose: "buy", price: 8500000, type: "Villa", bedrooms: 4, bathrooms: 3, area: 320, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", featured: true, description: "" },
  { id: 2, title: "Elegant Modern Apartment", location: "Sheikh Zayed, Egypt", purpose: "buy", price: 3200000, type: "Apartment", bedrooms: 3, bathrooms: 2, area: 180, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", featured: false, description: "" },
  { id: 3, title: "Contemporary Family House", location: "Fifth Settlement, Egypt", purpose: "buy", price: 6200000, type: "House", bedrooms: 5, bathrooms: 4, area: 280, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", featured: true, description: "" },
  { id: 4, title: "Apartment in a compound", location: "Maadi, Egypt", purpose: "buy", price: 8200000, type: "Apartment", bedrooms: 5, bathrooms: 4, area: 280, image: "https://aqardxb.com/wp-content/uploads/2022/11/LIV-LUX-Penthouse-Master-Bedroom.jpg", featured: false, description: "" },
];

const STORE_KEY = "havenly.properties";
let current = seedProperties;
let loaded = false;
const listeners = new Set();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (Array.isArray(saved)) current = saved;
  } catch {
    /* ignore */
  }
}

function commit(next) {
  current = next;
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(next));
  } catch {
    throw new Error("Not enough browser storage to save this property. Try a smaller image.");
  }
  listeners.forEach((l) => l());
}

export function getProperties() {
  load();
  return current;
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useProperties() {
  return useSyncExternalStore(subscribe, getProperties, () => seedProperties);
}

export function findProperty(id, list = getProperties()) {
  return list.find((property) => String(property.id) === String(id));
}

export function createProperty(data) {
  const list = getProperties();
  const id = list.reduce((max, p) => Math.max(max, p.id), 0) + 1;
  const property = { ...data, id };
  commit([...list, property]);
  return property;
}

export function updateProperty(id, data) {
  const list = getProperties();
  if (!findProperty(id, list)) throw new Error("Property not found");
  commit(list.map((p) => (String(p.id) === String(id) ? { ...p, ...data, id: p.id } : p)));
}

export function deleteProperty(id) {
  commit(getProperties().filter((p) => String(p.id) !== String(id)));
}

export function formatPrice(price) {
  return price.toLocaleString("en-US") + " EGP";
}
