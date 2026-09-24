import { personalInfo, education } from "@/data/personal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="tentang" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: text */}
          <div className={styles.textCol}>
            <p className="section-label">Tentang Saya</p>
            <h2 className="section-title">Halo, saya Faza 👋</h2>

            <div className={styles.paragraphs}>
              {personalInfo.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {personalInfo.cvUrl && personalInfo.cvUrl !== "#" && (
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ marginTop: "24px", display: "inline-flex" }}
              >
                Unduh CV
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M3 7l4 4 4-4M1 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>

          {/* Right: cards */}
          <div className={styles.cardsCol}>
            {/* Pendidikan */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L2 6l8 4 8-4-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M2 6v6M6 8.5v5a6 6 0 008 0V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className={styles.cardLabel}>Pendidikan</p>
                {education.map((edu, i) => (
                  <div key={i} className={styles.eduItem}>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                    <p className={styles.eduInstitution}>{edu.institution}</p>
                    <div className={styles.eduMeta}>
                      <span>{edu.period}</span>
                      {edu.gpa && (
                        <>
                          <span className={styles.dot}>·</span>
                          <span>IPK {edu.gpa}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skripsi */}
            {personalInfo.thesisTitle && (
              <div className={styles.card}>
                <div className={styles.cardIcon} style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 2h8l4 4v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M13 2v5h5M7 9h6M7 12h6M7 15h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className={styles.cardLabel}>Skripsi · {personalInfo.thesisYear}</p>
                  <p className={styles.thesisTitle}>{personalInfo.thesisTitle}</p>
                </div>
              </div>
            )}

            {/* Ketertarikan */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3a7 7 0 100 14A7 7 0 0010 3z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className={styles.cardLabel}>Ketertarikan</p>
                <div className={styles.tags}>
                  {["Application Development", "Artificial Intelligence", "Computer Vision", "Data Processing"].map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
