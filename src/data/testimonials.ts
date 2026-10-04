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
      "Every dish felt intentional. The flavors were incredible and the atmosphere was unforgettable.",
    name: "Riya Sharma",
    role: "Food Writer",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "The chef's table experience redefined Indian fine dining for us. Impeccable service from start to finish.",
    name: "Arnav & Priya Kapoor",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Dark, cinematic, and delicious. The truffle butter chicken alone is worth the visit.",
    name: "Marcus Chen",
    role: "Corporate Guest",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "Weekend brunch here feels like a secret you want to share — but only with people you like.",
    name: "Simran Kaur",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "From cocktails to dessert, every course had a story. Our anniversary dinner was perfect.",
    name: "Elena Rodriguez",
    rating: 5,
  },
];
