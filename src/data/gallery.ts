export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  label: string;
  tall?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining table setting",
    label: "Dining Room",
    tall: true,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    alt: "Grilled dish",
    label: "From the Kitchen",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    alt: "Restaurant interior",
    label: "Ambience",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    alt: "Chef plating",
    label: "Chef's Craft",
    tall: true,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7b1e?w=600&q=80",
    alt: "Cocktail",
    label: "Bar",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    alt: "Gourmet plate",
    label: "Signatures",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Seafood dish",
    label: "Mains",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1552569976-79ee0a75825a?w=600&q=80",
    alt: "Guests dining",
    label: "Evenings",
  },
];

export const instagramPosts = galleryImages.slice(0, 6);
