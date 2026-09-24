"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import styles from "./ProjectModal.module.css";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const [imgError, setImgError] = useState<boolean[]>(
    project.images.map(() => false)
  );

  const total = project.images.length;

  const prev = useCallback(() => {
    setCurrentImg((c) => (c === 0 ? total - 1 : c - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrentImg((c) => (c === total - 1 ? 0 : c + 1));
  }, [total]);

  // Keyboard: Escape tutup modal, ArrowLeft/Right navigasi gambar
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const allImagesError = imgError.every(Boolean);

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail proyek ${project.title}`}
    >
      <div className={styles.modal}>
        {/* ── Header ─────────────────────────────────── */}
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.headerTitles}>
              <p className={styles.modalLabel}>Proyek</p>
              <h2 className={styles.modalTitle}>{project.title}</h2>
              <p className={styles.modalSubtitle}>{project.subtitle}</p>
            </div>
            {project.isThesis && (
              <span className={styles.thesisBadge} title="Proyek Skripsi">
                📄 Skripsi
              </span>
            )}
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Tutup modal"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Image Gallery ───────────────────────────── */}
        <div className={styles.galleryWrapper}>
          {/* Main image */}
          <div className={styles.mainImage}>
            {!imgError[currentImg] ? (
              <Image
                key={project.images[currentImg]}
                src={project.images[currentImg]}
                alt={`Screenshot ${project.title} ${currentImg + 1}`}
                width={900}
                height={506}
                className={styles.screenshot}
                onError={() =>
                  setImgError((prev) => {
                    const next = [...prev];
                    next[currentImg] = true;
                    return next;
                  })
                }
              />
            ) : (
              <div className={styles.screenshotPlaceholder}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="10" fill="var(--color-border-light)" />
                  <rect x="8" y="10" width="32" height="22" rx="3" stroke="var(--color-text-muted)" strokeWidth="1.5" fill="none" />
                  <circle cx="15" cy="17" r="2.5" fill="var(--color-text-muted)" />
                  <path d="M8 27l10-9 8 7 5-4 9 9" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>
                  Tambahkan screenshot di<br />
                  <code>public/projects/{project.id}/{currentImg + 1}.png</code>
                </p>
              </div>
            )}

            {/* Navigation arrows — only show if more than 1 image */}
            {total > 1 && (
              <>
                <button
                  className={`${styles.navBtn} ${styles.navPrev}`}
                  onClick={prev}
                  aria-label="Gambar sebelumnya"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M11 4L7 9l4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className={`${styles.navBtn} ${styles.navNext}`}
                  onClick={next}
                  aria-label="Gambar berikutnya"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7 4l4 5-4 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Counter */}
                <div className={styles.imgCounter}>
                  {currentImg + 1} / {total}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail strip — only show if more than 1 image */}
          {total > 1 && (
            <div className={styles.thumbnails}>
              {project.images.map((src, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${i === currentImg ? styles.thumbActive : ""}`}
                  onClick={() => setCurrentImg(i)}
                  aria-label={`Lihat gambar ${i + 1}`}
                >
                  {!imgError[i] ? (
                    <Image
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      width={120}
                      height={68}
                      className={styles.thumbImg}
                      onError={() =>
                        setImgError((prev) => {
                          const next = [...prev];
                          next[i] = true;
                          return next;
                        })
                      }
                    />
                  ) : (
                    <div className={styles.thumbPlaceholder}>{i + 1}</div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Body ───────────────────────────────────── */}
        <div className={styles.modalBody}>
          {/* Description */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Deskripsi</h3>
            <p className={styles.text}>{project.description}</p>
          </section>

          {/* Role / Peran */}
          {project.role && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Peran Dalam Proyek</h3>
              <p className={styles.text}>{project.role}</p>
            </section>
          )}

          {/* Result */}
          {project.result && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Hasil</h3>
              <div className={styles.resultCard}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2l2 4 5 .5-3.5 3.5 1 5L9 13l-4.5 2 1-5L2 6.5 7 6z" stroke="#16a34a" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
                </svg>
                <span>{project.result}</span>
              </div>
            </section>
          )}

          {/* Tech stack */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Teknologi</h3>
            <div className={styles.techList}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>
          </section>

          {/* Contributions */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Kontribusi Saya</h3>
            <ul className={styles.contributions}>
              {project.contributions.map((item, i) => (
                <li key={i} className={styles.contribItem}>
                  <span className={styles.bullet} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Links */}
          {(project.demoUrl || project.repoUrl) && (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Tautan</h3>
              <div className={styles.links}>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Lihat Demo
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    GitHub Repository
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C3.686 1 1 3.686 1 7c0 2.654 1.72 4.9 4.106 5.694.3.055.41-.13.41-.287 0-.142-.005-.517-.008-1.015-1.669.363-2.022-.804-2.022-.804-.273-.693-.667-.878-.667-.878-.545-.373.041-.365.041-.365.603.042.92.619.92.619.536.918 1.407.653 1.75.499.054-.388.21-.653.38-.803-1.332-.152-2.732-.666-2.732-2.963 0-.654.234-1.19.617-1.609-.062-.151-.267-.76.058-1.585 0 0 .503-.161 1.648.614A5.738 5.738 0 017 4.613c.51.002 1.023.069 1.502.202 1.144-.775 1.646-.614 1.646-.614.327.825.121 1.434.06 1.585.384.42.616.955.616 1.609 0 2.304-1.403 2.81-2.739 2.958.215.185.407.55.407 1.109 0 .8-.007 1.446-.007 1.642 0 .159.108.345.413.287A6.002 6.002 0 0013 7c0-3.314-2.686-6-6-6z" fill="currentColor" />
                    </svg>
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
