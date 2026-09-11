import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import "../styles/conocecampus.css";

// Importa cada imagen como módulo (ajusta "../img/campus/" si tu carpeta
// está en otra ruta relativa a este archivo, ej. "../assets/campus/")
import galeria1 from "../img/campus/Galeria-1.jpg";
import galeria2 from "../img/campus/Galeria-2.jpg";
import galeria3 from "../img/campus/Galeria-3.jpg";
import galeria4 from "../img/campus/Galeria-4.jpg";
import galeria5 from "../img/campus/Galeria-5.jpg";
import galeria6 from "../img/campus/Galeria-6.jpg";
import galeria7 from "../img/campus/Galeria-7.jpg";
import galeria8 from "../img/campus/Galeria-8.jpg";
// Nota: en tu carpeta no hay "Galeria-9.jpg", salta directo al 10
import galeria10 from "../img/campus/Galeria-10.jpg";

const images = [
  { id: 1, src: galeria1, alt: "Espacio del campus - Galería 1" },
  { id: 2, src: galeria2, alt: "Espacio del campus - Galería 2" },
  { id: 3, src: galeria3, alt: "Espacio del campus - Galería 3" },
  { id: 4, src: galeria4, alt: "Espacio del campus - Galería 4" },
  { id: 5, src: galeria5, alt: "Espacio del campus - Galería 5" },
  { id: 6, src: galeria6, alt: "Espacio del campus - Galería 6" },
  { id: 7, src: galeria7, alt: "Espacio del campus - Galería 7" },
  { id: 8, src: galeria8, alt: "Espacio del campus - Galería 8" },
  { id: 9, src: galeria10, alt: "Espacio del campus - Galería 10" },
];

// Carrusel de imágenes a ancho completo, con flechas prev/next (sin dots)
function ImageCarousel({ items, visibleCount = 3, gap = 16 }) {
  const [visible, setVisible] = useState(visibleCount);
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const viewportRef = useRef(null);
  const maxIndex = Math.max(items.length - visible, 0);

  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1000) setVisible(2);
      else setVisible(visibleCount);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, [visibleCount]);

  useLayoutEffect(() => {
    function measure() {
      if (!viewportRef.current) return;
      const viewportWidth = viewportRef.current.offsetWidth;
      const width = (viewportWidth - gap * (visible - 1)) / visible;
      setSlideWidth(width);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [visible, gap]);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(items.length - visible, 0)));
  }, [visible, items.length]);

  const next = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const offset = index * (slideWidth + gap);

  return (
    <div className="gallery">
      {maxIndex > 0 && (
        <button
          className="gallery__arrow gallery__arrow--prev"
          onClick={prev}
          aria-label="Imagen anterior"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M15 5l-7 7 7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <div className="gallery__viewport" ref={viewportRef}>
        <div
          className="gallery__track"
          style={{ transform: `translateX(-${offset}px)`, gap: `${gap}px` }}
        >
          {items.map((img, i) => (
            <div
              className="gallery__slide"
              key={img.id ?? i}
              style={{ width: slideWidth ? `${slideWidth}px` : `${100 / visible}%` }}
            >
              <img className="gallery__image" src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <button
          className="gallery__arrow gallery__arrow--next"
          onClick={next}
          aria-label="Siguiente imagen"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M9 5l7 7-7 7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

// Sección completa: encabezado editorial + galería
export default function ConoceCampus({
  eyebrow = "Conoce la",
  title = "San Buena",
  description = (
    <>
      Estudia en el campus que soñaste <strong>sin salir de Bogotá:</strong> verde,
      deporte y vida universitaria.
    </>
  ),
}) {
  return (
    <section className="conoce">
      <div className="conoce__container">
        <header className="conoce__header">
          <p className="conoce__eyebrow">{eyebrow}</p>
          <h2 className="conoce__title">{title}</h2>
          <p className="conoce__description">{description}</p>
        </header>

        <ImageCarousel items={images} visibleCount={3} gap={16} />
      </div>
    </section>
  );
}