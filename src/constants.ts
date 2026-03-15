export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'haircut-man',
    name: 'Potong Rambut Pria',
    description: 'Potong rambut stylish sesuai bentuk wajah dan tren terkini.',
    price: 80000,
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1599351431247-f10b21ce49b2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'haircut-woman',
    name: 'Potong Rambut Wanita',
    description: 'Transformasi gaya rambut dengan teknik potong profesional.',
    price: 150000,
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'coloring',
    name: 'Hair Coloring',
    description: 'Pewarnaan rambut premium dengan produk berkualitas tinggi.',
    price: 350000,
    duration: '120 min',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'hair-treatment',
    name: 'Hair Treatment / Creambath',
    description: 'Perawatan rambut mendalam untuk kesehatan dan kilau alami.',
    price: 120000,
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'mani-pedi',
    name: 'Manicure & Pedicure',
    description: 'Perawatan kuku tangan dan kaki agar bersih dan cantik.',
    price: 100000,
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'facial',
    name: 'Facial Treatment',
    description: 'Pembersihan wajah mendalam untuk kulit sehat bercahaya.',
    price: 200000,
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1570172234445-0978442a73f5?auto=format&fit=crop&q=80&w=800',
  },
];

export const STYLISTS: Stylist[] = [
  {
    id: 'jerry',
    name: 'Jerry',
    role: 'Senior Stylist & Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'andi',
    name: 'Andi',
    role: 'Hair Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'cici',
    name: 'Cici',
    role: 'Nail & Skin Expert',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'dina',
    name: 'Dina',
    role: 'Junior Stylist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Siska Amelia',
    comment: 'Pelayanan ramah banget, hasil potongannya rapi dan sesuai keinginan. Jerry Salon emang terbaik di Sarijadi!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Budi Santoso',
    comment: 'Tempatnya nyaman dan bersih. Stylist-nya profesional. Sangat recommended buat yang cari salon di Bandung.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Linda Putri',
    comment: 'Coloring-nya bagus banget, rambut tetep lembut. Harganya juga worth it sama hasilnya.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Rian Kurnia',
    comment: 'Booking online-nya gampang banget. Gak perlu antre lama. Top deh!',
    rating: 5,
  },
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1595476108010-b4d1f802b1b1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1527799822367-a288670102dc?auto=format&fit=crop&q=80&w=800',
];
