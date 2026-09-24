"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Saya", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kemampuan", href: "#kemampuan" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Deteksi section aktif
      const sections = ["beranda", "tentang", "proyek", "pengalaman", "kemampuan", "kontak"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() => handleLinkClick("#beranda")}
          aria-label="Kembali ke atas"
        >
          FAZA'S PAGE
        </button>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Navigasi utama">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <button
                key={link.href}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ""}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className={styles.mobileLink}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
