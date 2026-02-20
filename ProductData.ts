export type ProductCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    specs: string[];
  }[];
};

export const productCategories: ProductCategory[] = [
  {
    title: "Dehydrated Onion (White / Red / Pink)",
    description: "Consistent flavour and quality for food manufacturing, retail, and culinary use.",
    items: [
      { name: "Flakes / Kibbled", specs: ["Size: 8–20 mm"] },
      { name: "Chopped", specs: ["Size: 3–5 mm", "Size: 5–7 mm"] },
      { name: "Minced", specs: ["Size: 1–3 mm"] },
      { name: "Granules", specs: ["Size: 0.2–0.5 mm", "Size: 0.5–1 mm"] },
      { name: "Powder", specs: ["Size: 80–100 mesh"] },
    ],
  },
  {
    title: "Dehydrated Garlic",
    description: "High aroma, clean taste, and reliable granulation options.",
    items: [
      { name: "Flakes / Kibbled", specs: ["Size: 8–15 mm"] },
      { name: "Chopped", specs: ["Size: 3–5 mm"] },
      { name: "Minced", specs: ["Size: 1–3 mm"] },
      { name: "Granules", specs: ["Size: 0.2–0.5 mm", "Size: 0.5–1 mm"] },
      { name: "Powder", specs: ["Size: 80–100 mesh"] },
    ],
  },
  {
    title: "Dehydrated Vegetables",
    description: "Convenient dehydrated vegetable options for seasoning blends and food prep.",
    items: [
      { name: "Green Chilli", specs: ["Forms: Flakes / Powder"] },
      { name: "Cabbage", specs: ["Forms: Flakes / Powder"] },
    ],
  },
];
