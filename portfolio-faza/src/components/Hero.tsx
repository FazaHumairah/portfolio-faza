import Image from "next/image";
import { personalInfo } from "@/data/personal";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("proyek");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beranda" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Text content */}
        <div className={styles.content}>
          <p className={styles.greeting}>
            Faza Humairah's Portfolio
          </p>

          <h1 className={styles.name}>
            {personalInfo.name}
            <span className={styles.degree}>{personalInfo.degree} — {personalInfo.major}</span>
          </h1>


          <p className={styles.bio}>{personalInfo.shortBio}</p>

          <div className={styles.actions}>
            <button className="btn-primary" onClick={scrollToProjects}>
              Lihat Proyek
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className={styles.imageWrapper}>
          {/* Decorative dots */}
          <div className={styles.dotsDecor} aria-hidden="true" />

          <div className={styles.imageFrame}>
            <Image
              src={personalInfo.profileImage}
              alt={`Foto profil ${personalInfo.name}`}
              width={340}
              height={400}
              className={styles.profileImg}
              priority
            />
            {/* Placeholder — hanya muncul jika foto gagal load */}
            <div className={styles.placeholder} aria-hidden="true" style={{ display: "none" }}>
              <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="28" r="16" fill="rgba(37,99,235,0.12)" />
                <ellipse cx="40" cy="68" rx="26" ry="16" fill="rgba(37,99,235,0.08)" />
              </svg>
              <p>Tambahkan foto profil<br />di <code>public/profile.jpg</code></p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
