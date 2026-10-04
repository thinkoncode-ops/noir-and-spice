import { writeFileSync } from "fs";

const img = {
  sandwich: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
  fries: "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
  momos: "https://images.unsplash.com/photo-1496116218417-1a781b1d4160?w=600&q=80",
  drink: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
  dessert: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
  chinese: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
  chaat: "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
  default: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
};

const catImg = {
  "Sandwich Sub": img.sandwich,
  Sandwiches: img.sandwich,
  Pizza: img.pizza,
  Burgers: img.burger,
  Pasta: img.pasta,
  Chaat: img.chaat,
  Fries: img.fries,
  "Garlic Bread": img.sandwich,
  Chinese: img.chinese,
  "Shots & Nuggets": img.fries,
  Salads: img.default,
  Maggie: img.default,
  Wraps: img.sandwich,
  Momos: img.momos,
  "Ice Cream": img.dessert,
  Mocktails: img.drink,
  Lassi: img.drink,
  Brownie: img.dessert,
  "Cold Coffee": img.drink,
  "Hot Drinks": img.drink,
  Tea: img.drink,
  Shakes: img.drink,
  Waffles: img.dessert,
  Snacks: img.chaat,
  Pastry: img.dessert,
};

/** @type {{ name: string; category: string; price: number; description?: string; signature?: boolean }[]} */
const rows = [
  ["Mr Veggie Sub Sandwich", "Sandwich Sub", 130, "Regular ₹130 · Cheese Burst ₹195", true],
  ["Mr Veggie Tikki Sub Sandwich", "Sandwich Sub", 130, "Regular ₹130 · Cheese Burst ₹195", true],
  ["Mr Alootikki Sub Sandwich", "Sandwich Sub", 130, "Regular ₹130 · Cheese Burst ₹195"],
  ["Mr Paneer Sub Sandwich", "Sandwich Sub", 185, "Regular ₹185 · Cheese Burst ₹250"],
  ["Bread & Butter", "Sandwiches", 80, "Regular ₹80 · Grilled ₹90"],
  ["Vegetable Sandwich", "Sandwiches", 80, "Regular ₹80 · Grilled ₹90"],
  ["Nutella Sandwich", "Sandwiches", 145, "₹145"],
  ["Corn Sandwich", "Sandwiches", 95, "Regular ₹95 · Grilled ₹100"],
  ["Paneer Tikka Sandwich", "Sandwiches", 140, "Regular ₹140 · Grilled ₹150", true],
  ["Overloaded Veg Sandwich", "Sandwiches", 185, "Regular ₹185 · Grilled ₹200", true],
  ["Margherita Pizza", "Pizza", 130, "Single ₹130 · Premium ₹170 · Family ₹240"],
  ["Sweet Corn Pizza", "Pizza", 130, "Single ₹130 · Premium ₹170 · Family ₹240"],
  ["Veg Pizza", "Pizza", 130, "Single ₹130 · Premium ₹170 · Family ₹240"],
  ["Single Topping Pizza", "Pizza", 130, "Single ₹130 · Premium ₹170 · Family ₹240"],
  ["Mix Veg Pizza", "Pizza", 145, "Single ₹145 · Premium ₹185 · Family ₹295"],
  ["Paneer Pizza", "Pizza", 150, "Single ₹150 · Premium ₹205 · Family ₹310", true],
  ["Aloo Patty Burger", "Burgers", 70, "Regular ₹70 · Premium ₹80"],
  ["Veggie Patty Burger", "Burgers", 90, "Regular ₹90 · Premium ₹105"],
  ["Paneer Burger", "Burgers", 110, "Regular ₹110 · Premium ₹125"],
  ["Classic Burger", "Burgers", 135, "Regular ₹135 · Premium ₹150"],
  ["Double Tikki Burger", "Burgers", 170, "Regular ₹170 · Premium ₹180", true],
  ["Red Sauce Pasta", "Pasta", 155, "Plain ₹155 · Baked ₹165"],
  ["White Sauce Pasta", "Pasta", 155, "Plain ₹155 · Baked ₹165"],
  ["Pink Sauce Pasta", "Pasta", 175, "Plain ₹175 · Baked ₹185"],
  ["Peanut Chaat", "Chaat", 120],
  ["Butter Corn Chaat", "Chaat", 120],
  ["Masala Veg Corn Chaat", "Chaat", 120],
  ["Simply Salted Fries", "Fries", 80],
  ["Peri Peri Fries", "Fries", 115],
  ["Cheese Fries", "Fries", 140],
  ["Loaded Fries", "Fries", 170, null, true],
  ["Cheese Garlic Bread", "Garlic Bread", 90],
  ["Supreme Treat Garlic Bread", "Garlic Bread", 110, null, true],
  ["Noodles", "Chinese", 110],
  ["Veg Manchurian", "Chinese", 160],
  ["Chilli Paneer", "Chinese", 210],
  ["Veg Spring Roll", "Chinese", 150],
  ["Veg Noodle Spring Roll", "Chinese", 150],
  ["Potato Shot", "Shots & Nuggets", 110],
  ["Chilli Potato Shot", "Shots & Nuggets", 160],
  ["Potato Nugget", "Shots & Nuggets", 150],
  ["Cheese Corn Nugget", "Shots & Nuggets", 165],
  ["Corn Cheese Ball", "Shots & Nuggets", 165],
  ["Cheese Ball", "Shots & Nuggets", 110],
  ["Veg Salad", "Salads", 150],
  ["Mix Salad", "Salads", 180],
  ["Paneer Tikka Salad", "Salads", 210],
  ["Plain Maggie", "Maggie", 65],
  ["Veg Masala Maggie", "Maggie", 75],
  ["Paneer Maggie", "Maggie", 90],
  ["Cheese Maggie", "Maggie", 100],
  ["Salad Wrap", "Wraps", 100],
  ["Aloo Tikki Wrap", "Wraps", 120],
  ["Paneer Wrap", "Wraps", 100],
  ["Simply Veg Momos", "Momos", 85],
  ["Peri Peri Momos", "Momos", 105],
  ["Paneer Tikki Momos", "Momos", 110],
  ["Vanilla Ice Cream", "Ice Cream", 50],
  ["Chocolate Ice Cream", "Ice Cream", 70],
  ["Dry Fruit Ice Cream", "Ice Cream", 85],
  ["Mint Mojito", "Mocktails", 95],
  ["Fresh Lemon Water", "Mocktails", 95],
  ["Mango Mocktail", "Mocktails", 95],
  ["Fresh Lemon Soda", "Mocktails", 110],
  ["Blue Lagoon", "Mocktails", 110],
  ["Strawberry Mocktail", "Mocktails", 120],
  ["Namkeen Lassi", "Lassi", 90],
  ["Mithi Lassi", "Lassi", 90],
  ["Brownie", "Brownie", 100],
  ["Brownie with Ice Cream", "Brownie", 130, null, true],
  ["Crunch Plain Cold Coffee", "Cold Coffee", 120],
  ["Milky Crunch Cold Coffee", "Cold Coffee", 120],
  ["Special Crunch Cold Coffee", "Cold Coffee", 140, "Crunch + Milky + Ice-Cream", true],
  ["Crunch With Ice Cream", "Cold Coffee", 160],
  ["Black Coffee", "Hot Drinks", 45],
  ["Strong Black Coffee", "Hot Drinks", 55],
  ["Hot Chocolate", "Hot Drinks", 75],
  ["Flavour Chai (M)", "Tea", 60, "Signature flavour chai · N/M/L sizes available", true],
  ["Adrak Tea (M)", "Tea", 60, "N ₹40 · M ₹60 · L ₹70"],
  ["Masala Tea (M)", "Tea", 60],
  ["Vanilla Shake", "Shakes", 100],
  ["Chocolate Shake", "Shakes", 110],
  ["Strawberry Shake", "Shakes", 110],
  ["Oreo Shake", "Shakes", 140],
  ["Kitkat Shake", "Shakes", 140],
  ["Dry Fruit Shake", "Shakes", 160],
  ["Classic Corn Waffle", "Waffles", 170],
  ["Nutella Brownie Waffle", "Waffles", 190, null, true],
  ["Fruit Blast Waffle", "Waffles", 190],
  ["Creamy Nutella Waffle", "Waffles", 190],
  ["Masala Bun", "Snacks", 30],
  ["Garlic Bun", "Snacks", 35],
  ["Poha", "Snacks", 100],
  ["Aloo Paratha", "Snacks", 60],
  ["Paneer Paratha", "Snacks", 120],
  ["Kurkure Chaat (Single)", "Snacks", 75, "Double ₹150"],
  ["Pineapple Pastry", "Pastry", 200],
  ["Chocolate Pastry", "Pastry", 200],
];

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const items = rows.map((row) => {
  const [name, category, price, description, signature] = row;
  const id = slug(name);
  return {
    id,
    name,
    category,
    price,
    description: description || `Fresh vegetarian ${category.toLowerCase()} from Mr. Sandwich.`,
    image: catImg[category] || img.default,
    vegetarian: true,
    spicy: /chilli|peri|masala/i.test(name),
    signature: !!signature,
  };
});

const categories = [
  "Sandwich Sub",
  "Sandwiches",
  "Pizza",
  "Burgers",
  "Pasta",
  "Momos",
  "Fries",
  "Chinese",
  "Chaat",
  "Garlic Bread",
  "Shots & Nuggets",
  "Salads",
  "Maggie",
  "Wraps",
  "Ice Cream",
  "Mocktails",
  "Lassi",
  "Brownie",
  "Cold Coffee",
  "Hot Drinks",
  "Tea",
  "Shakes",
  "Waffles",
  "Snacks",
  "Pastry",
];

const out = `export type MenuCategory =
${categories.map((c) => `  | "${c}"`).join("\n")};

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  vegetarian: boolean;
  spicy: boolean;
  calories?: number;
  ingredients?: string[];
  allergens?: string[];
  signature?: boolean;
}

export const menuCategories: MenuCategory[] = ${JSON.stringify(categories, null, 2)};

export const menuItems: MenuItem[] = ${JSON.stringify(items, null, 2)};

export const signatureDishes = menuItems.filter((item) => item.signature);
`;

writeFileSync(new URL("../src/data/menu.ts", import.meta.url), out);
console.log("Wrote", items.length, "menu items");
