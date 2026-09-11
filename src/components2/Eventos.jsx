import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import "../styles/Eventos.css";

// Reemplaza/agrega los eventos reales aquí
const events = [
  {
    id: 1,
    date: "7 – 9 SEPTIEMBRE",
    title: "Jornada de planeación",
    location: "San Buena",
  },
  {
    id: 2,
    date: "7 – 12 SEPTIEMBRE",
    title: "Seguimiento académico",
    location: "Ingreso de calificaciones ASIS",
  },
  {
    id: 3,
    date: "14 SEPTIEMBRE",
    title: "Inicio de clases posgrados",
    location: "Ciclo intermedio II",
  },
  {
    id: 4,
    date: "16 – 18 SEPTIEMBRE",
    title: "Conecta+",
    location: "Facultades y Full Day",
  },
  {
    id: 5,
    date: "17 SEPTIEMBRE",
    title: "Simposio 800 años de la muerte de",
    location: "San Francisco de Asís",
  },
  {
    id: 6,
    date: "20 SEPTIEMBRE",
    title: "Nombre del evento",
    location: "Lugar / detalle",
  },
  {
    id: 7,
    date: "22 – 24 SEPTIEMBRE",
    title: "Nombre del evento",
    location: "Lugar / detalle",
  },
  {
    id: 8,
    date: "26 SEPTIEMBRE",
    title: "Nombre del evento",
    location: "Lugar / detalle",
  },
  {
    id: 9,
    date: "28 SEPTIEMBRE",
    title: "Nombre del evento",
    location: "Lugar / detalle",
  },
  {
    id: 10,
    date: "30 SEPTIEMBRE",
    title: "Nombre del evento",
    location: "Lugar / detalle",
  },
];

// Tarjeta individual de evento
function EventCard({ date, title, location }) {
  return (
    <article className="event-card">
      <div className="event-card__date">{date}</div>
      <div className="event-card__body">
        <h3 className="event-card__title">{title}</h3>
        {location && <p className="event-card__location">{location}</p>}
      </div>
    </article>
  );
}

// Carrusel genérico y reutilizable
function CardCarousel({
  items,
  renderItem,
  visibleCount = 5,
  autoPlay = true,
  autoPlayInterval = 4000,
  gap = 20,
}) {
  const [visible, setVisible] = useState(visibleCount);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const viewportRef = useRef(null);
  const dragState = useRef({ startX: 0, dragging: false });

  const maxIndex = Math.max(items.length - visible, 0);

  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 560) setVisible(1);
      else if (w < 820) setVisible(2);
      else if (w < 1080) setVisible(3);
      else if (w < 1320) setVisible(4);
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

  const goTo = useCallback(
    (i) => setIndex(Math.max(0, Math.min(i, maxIndex))),
    [maxIndex]
  );

  const next = useCallback(() => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay || isPaused || maxIndex === 0) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, isPaused, autoPlayInterval, next, maxIndex]);

  const onPointerDown = (e) => {
    dragState.current.dragging = true;
    dragState.current.startX = e.touches ? e.touches[0].clientX : e.clientX;
    setIsPaused(true);
  };

  const onPointerUp = (e) => {
    if (!dragState.current.dragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - dragState.current.startX;
    const threshold = 40;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
    dragState.current.dragging = false;
    setIsPaused(false);
  };

  const offset = index * (slideWidth + gap);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel__viewport" ref={viewportRef}>
        <div
          className="carousel__track"
          style={{
            transform: `translateX(-${offset}px)`,
            gap: `${gap}px`,
          }}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
        >
          {items.map((item, i) => (
            <div
              className="carousel__slide"
              key={item.id ?? i}
              style={{ width: slideWidth ? `${slideWidth}px` : `${100 / visible}%` }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="carousel__dots" role="tablist" aria-label="Paginación del carrusel">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a la posición ${i + 1}`}
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Sección completa: encabezado (título + botón) + carrusel
export default function Eventos({ calendarUrl = "#" }) {
  return (
    <section className="eventos">
      <div className="eventos__container">
        <div className="eventos__header">
          <h2 className="eventos__title">Eventos</h2>
          <a className="eventos__cta" href={calendarUrl}>
            Ver calendario Institucional
          </a>
        </div>

        <CardCarousel
          items={events}
          visibleCount={5}
          autoPlay
          autoPlayInterval={4000}
          gap={20}
          renderItem={(ev) => (
            <EventCard date={ev.date} title={ev.title} location={ev.location} />
          )}
        />
      </div>
    </section>
  );
}