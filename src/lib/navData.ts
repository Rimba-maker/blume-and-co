function slugify(label: string): string {
  return label
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const flowerSubcategories = [
  "Forever Flower",
  "Buket Bunga",
  "Bunga Meja",
  "Bunga Artificial",
  "Buket Giant",
  "Buket Uang",
  "Bloom Box",
  "Dried Flowers",
].map((label) => ({ label, slug: slugify(label) }));

export const bungaPapanSubcategories = [
  "Papan Bunga",
  "Karangan Bunga Papan",
  "Papan Bunga Kertas",
  "Papan Bunga Artificial",
  "Papan Bunga LED",
  "Papan Bunga Printing",
  "Papan Bunga Acrylic",
  "Standing Flower",
  "Standing Giant Flower",
].map((label) => ({ label, slug: slugify(label) }));

// Notion pastel-tint pattern: one tint per group so the mega menu columns read
// as distinct clusters instead of 28 flat rows.
export const cakeGiftGroups = [
  {
    title: "Cakes",
    tint: "bg-pastel-pink/40",
    items: ["Cakes", "Tarts", "Ice Cream Cakes", "Printing Cakes", "3D Cakes", "Gelato", "Cookies"],
  },
  {
    title: "Hampers",
    tint: "bg-primary/20",
    items: ["Hampers", "Fruit Hampers", "Newborn Hampers", "Love Bundle", "Wedding Hampers", "Food Hampers", "Snack Box"],
  },
  {
    title: "Gifts & Personalized",
    tint: "bg-pastel-purple/35",
    items: ["Personalized Gift", "Tumbler", "Fashion", "Home Decor", "Stationery", "Photobook", "Gifts", "Jewelry", "Dowry"],
  },
  {
    title: "Home & Ambience",
    tint: "bg-surface-soft",
    items: ["Diffuser", "Candle", "Cuddlemate Doll", "Chocolate"],
  },
  {
    title: "Lainnya",
    tint: "bg-pastel-pink/25",
    items: ["Greeting Card", "Party Supply", "Below Rp 300.000"],
  },
].map((group) => ({
  ...group,
  items: group.items.map((label) => ({ label, slug: slugify(label) })),
}));

export const locationRegions = [
  { region: "Jawa & Bali", cities: ["Jakarta", "Depok", "Bekasi", "Tangerang", "Bogor", "Bandung", "Surabaya", "Semarang", "Surakarta/Solo", "Yogyakarta", "Bali"] },
  { region: "Sumatra", cities: ["Binjai", "Jambi", "Lampung", "Medan", "Padang", "Palembang", "Pekanbaru"] },
  { region: "Sulawesi", cities: ["Makassar", "Manado", "Palu"] },
  { region: "Kalimantan", cities: ["Balikpapan", "Banjarmasin", "Pontianak", "Samarinda"] },
  { region: "Nusa Tenggara", cities: ["Kupang", "Lombok", "Mataram", "Sumbawa"] },
  { region: "Papua", cities: ["Jayapura"] },
].map((group) => ({
  ...group,
  cities: group.cities.map((label) => ({ label, slug: slugify(label) })),
}));
