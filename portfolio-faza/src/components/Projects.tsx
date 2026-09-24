"use client";

import { useState } from "react";
import Image from "next/image";
import projects, { Project } from "@/data/projects";
import styles from "./Projects.module.css";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  // Track gambar error per proyek agar tidak retry
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) =>
    setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="proyek" className={`section ${styles.projects}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="section-label">Proyek</p>
            <h2 className="section-title">Proyek Unggulan</h2>
          </div>
          <p className="section-subtitle">
           Beberapa proyek yang saya kerjakan di bidang pengembangan aplikasi, data, dan kecerdasan buatan.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article key={project.id} className={styles.card}>
              {/* Project image — pakai gambar pertama dari array */}
              <div className={styles.imageWrapper}>
                {!imgErrors[project.id] && project.images?.[0] ? (
                  <Image
                    src={project.images[0]}
                    alt={`Screenshot ${project.title}`}
                    width={600}
                    height={338}
                    className={styles.projectImg}
                    onError={() => handleImgError(project.id)}
                  />
                ) : (
                  /* Placeholder jika gambar belum ada atau gagal load */
                  <div className={styles.imgPlaceholder}>
                    <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                      <rect width="40" height="40" rx="8" fill="var(--color-border-light)" />
                      <rect x="8" y="8" width="24" height="18" rx="3" stroke="var(--color-text-muted)" strokeWidth="1.5" fill="none" />
                      <circle cx="14" cy="14" r="2" fill="var(--color-text-muted)" />
                      <path d="M8 22l8-7 6 5 4-3 6 6" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Tambahkan screenshot<br />di <code>public/projects/{project.id}/1.png</code></span>
                  </div>
                )}

                {/* Number badge */}
                <div className={styles.numBadge}>0{index + 1}</div>

                {/* Thesis badge */}
                {project.isThesis && (
                  <div className={styles.thesisBadge}>Skripsi</div>
                )}

                {/* Multi-image indicator */}
                {project.images.length > 1 && (
                  <div className={styles.imgCount}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <rect x="1" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
                      <rect x="4" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    </svg>
                    {project.images.length}
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  {project.result && (
                    <span className={styles.resultBadge}>{project.result}</span>
                  )}
                </div>
                <p className={styles.projectSubtitle}>{project.subtitle}</p>
                <p className={styles.projectDesc}>{project.shortDesc}</p>

                {/* Tech stack */}
                <div className={styles.techStack}>
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className={styles.techMore}>+{project.tech.length - 4}</span>
                  )}
                </div>

                <div className={styles.cardActions}>
                  <button
                    className={`btn-outline ${styles.detailBtn}`}
                    onClick={() => setSelected(project)}
                  >
                    Lihat Detail
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoBtn}
                      title="Lihat Repositori GitHub"
                      aria-label={`Repository GitHub ${project.title}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
