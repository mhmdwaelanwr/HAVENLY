export const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "New Cairo, Egypt",
    price: 8500000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    featured: true,
  },
  {
    id: 2,
    title: "Elegant Modern Apartment",
    location: "Sheikh Zayed, Egypt",
    price: 3200000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    featured: false,
  },
  {
    id: 3,
    title: "Contemporary Family House",
    location: "Fifth Settlement, Egypt",
    price: 6200000,
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    featured: true,
  },
  {
    id: 4,
    title: "Apartment in a compound",
    location: "Maadi, Egypt",
    price: 8200000,
    type: "House",
    bedrooms: 5,
    bathrooms: 4,
    area: 280,
    image: "https://aqardxb.com/wp-content/uploads/2022/11/LIV-LUX-Penthouse-Master-Bedroom.jpg",
    featured: false,
  },
];

export function findProperty(id) {
  return properties.find((property) => String(property.id) === String(id));
}

export function formatPrice(price) {
  return price.toLocaleString("en-US") + " EGP";
}
