export default function About() {
  return (
    <div>
      <p className="about-p">
        Estudiante de <strong>Licenciatura en Sistemas</strong> y{" "}
        <strong>Analista Programador Universitario</strong> en la Facultad de
        Informática de La Plata — UNLP. Apasionado por construir interfaces que
        combinan lógica robusta con experiencias visuales cuidadas.
      </p>
      <p className="about-p">
        Actualmente estoy trabajando como desarrollador de software en la{" "}
        <a
          href="https://www2.fepba.gov.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          Fiscalía de Estado de Buenos Aires
        </a>
        , utilizando .NET, C#, Angular y TypeScript en proyectos de alto impacto
        institucional.
      </p>
      <p className="about-p">
        En paralelo, cursé la carrera de{" "}
        <strong>Front End Developer</strong> en EducaciónIT, donde apliqué y
        consolidé mis habilidades en un entorno de aprendizaje estructurado.
      </p>

      <div className="currently-card">
        <span className="currently-dot" aria-hidden="true" />
        <div>
          <p className="currently-label">Actualmente</p>
          <p className="currently-title">
            Desarrollador de Software
          </p>
          <p className="currently-sub">
            Fiscalía de Estado · Jun 2024 – Presente
          </p>
        </div>
      </div>
    </div>
  );
}
