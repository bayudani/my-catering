export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  custom?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    name: "Paket Hemat",
    price: "Rp75.000",
    description: "Cocok untuk Anda yang ingin memulai hidup sehat dengan budget terjangkau",
    features: [
      "1x makan siang",
      "Menu mingguan berganti",
      "Bebas MSG & pengawet",
      "Gizi seimbang terjamin",
      "Free delivery area Jabodetabek",
    ],
  },
  {
    name: "Paket Seimbang",
    price: "Rp95.000",
    description: "Pilihan terbaik dengan menu lengkap untuk gaya hidup aktif",
    features: [
      "Makan siang & malam",
      "Menu bervariasi tiap hari",
      "Bahan organik pilihan",
      "Konsultasi gizi gratis",
      "Free delivery area Jabodetabek",
    ],
    highlighted: true,
  },
  {
    name: "Paket Premium",
    price: "Rp125.000",
    description: "Paket lengkap untuk hasil maksimal dengan menu premium setiap hari",
    features: [
      "Sarapan, siang, & malam",
      "2x snack sehat",
      "Menu premium eksklusif",
      "Konsultasi gizi prioritas",
      "Tracking nutrisi harian",
    ],
  },
  {
    name: "Paket Custom",
    price: "Custom",
    description: "Sesuaikan paket dengan kebutuhan spesifik Anda",
    features: [
      "Menu khusus (diet/penyakit)",
      "Frekuensi fleksibel",
      "Durasi sesuai keinginan",
      "Prioritas konsultasi",
      "Corporate catering",
    ],
    custom: true,
  },
];
