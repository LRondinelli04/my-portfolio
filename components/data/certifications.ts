export type SubCert = {
  title: string;
  date: string;
  link: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
  link: string;
  subs?: SubCert[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Front End Developer",
    issuer: "EducaciónIT",
    date: "Junio 2026",
    description:
      "Carrera completa de desarrollo frontend: HTML, CSS, JavaScript, UX, Git, Angular y más. 10+ certificados individuales.",
    link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/696",
    image: "/certifications/FrontEndDeveloper-certificado.jpeg",
    subs: [
      {
        title: "Javascript PWA (Progressive Web App)",
        date: "Jun 2026",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/84226",
      },
      {
        title: "Scrum Fundamentos",
        date: "Oct 2025",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/80721",
      },
      {
        title: "React.JS",
        date: "Oct 2025",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76740",
      },
      {
        title: "Responsive Web Bootstrap",
        date: "Jun 2025",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76136",
      },
      {
        title: "Presupuesto Digital",
        date: "Mar 2025",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76143",
      },
      {
        title: "Javascript Desarrollador Avanzado",
        date: "Nov 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71404",
      },
      {
        title: "GIT: Desarrollo Colaborativo",
        date: "Ago 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/72673",
      },
      {
        title: "UI: Interfaz de Usuario",
        date: "Jun 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/72382",
      },
      {
        title: "Maquetador Web Avanzado",
        date: "Jun 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71526",
      },
      {
        title: "Introducción al Paradigma de Objetos",
        date: "May 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71262",
      },
      {
        title: "Introducción a UX",
        date: "Abr 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71043",
      },
      {
        title: "Desarrollo Web con HTML",
        date: "Abr 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71169",
      },
      {
        title: "Javascript desde cero",
        date: "Abr 2024",
        link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71098",
      },
    ],
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    date: "Jul 2024",
    description: "Certificación oficial de C# en colaboración con Microsoft.",
    image: "/certifications/freeCodeCamp.jpg",
    link: "https://www.freecodecamp.org/certification/lrondinelli04/foundational-c-sharp-with-microsoft",
  },
];
