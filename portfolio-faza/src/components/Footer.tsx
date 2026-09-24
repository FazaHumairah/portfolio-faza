import { personalInfo } from "@/data/personal";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>FAZA HUMAIRAH</span>
          <span className={styles.tagline}>Teknik Informatika · Politeknik Negeri Lhokseumawe</span>
        </div>

        <div className={styles.links}>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <span className={styles.dot}>·</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <p className={styles.copy}>
          © {year} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
