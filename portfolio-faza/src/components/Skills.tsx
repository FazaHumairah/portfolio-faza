import { skills } from "@/data/personal";
import styles from "./Skills.module.css";

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 6L2 9l3 3M13 6l3 3-3 3M10 4l-2 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Development: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M6 16h6M9 13v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "Data & AI": (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M9 1v3M9 14v3M1 9h3M14 9h3M3.2 3.2l2.1 2.1M12.7 12.7l2.1 2.1M14.8 3.2l-2.1 2.1M5.3 12.7l-2.1 2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  Tools: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M13 2a3 3 0 010 6 3 3 0 01-1-.17L8.5 12.3A3 3 0 115 16a3 3 0 01-.83-5.83L8 6.8A3 3 0 0113 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section id="kemampuan" className={`section ${styles.skills}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Kemampuan</p>
          <h2 className="section-title">Stack & Tools</h2>
        </div>

        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {categoryIcons[category]}
                </div>
                <h3 className={styles.category}>{category}</h3>
              </div>
              <div className={styles.tags}>
                {items.map((skill) => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
