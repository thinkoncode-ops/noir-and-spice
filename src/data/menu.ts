export type MenuCategory =
  | "Sandwich Sub"
  | "Sandwiches"
  | "Pizza"
  | "Burgers"
  | "Pasta"
  | "Momos"
  | "Fries"
  | "Chinese"
  | "Chaat"
  | "Garlic Bread"
  | "Shots & Nuggets"
  | "Salads"
  | "Maggie"
  | "Wraps"
  | "Ice Cream"
  | "Mocktails"
  | "Lassi"
  | "Brownie"
  | "Cold Coffee"
  | "Hot Drinks"
  | "Tea"
  | "Shakes"
  | "Waffles"
  | "Snacks"
  | "Pastry";

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

export const menuCategories: MenuCategory[] = [
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
  "Pastry"
];

export const menuItems: MenuItem[] = [
  {
    "id": "mr-veggie-sub-sandwich",
    "name": "Mr Veggie Sub Sandwich",
    "category": "Sandwich Sub",
    "price": 130,
    "description": "Regular ₹130 · Cheese Burst ₹195",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "mr-veggie-tikki-sub-sandwich",
    "name": "Mr Veggie Tikki Sub Sandwich",
    "category": "Sandwich Sub",
    "price": 130,
    "description": "Regular ₹130 · Cheese Burst ₹195",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "mr-alootikki-sub-sandwich",
    "name": "Mr Alootikki Sub Sandwich",
    "category": "Sandwich Sub",
    "price": 130,
    "description": "Regular ₹130 · Cheese Burst ₹195",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "mr-paneer-sub-sandwich",
    "name": "Mr Paneer Sub Sandwich",
    "category": "Sandwich Sub",
    "price": 185,
    "description": "Regular ₹185 · Cheese Burst ₹250",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "bread-butter",
    "name": "Bread & Butter",
    "category": "Sandwiches",
    "price": 80,
    "description": "Regular ₹80 · Grilled ₹90",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "vegetable-sandwich",
    "name": "Vegetable Sandwich",
    "category": "Sandwiches",
    "price": 80,
    "description": "Regular ₹80 · Grilled ₹90",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "nutella-sandwich",
    "name": "Nutella Sandwich",
    "category": "Sandwiches",
    "price": 145,
    "description": "₹145",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "corn-sandwich",
    "name": "Corn Sandwich",
    "category": "Sandwiches",
    "price": 95,
    "description": "Regular ₹95 · Grilled ₹100",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "paneer-tikka-sandwich",
    "name": "Paneer Tikka Sandwich",
    "category": "Sandwiches",
    "price": 140,
    "description": "Regular ₹140 · Grilled ₹150",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "overloaded-veg-sandwich",
    "name": "Overloaded Veg Sandwich",
    "category": "Sandwiches",
    "price": 185,
    "description": "Regular ₹185 · Grilled ₹200",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "margherita-pizza",
    "name": "Margherita Pizza",
    "category": "Pizza",
    "price": 130,
    "description": "Single ₹130 · Premium ₹170 · Family ₹240",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "sweet-corn-pizza",
    "name": "Sweet Corn Pizza",
    "category": "Pizza",
    "price": 130,
    "description": "Single ₹130 · Premium ₹170 · Family ₹240",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "veg-pizza",
    "name": "Veg Pizza",
    "category": "Pizza",
    "price": 130,
    "description": "Single ₹130 · Premium ₹170 · Family ₹240",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "single-topping-pizza",
    "name": "Single Topping Pizza",
    "category": "Pizza",
    "price": 130,
    "description": "Single ₹130 · Premium ₹170 · Family ₹240",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "mix-veg-pizza",
    "name": "Mix Veg Pizza",
    "category": "Pizza",
    "price": 145,
    "description": "Single ₹145 · Premium ₹185 · Family ₹295",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "paneer-pizza",
    "name": "Paneer Pizza",
    "category": "Pizza",
    "price": 150,
    "description": "Single ₹150 · Premium ₹205 · Family ₹310",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "aloo-patty-burger",
    "name": "Aloo Patty Burger",
    "category": "Burgers",
    "price": 70,
    "description": "Regular ₹70 · Premium ₹80",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "veggie-patty-burger",
    "name": "Veggie Patty Burger",
    "category": "Burgers",
    "price": 90,
    "description": "Regular ₹90 · Premium ₹105",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "paneer-burger",
    "name": "Paneer Burger",
    "category": "Burgers",
    "price": 110,
    "description": "Regular ₹110 · Premium ₹125",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "classic-burger",
    "name": "Classic Burger",
    "category": "Burgers",
    "price": 135,
    "description": "Regular ₹135 · Premium ₹150",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "double-tikki-burger",
    "name": "Double Tikki Burger",
    "category": "Burgers",
    "price": 170,
    "description": "Regular ₹170 · Premium ₹180",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "red-sauce-pasta",
    "name": "Red Sauce Pasta",
    "category": "Pasta",
    "price": 155,
    "description": "Plain ₹155 · Baked ₹165",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "white-sauce-pasta",
    "name": "White Sauce Pasta",
    "category": "Pasta",
    "price": 155,
    "description": "Plain ₹155 · Baked ₹165",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "pink-sauce-pasta",
    "name": "Pink Sauce Pasta",
    "category": "Pasta",
    "price": 175,
    "description": "Plain ₹175 · Baked ₹185",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "peanut-chaat",
    "name": "Peanut Chaat",
    "category": "Chaat",
    "price": 120,
    "description": "Fresh vegetarian chaat from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "butter-corn-chaat",
    "name": "Butter Corn Chaat",
    "category": "Chaat",
    "price": 120,
    "description": "Fresh vegetarian chaat from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "masala-veg-corn-chaat",
    "name": "Masala Veg Corn Chaat",
    "category": "Chaat",
    "price": 120,
    "description": "Fresh vegetarian chaat from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "simply-salted-fries",
    "name": "Simply Salted Fries",
    "category": "Fries",
    "price": 80,
    "description": "Fresh vegetarian fries from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "peri-peri-fries",
    "name": "Peri Peri Fries",
    "category": "Fries",
    "price": 115,
    "description": "Fresh vegetarian fries from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "cheese-fries",
    "name": "Cheese Fries",
    "category": "Fries",
    "price": 140,
    "description": "Fresh vegetarian fries from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "loaded-fries",
    "name": "Loaded Fries",
    "category": "Fries",
    "price": 170,
    "description": "Fresh vegetarian fries from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "cheese-garlic-bread",
    "name": "Cheese Garlic Bread",
    "category": "Garlic Bread",
    "price": 90,
    "description": "Fresh vegetarian garlic bread from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "supreme-treat-garlic-bread",
    "name": "Supreme Treat Garlic Bread",
    "category": "Garlic Bread",
    "price": 110,
    "description": "Fresh vegetarian garlic bread from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "noodles",
    "name": "Noodles",
    "category": "Chinese",
    "price": 110,
    "description": "Fresh vegetarian chinese from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "veg-manchurian",
    "name": "Veg Manchurian",
    "category": "Chinese",
    "price": 160,
    "description": "Fresh vegetarian chinese from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "chilli-paneer",
    "name": "Chilli Paneer",
    "category": "Chinese",
    "price": 210,
    "description": "Fresh vegetarian chinese from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "veg-spring-roll",
    "name": "Veg Spring Roll",
    "category": "Chinese",
    "price": 150,
    "description": "Fresh vegetarian chinese from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "veg-noodle-spring-roll",
    "name": "Veg Noodle Spring Roll",
    "category": "Chinese",
    "price": 150,
    "description": "Fresh vegetarian chinese from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "potato-shot",
    "name": "Potato Shot",
    "category": "Shots & Nuggets",
    "price": 110,
    "description": "Fresh vegetarian shots & nuggets from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "chilli-potato-shot",
    "name": "Chilli Potato Shot",
    "category": "Shots & Nuggets",
    "price": 160,
    "description": "Fresh vegetarian shots & nuggets from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "potato-nugget",
    "name": "Potato Nugget",
    "category": "Shots & Nuggets",
    "price": 150,
    "description": "Fresh vegetarian shots & nuggets from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "cheese-corn-nugget",
    "name": "Cheese Corn Nugget",
    "category": "Shots & Nuggets",
    "price": 165,
    "description": "Fresh vegetarian shots & nuggets from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "corn-cheese-ball",
    "name": "Corn Cheese Ball",
    "category": "Shots & Nuggets",
    "price": 165,
    "description": "Fresh vegetarian shots & nuggets from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "cheese-ball",
    "name": "Cheese Ball",
    "category": "Shots & Nuggets",
    "price": 110,
    "description": "Fresh vegetarian shots & nuggets from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1573080496219-b178a7504df4?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "veg-salad",
    "name": "Veg Salad",
    "category": "Salads",
    "price": 150,
    "description": "Fresh vegetarian salads from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "mix-salad",
    "name": "Mix Salad",
    "category": "Salads",
    "price": 180,
    "description": "Fresh vegetarian salads from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "paneer-tikka-salad",
    "name": "Paneer Tikka Salad",
    "category": "Salads",
    "price": 210,
    "description": "Fresh vegetarian salads from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "plain-maggie",
    "name": "Plain Maggie",
    "category": "Maggie",
    "price": 65,
    "description": "Fresh vegetarian maggie from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "veg-masala-maggie",
    "name": "Veg Masala Maggie",
    "category": "Maggie",
    "price": 75,
    "description": "Fresh vegetarian maggie from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "paneer-maggie",
    "name": "Paneer Maggie",
    "category": "Maggie",
    "price": 90,
    "description": "Fresh vegetarian maggie from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "cheese-maggie",
    "name": "Cheese Maggie",
    "category": "Maggie",
    "price": 100,
    "description": "Fresh vegetarian maggie from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "salad-wrap",
    "name": "Salad Wrap",
    "category": "Wraps",
    "price": 100,
    "description": "Fresh vegetarian wraps from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "aloo-tikki-wrap",
    "name": "Aloo Tikki Wrap",
    "category": "Wraps",
    "price": 120,
    "description": "Fresh vegetarian wraps from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "paneer-wrap",
    "name": "Paneer Wrap",
    "category": "Wraps",
    "price": 100,
    "description": "Fresh vegetarian wraps from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "simply-veg-momos",
    "name": "Simply Veg Momos",
    "category": "Momos",
    "price": 85,
    "description": "Fresh vegetarian momos from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1d4160?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "peri-peri-momos",
    "name": "Peri Peri Momos",
    "category": "Momos",
    "price": 105,
    "description": "Fresh vegetarian momos from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1d4160?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "paneer-tikki-momos",
    "name": "Paneer Tikki Momos",
    "category": "Momos",
    "price": 110,
    "description": "Fresh vegetarian momos from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1d4160?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "vanilla-ice-cream",
    "name": "Vanilla Ice Cream",
    "category": "Ice Cream",
    "price": 50,
    "description": "Fresh vegetarian ice cream from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "chocolate-ice-cream",
    "name": "Chocolate Ice Cream",
    "category": "Ice Cream",
    "price": 70,
    "description": "Fresh vegetarian ice cream from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "dry-fruit-ice-cream",
    "name": "Dry Fruit Ice Cream",
    "category": "Ice Cream",
    "price": 85,
    "description": "Fresh vegetarian ice cream from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "mint-mojito",
    "name": "Mint Mojito",
    "category": "Mocktails",
    "price": 95,
    "description": "Fresh vegetarian mocktails from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "fresh-lemon-water",
    "name": "Fresh Lemon Water",
    "category": "Mocktails",
    "price": 95,
    "description": "Fresh vegetarian mocktails from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "mango-mocktail",
    "name": "Mango Mocktail",
    "category": "Mocktails",
    "price": 95,
    "description": "Fresh vegetarian mocktails from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "fresh-lemon-soda",
    "name": "Fresh Lemon Soda",
    "category": "Mocktails",
    "price": 110,
    "description": "Fresh vegetarian mocktails from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "blue-lagoon",
    "name": "Blue Lagoon",
    "category": "Mocktails",
    "price": 110,
    "description": "Fresh vegetarian mocktails from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "strawberry-mocktail",
    "name": "Strawberry Mocktail",
    "category": "Mocktails",
    "price": 120,
    "description": "Fresh vegetarian mocktails from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "namkeen-lassi",
    "name": "Namkeen Lassi",
    "category": "Lassi",
    "price": 90,
    "description": "Fresh vegetarian lassi from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "mithi-lassi",
    "name": "Mithi Lassi",
    "category": "Lassi",
    "price": 90,
    "description": "Fresh vegetarian lassi from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "brownie",
    "name": "Brownie",
    "category": "Brownie",
    "price": 100,
    "description": "Fresh vegetarian brownie from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "brownie-with-ice-cream",
    "name": "Brownie with Ice Cream",
    "category": "Brownie",
    "price": 130,
    "description": "Fresh vegetarian brownie from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "crunch-plain-cold-coffee",
    "name": "Crunch Plain Cold Coffee",
    "category": "Cold Coffee",
    "price": 120,
    "description": "Fresh vegetarian cold coffee from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "milky-crunch-cold-coffee",
    "name": "Milky Crunch Cold Coffee",
    "category": "Cold Coffee",
    "price": 120,
    "description": "Fresh vegetarian cold coffee from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "special-crunch-cold-coffee",
    "name": "Special Crunch Cold Coffee",
    "category": "Cold Coffee",
    "price": 140,
    "description": "Crunch + Milky + Ice-Cream",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "crunch-with-ice-cream",
    "name": "Crunch With Ice Cream",
    "category": "Cold Coffee",
    "price": 160,
    "description": "Fresh vegetarian cold coffee from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "black-coffee",
    "name": "Black Coffee",
    "category": "Hot Drinks",
    "price": 45,
    "description": "Fresh vegetarian hot drinks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "strong-black-coffee",
    "name": "Strong Black Coffee",
    "category": "Hot Drinks",
    "price": 55,
    "description": "Fresh vegetarian hot drinks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "hot-chocolate",
    "name": "Hot Chocolate",
    "category": "Hot Drinks",
    "price": 75,
    "description": "Fresh vegetarian hot drinks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "flavour-chai-m",
    "name": "Flavour Chai (M)",
    "category": "Tea",
    "price": 60,
    "description": "Signature flavour chai · N/M/L sizes available",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "adrak-tea-m",
    "name": "Adrak Tea (M)",
    "category": "Tea",
    "price": 60,
    "description": "N ₹40 · M ₹60 · L ₹70",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "masala-tea-m",
    "name": "Masala Tea (M)",
    "category": "Tea",
    "price": 60,
    "description": "Fresh vegetarian tea from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "vanilla-shake",
    "name": "Vanilla Shake",
    "category": "Shakes",
    "price": 100,
    "description": "Fresh vegetarian shakes from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "chocolate-shake",
    "name": "Chocolate Shake",
    "category": "Shakes",
    "price": 110,
    "description": "Fresh vegetarian shakes from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "strawberry-shake",
    "name": "Strawberry Shake",
    "category": "Shakes",
    "price": 110,
    "description": "Fresh vegetarian shakes from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "oreo-shake",
    "name": "Oreo Shake",
    "category": "Shakes",
    "price": 140,
    "description": "Fresh vegetarian shakes from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "kitkat-shake",
    "name": "Kitkat Shake",
    "category": "Shakes",
    "price": 140,
    "description": "Fresh vegetarian shakes from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "dry-fruit-shake",
    "name": "Dry Fruit Shake",
    "category": "Shakes",
    "price": 160,
    "description": "Fresh vegetarian shakes from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "classic-corn-waffle",
    "name": "Classic Corn Waffle",
    "category": "Waffles",
    "price": 170,
    "description": "Fresh vegetarian waffles from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "nutella-brownie-waffle",
    "name": "Nutella Brownie Waffle",
    "category": "Waffles",
    "price": 190,
    "description": "Fresh vegetarian waffles from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": true
  },
  {
    "id": "fruit-blast-waffle",
    "name": "Fruit Blast Waffle",
    "category": "Waffles",
    "price": 190,
    "description": "Fresh vegetarian waffles from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "creamy-nutella-waffle",
    "name": "Creamy Nutella Waffle",
    "category": "Waffles",
    "price": 190,
    "description": "Fresh vegetarian waffles from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "masala-bun",
    "name": "Masala Bun",
    "category": "Snacks",
    "price": 30,
    "description": "Fresh vegetarian snacks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": true,
    "signature": false
  },
  {
    "id": "garlic-bun",
    "name": "Garlic Bun",
    "category": "Snacks",
    "price": 35,
    "description": "Fresh vegetarian snacks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "poha",
    "name": "Poha",
    "category": "Snacks",
    "price": 100,
    "description": "Fresh vegetarian snacks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "aloo-paratha",
    "name": "Aloo Paratha",
    "category": "Snacks",
    "price": 60,
    "description": "Fresh vegetarian snacks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "paneer-paratha",
    "name": "Paneer Paratha",
    "category": "Snacks",
    "price": 120,
    "description": "Fresh vegetarian snacks from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "kurkure-chaat-single",
    "name": "Kurkure Chaat (Single)",
    "category": "Snacks",
    "price": 75,
    "description": "Double ₹150",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008296fbe?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "pineapple-pastry",
    "name": "Pineapple Pastry",
    "category": "Pastry",
    "price": 200,
    "description": "Fresh vegetarian pastry from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  },
  {
    "id": "chocolate-pastry",
    "name": "Chocolate Pastry",
    "category": "Pastry",
    "price": 200,
    "description": "Fresh vegetarian pastry from Mr. Sandwich.",
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    "vegetarian": true,
    "spicy": false,
    "signature": false
  }
];

export const signatureDishes = menuItems.filter((item) => item.signature);
