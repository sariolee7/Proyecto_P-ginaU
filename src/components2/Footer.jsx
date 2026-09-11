import React from "react";
import "../styles/Footer.css";

import usbLineLogo from "../img/usb-line.png";
import iso90001Badge from "../img/iso90001.png";
import iqnetBadge from "../img/iqnet.png";
import alttacalidadBadge from "../img/alttacalidad.png";

const socialLinks = [
  { id: "instagram", label: "Instagram", href: "#", icon: "instagram" },
  { id: "facebook", label: "Facebook", href: "#", icon: "facebook" },
  { id: "x", label: "X (Twitter)", href: "#", icon: "x" },
  { id: "linkedin", label: "LinkedIn", href: "#", icon: "linkedin" },
  { id: "youtube", label: "YouTube", href: "#", icon: "youtube" },
  { id: "tiktok", label: "TikTok", href: "#", icon: "tiktok" },
];

const mainMenu = [
  { label: "Universidad", href: "#" },
  { label: "Admisiones", href: "#" },
  { label: "Bienestar", href: "#" },
  { label: "Investigaciones", href: "#" },
  { label: "Proyección Social", href: "#" },
];

const institutionalDocs = [
  { label: "Estatuto Orgánico", href: "#" },
  { label: "Reglamento Estudiantil Corporativo", href: "#" },
  { label: "Reglamento profesoral corporativo", href: "#" },
  { label: "Valores de matrícula y demás derechos pecuniarios", href: "#" },
];

const faculties = [
  { label: "Psicología", href: "#" },
  { label: "Humanidades y Ciencias de la Educación", href: "#" },
  { label: "Ingeniería", href: "#" },
  { label: "Ciencias Económicas y Administrativas", href: "#" },
  { label: "Ciencias Jurídicas y Políticas", href: "#" },
];

function SocialIcon({ type }) {
  const icons = {
    instagram: (
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM17.25 6a.75.75 0 110 1.5.75.75 0 010-1.5z" />
    ),
    facebook: (
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.1C15.9 5 14.9 5 13.9 5c-2.4 0-4 1.4-4 4v2.2H7.5V14h2.4v7h3.6z" />
    ),
    x: (
      <path d="M18.9 3H21l-5.4 6.2L21.7 21h-5.6l-4.4-5.8L6.5 21H4.4l5.8-6.6L3.9 3h5.7l4 5.3L18.9 3zm-2 16.2h1.6L8.2 4.7H6.5l10.4 14.5z" />
    ),
    linkedin: (
      <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.4 2.6 4.4 6v6.3h-4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z" />
    ),
    youtube: (
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.1 7.5.2 7.5.2s3.9 0 6.7-.3c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.6 2.9-5.6 2.8z" />
    ),
    tiktok: (
      <path d="M14.5 3h2.1c.1 1 .5 2 1.2 2.7.7.7 1.7 1.1 2.7 1.2v2.2c-1.4-.1-2.7-.5-3.9-1.3v6.1c0 3-2.4 5.4-5.4 5.4S5.8 17 5.8 14s2.4-5.4 5.4-5.4c.3 0 .6 0 .9.1v2.3c-.3-.1-.6-.2-.9-.2-1.7 0-3.1 1.4-3.1 3.2s1.4 3.2 3.1 3.2 3.2-1.4 3.2-3.2V3z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default function Footer({
  logoSrc = usbLineLogo,
  badges = [
    { src: iso90001Badge, alt: "ICONTEC ISO 9001" },
    { src: iqnetBadge, alt: "IQNET" },
    { src: alttacalidadBadge, alt: "Acreditación Institucional de Alta Calidad Multicampus" },
  ],
  address = "Bogotá D.C. Carrera 8h # 172 – 20",
  phones = "PBX: 667 1090 Línea gratuita nacional: 01 8000 125 151",
  infoEmail = "informacion@usbbog.edu.co",
  requestsEmail = "solicitudes.legales@usbbog.edu.co",
  ctaLabel = "USB Colombia",
  ctaUrl = "#",
}) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Columna: logo + certificaciones + redes */}
          <div className="footer__brand">
            <img className="footer__logo" src={logoSrc} alt="Universidad de San Buenaventura" />

            <div className="footer__badges">
              {badges.map((b, i) => (
                <img key={i} src={b.src} alt={b.alt} className="footer__badge" />
              ))}
            </div>

            <div className="footer__social">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className="footer__social-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon type={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna: contacto */}
          <div className="footer__col">
            <h3 className="footer__heading">Contáctanos</h3>
            <p className="footer__text">
              <strong>Dirección:</strong>
              <br />
              {address}
            </p>
            <p className="footer__text">
              <strong>Teléfonos:</strong>
              <br />
              {phones}
            </p>
            <p className="footer__text">
              <strong>Email información:</strong>
              <br />
              <a href={`mailto:${infoEmail}`}>{infoEmail}</a>
            </p>
            <p className="footer__text">
              <strong>Email solicitudes:</strong>
              <br />
              <a href={`mailto:${requestsEmail}`}>{requestsEmail}</a>
            </p>
          </div>

          {/* Columna: menús */}
          <div className="footer__col">
            <h3 className="footer__heading">Menú Principal</h3>
            <ul className="footer__list">
              {mainMenu.map((item, i) => (
                <li key={i}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <h3 className="footer__heading footer__heading--spaced">
              Documentos institucionales
            </h3>
            <ul className="footer__list">
              {institutionalDocs.map((item, i) => (
                <li key={i}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: facultades */}
          <div className="footer__col">
            <h3 className="footer__heading">Facultades</h3>
            <ul className="footer__list">
              {faculties.map((item, i) => (
                <li key={i}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <a className="footer__cta" href={ctaUrl}>
            {ctaLabel}
          </a>

          <div className="footer__legal">
            <p>
              Somos una institución educativa de la Comunidad Franciscana Provincia de la Santa Fe de educación superior
            </p>
            <p>
              *con personería jurídica reconocida por el Ministerio de Educación e Resolución 1326 del 25 de marzo de 1975*
            </p>
            <p>
              Copyright © 2026 Universidad de San Buenaventura, Sede Bogotá | <a href="#">Políticas de uso y privacidad</a> | <a href="#">Términos y Condiciones</a>
            </p>
            <p>
              Institución de educación superior sujeta a la inspección y vigilancia del Ministerio de Educación Nacional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}