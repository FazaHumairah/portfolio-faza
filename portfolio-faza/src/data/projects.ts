// DATA PROYEK 

export type Tech = string;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  role?: string;
  tech: Tech[];
  contributions: string[];
  result?: string;
  images: string[];
  isThesis?: boolean;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: "snapsign",
    title: "SnapSign",
    subtitle: "Sistem Pengenalan Bahasa Isyarat Indonesia Dinamis Berbasis Mobile",
    shortDesc:
      "Aplikasi mobile pengenal 24 gestur BISINDO lewat kamera, didukung model deep learning ringan yang hemat komputasi.",
    role: "Perancangan aplikasi, pengembangan model, integrasi model ke aplikasi, dan pengujian",
    description:
      "SnapSign adalah sistem pengenalan bahasa isyarat berbasis mobile yang mampu mendeteksi dan menerjemahkan gerakan tangan dalam Bahasa Isyarat Indonesia (BISINDO) secara real-time. Dibangun dengan Flutter untuk antarmuka mobile dan model PyTorch yang dioptimasi untuk inferensi cepat di perangkat.",
    tech: ["Flutter", "Python", "PyTorch", "Computer Vision", "TensorFlow Lite"],
    contributions: [
      "Merancang dan melatih model deep learning untuk klasifikasi gerakan tangan",
      "Mengintegrasikan model ke aplikasi Flutter menggunakan TFLite",
      "Membangun pipeline preprocessing gambar secara real-time",
      "Melakukan evaluasi dan pengujian akurasi model",
    ],
    result: "97,22% akurasi pada data pengujian",
    isThesis: true,
    images: [
      "/projects/snapsign/1.png",
    ],
    repoUrl: "https://github.com/FazaHumairah/SnapSign",
  },
  {
    id: "asimetris",
    title: "A-SIMETRIS",
    subtitle: "Sistem Manajemen Terintegrasi PLN UID Aceh",
    shortDesc:
      "Sistem informasi internal untuk membantu pengelolaan dokumen dan monitoring kinerja di PLN UID Aceh, dilengkapi dashboard KPI, import data Excel, pengarsipan dokumen, sertifikat, dan pengingat kegiatan.",
    role: "Pengembangan frontend & backend (Full-stack development)",
    description:
      "A-SIMETRIS (Aplikasi Sistem Manajemen Terintegrasi) adalah platform web enterprise yang dibangun untuk PLN UID Aceh guna mengintegrasikan berbagai proses manajemen internal. Sistem ini mencakup manajemen aset, pelaporan, import data Excel, pengarsipan dokumen, sertifikat, pengingat kegiatan, dan pemantauan operasional dengan antarmuka yang intuitif.",
    tech: ["React", "TypeScript", "Express.js", "PostgreSQL", "REST API"],
    contributions: [
      "Mengembangkan antarmuka dashboard KPI & manajemen dokumen dengan React dan TypeScript",
      "Merancang dan mengimplementasikan REST API menggunakan Express.js",
      "Mengelola skema database PostgreSQL & integrasi import data Excel",
      "Berkolaborasi dalam sesi pengembangan agile bersama tim PLN",
    ],
    images: [
      "/projects/asimetris/1.png",
      "/projects/asimetris/2.png",
      "/projects/asimetris/3.png",
    ],
    repoUrl: "https://github.com/FazaHumairah/PROJECT_PLN",
  },
  {
    id: "chatterhand",
    title: "ChatterHand",
    subtitle: "Aplikasi Komunikasi Berbasis Bahasa Isyarat",
    shortDesc:
      "Aplikasi mobile berbasis AI yang mengeksplorasi penggunaan bahasa isyarat untuk mendukung komunikasi dan aksesibilitas.",
    role: "Merancang arsitektur aplikasi, integrasi model AI, dan komunikasi real-time",
    description:
      "ChatterHand adalah aplikasi mobile berbasis AI yang mengeksplorasi penggunaan bahasa isyarat untuk mendukung komunikasi dan aksesibilitas bagi pengguna tunarungu. Menggunakan kamera perangkat untuk mendeteksi gerakan tangan dan mentranslasikannya secara langsung.",
    tech: ["Flutter", "Python", "AI", "Computer Vision"],
    contributions: [
      "Merancang arsitektur aplikasi dan alur komunikasi real-time",
      "Mengintegrasikan model AI pengenalan bahasa isyarat ke aplikasi Flutter",
      "Mendesain antarmuka pengguna yang inklusif dan mudah diakses",
    ],
    images: [
      "/projects/chatterhand/1.png",
    ],
    repoUrl: "https://github.com/FazaHumairah/chatterhands",
  },
];

export default projects;
