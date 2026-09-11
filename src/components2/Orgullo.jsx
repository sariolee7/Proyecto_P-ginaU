import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import "../styles/Orgullo.css";

// Importa cada imagen como módulo (ajusta "../img/orgullo/" si tu carpeta
// está en otra ruta relativa a este archivo, ej. "../assets/orgullo/")
import joaquiRobles from "../img/orgullo/Joaqui-Robles.jpg";
import eltonGomez from "../img/orgullo/Elton-Gomez.jpg";
import judithCastillo from "../img/orgullo/Judith-Castillo-Martelo.jpg";
import diegoOsorio from "../img/orgullo/Diego-Fernando-Osorio.jpg";
import andreaPaez from "../img/orgullo/Andrea-Paez-Gomez.jpg";
import carlosMolina from "../img/orgullo/Carlos-Alberto-Molina-Clavijo.jpg";
import danielAgudelo from "../img/orgullo/Daniel-Agudelo.jpg";
import jennyLeon from "../img/orgullo/Jenny-Leon-Artunduaga.jpg";
import lorenaCamacho from "../img/orgullo/Lorena-Camacho-Murcia.jpg";
import nicolasTuta from "../img/orgullo/Nicolas-Fernando-Tuta-Sarmiento.jpg";

// Solo hay 10 imágenes en la carpeta "orgullo"; agrega 2 más para
// completar las 12 tarjetas (o reduce el arreglo a 10 elementos).
const graduates = [
  {
    id: 1,
    photo: joaquiRobles,
    faculty: "Humanidades y Ciencias de la Educación",
    name: "Darwin Joaqui Robles",
    role: "Coordinador – SED Huila / IE Bateas, Acevedo - Huila",
    description:
      "Filosofía y educación para orientar procesos formativos con pensamiento crítico.",
  },
  {
    id: 2,
    photo: eltonGomez,
    faculty: "Ingeniería",
    name: "Elton Jhon Gómez Ojeda",
    role: "CEO Founder – Fontumi OneAI",
    description:
      "Emprendimiento tecnológico en inteligencia artificial para crear soluciones digitales.",
  },
  {
    id: 3,
    photo: judithCastillo,
    faculty: "Humanidades y Ciencias de la Educación",
    name: "Judith Castillo Martelo",
    role: "Directora Programa de Licenciatura en Educación Básica Primaria – Universidad de la Costa",
    description:
      "Liderazgo académico para fortalecer la formación docente y la educación básica.",
  },
  {
    id: 4,
    photo: diegoOsorio,
    faculty: "Humanidades y Ciencias de la Educación",
    name: "Diego Fernando Osorio González",
    role: "Regional Manager, Customer Onboarding – Turnitin",
    description:
      "Acompañamiento global a clientes para mejorar procesos educativos con tecnología.",
  },
  {
    id: 5,
    photo: andreaPaez,
    faculty: "Ciencias Económicas y Administrativas",
    name: "Andrea Paez Gomez",
    role: "Cargo – Empresa",
    description: "Breve logro o aporte destacado de este graduado.",
  },
  {
    id: 6,
    photo: carlosMolina,
    faculty: "Ingeniería",
    name: "Carlos Alberto Molina Clavijo",
    role: "Cargo – Empresa",
    description: "Breve logro o aporte destacado de este graduado.",
  },
  {
    id: 7,
    photo: danielAgudelo,
    faculty: "Derecho y Ciencias Políticas",
    name: "Daniel Agudelo",
    role: "Cargo – Empresa",
    description: "Breve logro o aporte destacado de este graduado.",
  },
  {
    id: 8,
    photo: jennyLeon,
    faculty: "Ciencias de la Salud",
    name: "Jenny Leon Artunduaga",
    role: "Cargo – Empresa",
    description: "Breve logro o aporte destacado de este graduado.",
  },
  {
    id: 9,
    photo: lorenaCamacho,
    faculty: "Humanidades y Ciencias de la Educación",
    name: "Lorena Camacho Murcia",
    role: "Cargo – Empresa",
    description: "Breve logro o aporte destacado de este graduado.",
  },
  {
    id: 10,
    photo: nicolasTuta,
    faculty: "Ingeniería",
    name: "Nicolas Fernando Tuta Sarmiento",
    role: "Cargo – Empresa",
    description: "Breve logro o aporte destacado de este graduado.",
  },
];

// Tarjeta individual de graduado (subcomponente reutilizable dentro del mismo archivo)
function GraduateCard({ photo, faculty, name, role, description }) {
  return (
    <article className="grad-card">
      <div className="grad-card__photo-wrap">
        <img
          className="grad-card__photo"
          src={photo}
          alt={`Foto de ${name}`}
          loading="lazy"
        />
      </div>

      <div className="grad-card__body">
        <p className="grad-card__faculty">{faculty}</p>
        <h3 className="grad-card__name">{name}</h3>
        <p className="grad-card__role">{role}</p>

        <blockquote className="grad-card__quote">
          <p>{description}</p>
        </blockquote>
      </div>
    </article>
  );
}

// Carrusel genérico y reutilizable (sirve para cualquier tipo de tarjeta)
function CardCarousel({
  items,
  renderItem,
  visibleCount = 4,
  autoPlay = true,
  autoPlayInterval = 4000,
  gap = 24,
}) {
  const [visible, setVisible] = useState(visibleCount);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  const viewportRef = useRef(null);
  const dragState = useRef({ startX: 0, dragging: false });

  const maxIndex = Math.max(items.length - visible, 0);

  // Responsive: cuántas tarjetas caben según el ancho de pantalla
  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 900) setVisible(2);
      else if (w < 1200) setVisible(3);
      else setVisible(visibleCount);
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, [visibleCount]);

  // Mide el ancho real del viewport para calcular el ancho de cada slide en px
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

  // Mantiene el index dentro de rango válido si cambia "visible"
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

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isPaused || maxIndex === 0) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, isPaused, autoPlayInterval, next, maxIndex]);

  // Swipe / drag táctil y con mouse
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

// Sección completa: título + subtítulo + carrusel
export default function OrgulloBonaventuriano() {
  return (
    <section className="orgullo">
      <div className="orgullo__container">
        <h2 className="orgullo__title">Orgullo Bonaventuriano</h2>
        <p className="orgullo__subtitle">
          Conoce la trayectoria y el impacto de nuestros graduados
        </p>

        <CardCarousel
          items={graduates}
          visibleCount={4}
          autoPlay
          autoPlayInterval={4000}
          gap={24}
          renderItem={(grad) => (
            <GraduateCard
              photo={grad.photo}
              faculty={grad.faculty}
              name={grad.name}
              role={grad.role}
              description={grad.description}
            />
          )}
        />
      </div>
    </section>
  );
}