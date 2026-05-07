export type SubCert = {
  title: string;
  date: string;
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
    title: "Front End Web Developer",
    issuer: "EducaciónIT",
    date: "En curso — Jun 2025",
    description:
      "Carrera completa de desarrollo frontend: HTML, CSS, JavaScript, UX, Git, Angular y más. 10+ certificados individuales.",
    image: "/certifications/UltimoEduIT.jpeg",
    link: "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76136",
    subs: [
      { title: "Responsive Web Bootstrap", date: "Jun 2025" },
      { title: "Presupuesto Digital", date: "Mar 2025" },
      { title: "Javascript Desarrollador Avanzado", date: "Nov 2024" },
      { title: "GIT: Desarrollo Colaborativo", date: "Ago 2024" },
      { title: "UI: Interfaz de Usuario", date: "Jun 2024" },
      { title: "Maquetador Web Avanzado", date: "Jun 2024" },
      { title: "Introducción al Paradigma de Objetos", date: "May 2024" },
      { title: "Introducción a UX", date: "Abr 2024" },
      { title: "Javascript desde cero", date: "Abr 2024" },
      { title: "Desarrollo Web con HTML", date: "Abr 2024" },
    ],
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    date: "Jul 2024",
    description: "Certificación oficial de C# en colaboración con Microsoft.",
    image: "/certifications/freeCodeCamp.jpg",
    link: "https://www.freecodecamp.org/certification/LRondinelli04/foundational-c-sharp-with-microsoft",
  },
];
