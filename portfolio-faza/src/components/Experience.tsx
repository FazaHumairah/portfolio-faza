"use client";

import { useState } from "react";
import { experience, organizations, awards } from "@/data/personal";
import styles from "./Experience.module.css";

type Tab = "kerja" | "organisasi" | "penghargaan";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "kerja",
    label: "Pengalaman Kerja",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M5 5V4a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "organisasi",
    label: "Organisasi",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <path d="M2 14c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "penghargaan",
    label: "Penghargaan",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5 6.5 5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("kerja");

  return (
    <section id="pengalaman" className={`section ${styles.experience}`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Pengalaman</p>
          <h2 className="section-title">Pengalaman & Aktivitas</h2>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Pengalaman Kerja ──────────────────────── */}
        {activeTab === "kerja" && (
          <div className={styles.timeline} role="tabpanel">
            {experience.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.connector}>
                  <div className={styles.dot} />
                  {index < experience.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.content}>
                  <p className={styles.period}>{item.period}</p>
                  <div className={styles.card}>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Organisasi ────────────────────────────── */}
        {activeTab === "organisasi" && (
          <div className={styles.timeline} role="tabpanel">
            {organizations.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.connector}>
                  <div className={`${styles.dot} ${styles.dotOrg}`} />
                  {index < organizations.length - 1 && <div className={styles.line} />}
                </div>
                <div className={styles.content}>
                  <p className={styles.period}>{item.period}</p>
                  <div className={styles.card}>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>{item.organization}</p>
                    <ul className={styles.bulletList}>
                      {item.points.map((point, i) => (
                        <li key={i} className={styles.bulletItem}>
                          <span className={styles.bullet} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Penghargaan ───────────────────────────── */}
        {activeTab === "penghargaan" && (
          <div className={styles.awardsGrid} role="tabpanel">
            {awards.map((award, index) => (
              <div key={index} className={styles.awardCard}>
                <div className={styles.awardIcon}>
                  {index === 0 ? "🥇" : index === 1 ? "🥉" : "🏆"}
                </div>
                <div className={styles.awardBody}>
                  <p className={styles.awardYear}>{award.year}</p>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <p className={styles.awardEvent}>{award.event}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CV Link */}
        <div className={styles.cvNote}>
          <p>Ingin tahu lebih lanjut?</p>
          <a href="#kontak" className="btn-secondary">
            Hubungi Saya
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
