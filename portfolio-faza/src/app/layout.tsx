import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faza Humairah — Portfolio",
  description:
    "Portfolio Faza Humairah, S.Tr.Kom. — Lulusan Sarjana Terapan Teknik Informatika Politeknik Negeri Lhokseumawe. Spesialisasi pada pengembangan aplikasi, pengolahan data, dan kecerdasan buatan.",
  keywords: [
    "Faza Humairah",
    "portfolio",
    "teknik informatika",
    "flutter",
    "python",
    "computer vision",
    "AI",
  ],
  authors: [{ name: "Faza Humairah" }],
  openGraph: {
    title: "Faza Humairah — Portfolio",
    description:
      "Portfolio Faza Humairah, S.Tr.Kom. — Pengembang aplikasi dan AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
