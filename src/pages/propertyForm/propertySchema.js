import { z } from "zod";

export const PROPERTY_TYPES = ["Villa", "Apartment", "House", "Townhouse", "Penthouse", "Studio"];
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const wholeNumber = (label, min, max) =>
  z.coerce
    .number({ invalid_type_error: `${label} must be a number` })
    .int(`${label} must be a whole number`)
    .min(min, `${label} must be at least ${min}`)
    .max(max, `${label} must be at most ${max.toLocaleString("en-US")}`);

export const propertySchema = z.object({
  title: z.string().trim().min(5, "Title must be at least 5 characters").max(100, "Title must be under 100 characters"),
  location: z.string().trim().min(3, "Location is required").max(120, "Location must be under 120 characters"),
  purpose: z.enum(["buy", "rent"], { message: "Choose buy or rent" }),
  type: z.enum(PROPERTY_TYPES, { message: "Choose a property type" }),
  price: wholeNumber("Price", 1000, 1_000_000_000),
  bedrooms: wholeNumber("Bedrooms", 0, 20),
  bathrooms: wholeNumber("Bathrooms", 1, 20),
  area: wholeNumber("Area", 10, 100_000),
  description: z.string().trim().max(1000, "Description must be under 1000 characters").optional().default(""),
  status: z.enum(["Published", "Draft"]),
  featured: z.boolean(),
  image: z.string().min(1, "Please upload a property image"),
});

export function validateImageFile(file) {
  if (!IMAGE_TYPES.includes(file.type)) return "Image must be JPG, PNG or WebP";
  if (file.size > MAX_IMAGE_BYTES) return "Image must be smaller than 5 MB";
  return null;
}
