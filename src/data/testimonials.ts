export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Best vegetarian café in Devigarh. The paneer tikka sandwich and loaded fries are always fresh and tasty.",
    name: "Local Guest",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Flavour chai and special cold coffee are must-tries. Great place for friends and family.",
    name: "Patiala Foodie",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Affordable prices, generous portions, and quick service near the bus stand. We order momos and pizza often.",
    name: "Devigarh Resident",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Pure veg menu with so many options — sandwiches, pasta, shakes, and brownies. Kids love it here.",
    name: "Family Visitor",
    rating: 5,
  },
];
