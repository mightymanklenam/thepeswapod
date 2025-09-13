export interface Episode {
  id: string;
  title: string;
  description: string;
  guest: string;
  guestTitle: string;
  duration: string;
  publishDate: string;
  episodeNumber: number;
  coverImage: string;
  tags: string[];
  downloads: string;
  featured?: boolean;
  links: {
    spotify?: string;
    apple?: string;
    youtube?: string;
  };
}

export const episodes: Episode[] = [
  {
    id: "1",
    title: "Building a $50M Empire from Scratch",
    description: "Sarah Mensah, CEO of TechVentures Ghana, shares her incredible journey from a small village to building one of West Africa's most successful tech companies. Learn about the challenges, failures, and breakthroughs that shaped her entrepreneurial mindset.",
    guest: "Sarah Mensah",
    guestTitle: "CEO, TechVentures Ghana",
    duration: "68 min",
    publishDate: "2024-01-15",
    episodeNumber: 45,
    coverImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
    tags: ["Technology", "Startup", "Leadership"],
    downloads: "2.1M",
    featured: true,
    links: {
      spotify: "https://open.spotify.com/episode/0UL1FWGWTTm1LVpKN6EOQn?si=pvK82_0RQqqCIIL533Y_-g",
      apple: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541?i=1000701453010",
      youtube: "https://youtu.be/PXBx7CGPv8M?si=szs9_a7i-P3m_a3V",
    },
  },
  {
    id: "2",
    title: "From Farmland to Fintech: Revolutionizing Agriculture",
    description: "Meet Kwame Asante, founder of AgriPay, who's transforming how smallholder farmers access financial services across East Africa. Discover how technology is bridging the gap between traditional farming and modern finance.",
    guest: "Kwame Asante",
    guestTitle: "Founder, AgriPay",
    duration: "52 min",
    publishDate: "2024-01-08",
    episodeNumber: 44,
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    tags: ["Fintech", "Agriculture", "Innovation"],
    downloads: "1.8M",
    links: {
      spotify: "https://open.spotify.com/episode/4Vkt6Ku5K3m4eizSWZrq0o?si=trcYh8FSSUaBs_NTPq1yBg",
      apple: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541?i=1000709790029",
      youtube: "https://youtu.be/3Gj9HDvv1YU?si=fgMBez82VEuRvN8v",
    },
  },
  {
    id: "3",
    title: "The Art of Scaling: From Lagos to London",
    description: "Adaora Okafor built Nigeria's fastest-growing e-commerce platform and expanded to 12 countries in just 3 years. She reveals the strategies, partnerships, and mindset shifts that made international expansion possible.",
    guest: "Adaora Okafor",
    guestTitle: "Co-founder & CEO, ShopAfrica",
    duration: "61 min",
    publishDate: "2024-01-01",
    episodeNumber: 43,
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    tags: ["E-commerce", "Scaling", "International"],
    downloads: "1.9M",
    links: {
      spotify: "https://open.spotify.com/episode/1IVtctbRpjtwyoRt7bp2IC?si=qPw69pQ1QvOjqqSjXwR9lw",
      apple: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541?i=1000715974822",
      youtube: "https://youtu.be/FnRkwO6A8zA?si=FXqWvQrRscPH_IM4",
    },
  },
  {
    id: "4",
    title: "Mining Data, Mining Gold: AI in African Healthcare",
    description: "Dr. Amina Hassan is using artificial intelligence to solve healthcare challenges across the continent. From diagnostic tools to drug discovery, learn how she's building the future of African healthcare technology.",
    guest: "Dr. Amina Hassan",
    guestTitle: "CEO, MedTech Solutions",
    duration: "57 min",
    publishDate: "2023-12-25",
    episodeNumber: 42,
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
    tags: ["Healthcare", "AI", "Technology"],
    downloads: "1.6M",
    links: {
      spotify: "https://open.spotify.com/show/5PDpRGJAl4HahirOJMGo4l?si=AnAQXs5kS2OZiTjJ-izaTA",
      apple: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541",
      youtube: "https://youtube.com/watch?v=example4",
    },
  },
  {
    id: "5",
    title: "Green Energy, Green Profits: Solar Success Story",
    description: "Themba Mthembu turned a simple idea about solar energy into Southern Africa's leading renewable energy company. Discover how sustainability and profitability can work hand in hand in emerging markets.",
    guest: "Themba Mthembu",
    guestTitle: "Founder, SolarPower SA",
    duration: "49 min",
    publishDate: "2023-12-18",
    episodeNumber: 41,
    coverImage: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop",
    tags: ["Green Energy", "Sustainability", "Innovation"],
    downloads: "1.4M",
    links: {
      spotify: "https://open.spotify.com/show/5PDpRGJAl4HahirOJMGo4l?si=AnAQXs5kS2OZiTjJ-izaTA",
      apple: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541",
      youtube: "https://youtube.com/watch?v=example5",
    },
  },
  {
    id: "6",
    title: "Fashion Forward: Building Africa's Next Luxury Brand",
    description: "Fatima Al-Rashid is redefining African fashion on the global stage. From her atelier in Morocco to fashion weeks in Paris and Milan, she shares how she's building a luxury brand that celebrates African craftsmanship.",
    guest: "Fatima Al-Rashid",
    guestTitle: "Creative Director, Afrique Luxe",
    duration: "44 min",
    publishDate: "2023-12-11",
    episodeNumber: 40,
    coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    tags: ["Fashion", "Luxury", "Global"],
    downloads: "1.3M",
    links: {
      spotify: "https://open.spotify.com/show/5PDpRGJAl4HahirOJMGo4l?si=AnAQXs5kS2OZiTjJ-izaTA",
      apple: "https://podcasts.apple.com/gh/podcast/the-peswa-podcast/id1781537541",
      youtube: "https://youtube.com/watch?v=example6",
    },
  },
];