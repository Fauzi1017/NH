import { Article, Category } from '../types';

export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Belajar Bahasa',
    slug: 'belajar',
    description: 'Materi tata bahasa, kosakata, dan kanji JLPT N5-N1.',
    icon: 'book'
  },
  {
    id: 2,
    name: 'Budaya Jepang',
    slug: 'budaya',
    description: 'Artikel mendalam tentang sejarah, seni, dan tradisi.',
    icon: 'temple'
  },
  {
    id: 3,
    name: 'Tips Hidup',
    slug: 'tips',
    description: 'Panduan praktis untuk tinggal, bekerja, atau liburan di Jepang.',
    icon: 'lightbulb'
  }
];

export const mockArticles: Article[] = [
  {
    id: 1,
    slug: 'panduan-lengkap-hiragana',
    title: 'Panduan Lengkap Hiragana untuk Pemula',
    excerpt: 'Hiragana adalah langkah pertama menguasai bahasa Jepang. Pelajari cara menulis dan membacanya di sini.',
    content: '<p>Hiragana (平仮名) adalah salah satu dari tiga sistem penulisan bahasa Jepang. Digunakan untuk partikel tata bahasa dan kata-kata asli Jepang yang tidak memiliki Kanji.</p><h3>Mengapa Hiragana Penting?</h3><p>Tanpa Hiragana, Anda tidak bisa membaca struktur kalimat dasar.</p>',
    image: 'https://picsum.photos/800/450?random=1',
    category: 'Belajar',
    author: 'Kenji Sato',
    created_at: '2023-10-15'
  },
  {
    id: 2,
    slug: 'etika-makan-di-jepang',
    title: 'Etika Makan di Jepang yang Wajib Diketahui',
    excerpt: 'Jangan tancapkan sumpit di nasi! Simak aturan dasar table manner di Jepang agar tidak dianggap tidak sopan.',
    content: '<p>Etika makan di Jepang sangat dihargai. Mengucapkan "Itadakimasu" sebelum makan adalah hal wajib.</p><h3>Aturan Sumpit</h3><p>Jangan pernah mengoper makanan dari sumpit ke sumpit karena mirip ritual pemakaman.</p>',
    image: 'https://picsum.photos/800/450?random=2',
    category: 'Budaya',
    author: 'Ayu Lestari',
    created_at: '2023-10-18'
  },
  {
    id: 3,
    slug: 'cara-hemat-transportasi-jepang',
    title: 'Cara Hemat Transportasi Saat Liburan ke Jepang',
    excerpt: 'JR Pass atau kartu IC? Temukan strategi terbaik untuk menghemat biaya perjalanan Anda.',
    content: '<p>Transportasi di Jepang terkenal mahal. Namun, turis asing bisa memanfaatkan JR Pass untuk perjalanan jarak jauh menggunakan Shinkansen.</p>',
    image: 'https://picsum.photos/800/450?random=3',
    category: 'Tips',
    author: 'Budi Santoso',
    created_at: '2023-10-20'
  },
  {
    id: 4,
    slug: 'sejarah-samurai',
    title: 'Sejarah Samurai: Lebih dari Sekadar Pedang',
    excerpt: 'Menelusuri jejak para ksatria Jepang zaman feodal dan filosofi Bushido yang mereka anut.',
    content: '<p>Samurai bukan hanya tentang bertarung, tapi juga tentang seni, puisi, dan loyalitas tanpa batas.</p>',
    image: 'https://picsum.photos/800/450?random=4',
    category: 'Budaya',
    author: 'Kenji Sato',
    created_at: '2023-10-22'
  },
  {
    id: 5,
    slug: 'jlpt-n5-grammar',
    title: 'Rangkuman Tata Bahasa JLPT N5',
    excerpt: 'Siap ujian? Ini dia daftar pola kalimat yang paling sering muncul di ujian JLPT N5.',
    content: '<p>Pola kalimat dasar seperti Wa, Ga, Wo, Ni, De harus dikuasai di luar kepala.</p>',
    image: 'https://picsum.photos/800/450?random=5',
    category: 'Belajar',
    author: 'Sensei Tanaka',
    created_at: '2023-10-25'
  }
];