import React from "react";
import "../styles/Visitanos.css";

export default function Visitanos({
  eyebrow = "Visítanos",
  title = "Tu futuro tiene un lugar.",
  address = "Carrera 8h # 172 – 20, Bogotá D.C.",
  schedule = "Lunes a Viernes 8am – 6pm",
  parking = "Estacionamiento vigilado para visitantes.",
  access = "Fácil llegada por Autopista Norte y Carrera 7ma.",
  directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=San+Buenaventura+University+in+Bogot%C3%A1",
  mapEmbedUrl = "https://www.google.com/maps?q=San+Buenaventura+University+in+Bogot%C3%A1&output=embed",
}) {
  return (
    <section className="visitanos">
      <div className="visitanos__container">
        <div className="visitanos__col visitanos__col--text">
          <p className="visitanos__eyebrow">{eyebrow}</p>
          <h2 className="visitanos__title">{title}</h2>

          <p className="visitanos__paragraph">
            <strong>Ven a conocer nuestro campus en el norte de Bogotá,</strong>{" "}
            con espacios para aprender, conectar y crecer.
          </p>

          <p className="visitanos__paragraph">
            Estudia en el campus que soñaste <strong>sin salir de Bogotá:</strong>{" "}
            verde, deporte y vida universitaria.
          </p>

          <div className="visitanos__infobox">
            <p>
              <strong>Dirección:</strong> {address}
            </p>
            <p>
              <strong>Horario:</strong> {schedule}
            </p>
            <p>
              <strong>Parqueadero:</strong> {parking}
            </p>
            <p>
              <strong>Acceso:</strong> {access}
            </p>

            <a
              className="visitanos__cta"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ¿Cómo llegar?
            </a>
          </div>
        </div>

        <div className="visitanos__col visitanos__col--map">
          <div className="visitanos__map-wrap">
            <iframe
              className="visitanos__map"
              src={mapEmbedUrl}
              title="Ubicación del campus en el mapa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}