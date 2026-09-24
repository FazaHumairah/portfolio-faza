import { personalInfo } from "@/data/personal";
import styles from "./Contact.module.css";

const socials = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: personalInfo.linkedin.replace("https://www.", "").replace("https://", ""),
    href: personalInfo.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M6 9v5M6 7v.01M10 14v-3a2 2 0 014 0v3M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: personalInfo.github.replace("https://", ""),
    href: personalInfo.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.7 7.7 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0010 2z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="kontak" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <p className="section-label">Kontak</p>
            <h2 className="section-title">Mari Terhubung</h2>
            <p className={styles.desc}>
              Terbuka untuk peluang kerja, kolaborasi proyek, atau diskusi terkait teknologi.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`btn-primary ${styles.emailBtn}`}
            >
              Kirim Email
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: social links */}
          <div className={styles.right}>
            <div className={styles.socialList}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className={styles.socialCard}
                  aria-label={`${social.label}: ${social.value}`}
                >
                  <div className={styles.socialIcon}>{social.icon}</div>
                  <div className={styles.socialText}>
                    <span className={styles.socialLabel}>{social.label}</span>
                    <span className={styles.socialValue}>{social.value}</span>
                  </div>
                  <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
