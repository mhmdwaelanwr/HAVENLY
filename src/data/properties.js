
export const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "New Cairo, Egypt",
    purpose: "buy",
    price: 8500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    ],
    description:
      "Discover this modern luxury villa in New Cairo, featuring spacious living areas, elegant architecture, and a comfortable layout designed for family living.",
    amenities: [
      "Private Garden",
      "Swimming Pool",
      "Parking",
      "Central Air Conditioning",
      "Security",
      "Modern Kitchen",
    ],
    agent: {
      name: "Havenly Sales Team",
      role: "Property Consultant",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Elegant Modern Apartment",
    location: "Sheikh Zayed, Egypt",
    purpose: "buy",
    price: 3200000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
    ],
    description:
      "A stylish modern apartment in Sheikh Zayed with a practical layout, comfortable bedrooms, and beautifully designed living spaces.",
    amenities: [
      "Elevator",
      "Parking",
      "Security",
      "Balcony",
      "Central Air Conditioning",
    ],
    agent: {
      name: "Havenly Sales Team",
      role: "Property Consultant",
    },
    featured: false,
  },
  {
    id: 3,
    title: "Contemporary Family House",
    location: "Fifth Settlement, Egypt",
    purpose: "buy",
    price: 6200000,
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200",
    ],
    description:
      "A contemporary family house offering generous interior spaces and a modern design, suitable for comfortable everyday living.",
    amenities: [
      "Garden",
      "Parking",
      "Security",
      "Balcony",
      "Modern Kitchen",
    ],
    agent: {
      name: "Havenly Sales Team",
      role: "Property Consultant",
    },
    featured: true,
  },
  {
    id: 4,
    title: "Apartment in a compound",
    location: "Maadi, Egypt",
    purpose: "buy",
    price: 8200000,
    type: "Apartment",
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    image: "https://aqardxb.com/wp-content/uploads/2022/11/LIV-LUX-Penthouse-Master-Bedroom.jpg",
    images: [
      "https://aqardxb.com/wp-content/uploads/2022/11/LIV-LUX-Penthouse-Master-Bedroom.jpg",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
    ],
    description:
      "A spacious apartment in Maadi with multiple bedrooms and bathrooms, offering a comfortable layout and contemporary interior style.",
    amenities: [
      "Compound",
      "Security",
      "Parking",
      "Elevator",
      "Balcony",
    ],
    agent: {
      name: "Havenly Sales Team",
      role: "Property Consultant",
    },
    featured: false,
  },
];

export function findProperty(id) {
  return properties.find(
    (property) => String(property.id) === String(id)
  );
}

export function formatPrice(price) {
  return price.toLocaleString("en-US") + " EGP";
}

// Omar's forms use an additive, browser-local changeset; existing team seed listings stay intact.

const PROPERTY_CHANGES_KEY = "havenly.propertyChanges.v1";

function readPropertyChanges() {
  if (typeof window === "undefined") return { added: [], edited: {} };
  try {
    const saved = JSON.parse(window.localStorage.getItem(PROPERTY_CHANGES_KEY));
    return {
      added: Array.isArray(saved?.added) ? saved.added : [],
      edited: saved?.edited && typeof saved.edited === "object" && !Array.isArray(saved.edited) ? saved.edited : {},
    };
  } catch {
    return { added: [], edited: {} };
  }
}

let propertyChanges = readPropertyChanges();

for (const property of properties) {
  const changes = Object.hasOwn(propertyChanges.edited, String(property.id))
    ? propertyChanges.edited[String(property.id)]
    : null;
  if (changes && typeof changes === "object") Object.assign(property, changes);
}
for (const saved of propertyChanges.added) {
  if (saved && Number.isInteger(saved.id) && !findProperty(saved.id)) {
    properties.push(saved);
  }
}

function persistPropertyChanges(next) {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(PROPERTY_CHANGES_KEY, JSON.stringify(next));
    } catch {
      throw new Error("Not enough browser storage to save this property. Try a smaller image.");
    }
  }
  propertyChanges = next;
}

export function createProperty(data) {
  const id = properties.reduce((max, property) => Math.max(max, Number(property.id) || 0), 0) + 1;
  const created = {
    ...data,
    id,
    images: data.image ? [data.image] : [],
    amenities: [],
    agent: { name: "Havenly Sales Team", role: "Property Consultant" },
  };
  persistPropertyChanges({
    ...propertyChanges,
    added: [...propertyChanges.added, created],
  });
  properties.push(created);
  return created;
}

export function updateProperty(id, data) {
  const property = findProperty(id);
  if (!property) throw new Error("Property not found");
  const changes = {
    ...data,
    images: data.image ? [data.image] : property.images,
  };
  const addedIndex = propertyChanges.added.findIndex((entry) => String(entry.id) === String(id));
  if (addedIndex >= 0) {
    const added = [...propertyChanges.added];
    added[addedIndex] = { ...added[addedIndex], ...changes };
    persistPropertyChanges({ ...propertyChanges, added });
  } else {
    persistPropertyChanges({
      ...propertyChanges,
      edited: { ...propertyChanges.edited, [String(id)]: changes },
    });
  }
  Object.assign(property, changes);
  return property;
}
