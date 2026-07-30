import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const products = defineCollection({
  loader: file('src/content/products.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    category: z.enum(['flower', 'cake-gift', 'bunga-papan']),
    subcategory: z.string(),
    subcategoryLabel: z.string(),
    occasions: z.array(z.string()).default([]),
    priceIDR: z.number(),
    priceNote: z.string().optional(),
    image: z.string(),
    badge: z.enum(['best-seller', 'baru', 'none']).default('none'),
    availableCities: z.array(z.string()).optional(),
  }),
});

const occasions = defineCollection({
  loader: file('src/content/occasions.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    heroCopy: z.string(),
  }),
});

const locations = defineCollection({
  loader: file('src/content/locations.json'),
  schema: z.object({
    id: z.string(),
    city: z.string(),
    slug: z.string(),
    region: z.string(),
    estDeliveryNote: z.string(),
  }),
});

export const collections = { products, occasions, locations };
