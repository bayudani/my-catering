export interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dewi Lestari",
    role: "Ibu Rumah Tangga",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content:
      "My-Catering benar-benar mengubah pola makan keluarga saya. Menu yang bervariasi setiap hari membuat anak-anak jadi lebih suka makan sayur. Pengiriman selalu tepat waktu!",
    rating: 5,
  },
  {
    name: "Rizky Pratama",
    role: "Karyawan Kantoran",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "Sebagai pekerja kantoran, saya sering kesulitan menjaga makan sehat. My-Catering solusi tepat! Praktis, bergizi, dan rasanya enak. Badan terasa lebih fit dan bugar.",
    rating: 5,
  },
  {
    name: "Anita Wijaya",
    role: "Fitness Enthusiast",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content:
      "Porsi dan gizi yang disediakan My-Catering sangat sesuai dengan kebutuhan makro saya. Konsultasi dengan ahlinya juga membantu banget mencapai target body goals!",
    rating: 5,
  },
];
