export type Project = {
  slug: string;
  imagePath: string;
  title: string;
  description: string;
  skills: { name: string; link: string }[];
  link?: string;
  github?: string;
  /** Ocupa fila completa en la grilla de /proyectos. */
  highlight?: boolean;
  /** Se muestra en el carrusel 3D del home. */
  featured?: boolean;
  details?: {
    title: string;
    items: {
      data: string;
      subData?: string[];
    }[];
  }[];
  images?: { src: string; alt: string }[];
};

export const jobProjects: Project[] = [
  {
    slug: "monitoreo-servicios",
    imagePath: "/projects/monitoreo/m1.jpg",
    images: [
      { src: "/projects/monitoreo/m1.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m2.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m3.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m4.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m5.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m6.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m7.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m8.jpg", alt: "Monitoreo" },
    ],
    title: "Monitoreo de Servicios y Servidores",
    description:
      "Aplicación web para monitorear servicios y servidores, desarrollada con Angular (TypeScript y TaigaUI) para el frontend y .NET (C#) para el backend.",
    details: [
      {
        title: "Arquitectura Modular",
        items: [
          {
            data: "Organización jerárquica de servicios agrupados por aplicaciones.",
          },
          {
            data: "Sistema de cards interactivas con semáforo de estado (🟢 OK | 🟠 WARNING | 🔴 ERROR).",
          },
          {
            data: "Monitoreo de métricas clave:",
            subData: [
              "Servicios: Tiempo de respuesta (ms).",
              "Servidores: Espacio en disco (GB/libre).",
            ],
          },
        ],
      },
      {
        title: "Gestión Dinámica",
        items: [
          {
            data: "▶️ Configuración de intervalos de actualización automática.",
          },
          { data: "✏️ Edición en línea de parámetros de monitoreo." },
          { data: "🗑️ Eliminación segura de elementos obsoletos." },
          {
            data: "🚫 Deshabilitación selectiva de checks (evita llamadas a endpoints).",
          },
          {
            data: "➕ Creación de nuevos elementos mediante formularios contextuales:",
            subData: [
              "Servicios (con validación de endpoints).",
              "Servidores",
              "Aplicaciones (agrupadores lógicos).",
            ],
          },
        ],
      },
      {
        title: "Personalización Avanzada",
        items: [
          {
            data: "⇅ Drag-and-Drop para reordenar aplicaciones y organizar cards según preferencia del usuario modificando su valor de orden.",
            subData: [
              "Reordenar aplicaciones (agrupaciones de servicios)",
              "Organizar cards según preferencia del usuario",
            ],
          },
          {
            data: "Persistencia de configuración personalizada (localStorage + backend).",
          },
          {
            data: "Sistema de priorización visual mediante ordenamiento manual.",
          },
        ],
      },
      {
        title: "Funcionalidades Técnicas",
        items: [
          {
            data: "Histórico gráfico temporal para: ",
            subData: [
              "Performance de servicios (series temporales)",
              "Evolución de capacidad en servidores",
            ],
          },
          {
            data: "Detalle expandible por card con: ",
            subData: [
              "Métricas específicas por disco (servidores)",
              "Logs de últimos checks (servicios)",
              "Acciones rápidas de gestión",
            ],
          },
          { data: "Modo mantenimiento (pausa temporal de monitoreo)" },
          { data: "Notificaciones visuales para cambios de estado" },
        ],
      },
      {
        title: "Experiencia de Usuario:",
        items: [
          {
            data: "Interfaz responsive con 3 vistas diferentes (mobile/tablet/desktop)",
          },
          { data: "Auto-guardado de configuraciones" },
          { data: "Feedback visual en tiempo real durante operaciones" },
        ],
      },
    ],
    skills: [
      { name: "Angular", link: "https://angular.dev/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "TaigaUI", link: "https://taiga-ui.dev/" },
      { name: "DotNet", link: "https://dotnet.microsoft.com/" },
      { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    ],
    highlight: true,
    featured: true,
    /* link: "https://app.mtopswap.com", */
  },
  {
    slug: "mi-portafolio",
    imagePath: "/projects/my-portfolio.jpg",
    title: "Mi Portafolio",
    description:
      "Un portafolio personal con proyectos y habilidades desarrolladas.",
    skills: [
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "React", link: "https://react.dev/" },
      { name: "Shadcn UI", link: "https://ui.shadcn.com/" },
    ],
    link: "https://lucasrondinelli.netlify.app/",
    github: "https://github.com/LRondinelli04/my-portfolio",
    featured: true,
  },
  {
    slug: "portfolio-manager-ar",
    imagePath: "/projects/portfolio-manager/pm-1.png",
    images: [
      { src: "/projects/portfolio-manager/pm-1.png", alt: "Portfolio Manager" },
      { src: "/projects/portfolio-manager/pm-2.png", alt: "Portfolio Manager" },
    ],
    title: "Portfolio Manager AR",
    description:
      "Plataforma full-stack para gestión y seguimiento de carteras de inversión con activos locales e internacionales (CEDEARs, Obligaciones Negociables, FCI). Desarrollada con Angular (TypeScript, Tailwind, spartan/ui) y .NET (C#) con PostgreSQL, mide la evolución de ganancias por activo tanto en pesos como en dólares.",
    details: [
      {
        title: "Gestión de Cartera Multi-Instrumento",
        items: [
          {
            data: "Soporte para distintos tipos de activos:",
            subData: [
              "CEDEARs (acciones/ETFs internacionales).",
              "Obligaciones Negociables (cotización por cada 100 nominales).",
              "FCI, Bonos y Liquidez.",
            ],
          },
          {
            data: "Dashboard con KPIs: valor total, rendimiento, capital invertido y liquidez disponible.",
          },
          {
            data: "Composición de cartera por tipo de activo y ranking de tenencias por peso.",
          },
        ],
      },
      {
        title: "Precios y Valuación",
        items: [
          {
            data: "🔄 Sincronización automática de precios de CEDEARs mediante método sintético:",
            subData: [
              "Precio ARS = (Precio USD de Yahoo Finance × Dólar CCL) / Ratio del CEDEAR.",
              "Cotización del Dólar CCL en tiempo real (dolarapi.com).",
            ],
          },
          {
            data: "✏️ Actualización manual de precios para instrumentos sin fuente automática (ONs, FCI).",
          },
          {
            data: "Snapshot diario por instrumento que registra precio, CCL y cantidad del día para reconstruir el histórico.",
          },
        ],
      },
      {
        title: "Evolución de Ganancias (ARS / USD)",
        items: [
          {
            data: "Gráfico de evolución por activo con conmutador de moneda y métrica:",
            subData: [
              "Moneda: Pesos (ARS) vs Dólares (USD).",
              "Métrica: Valor de la tenencia vs Ganancia (P&L).",
            ],
          },
          {
            data: "Cálculo correcto del valor en USD usando el CCL histórico de cada día (evita distorsiones por convertir al dólar actual).",
          },
          {
            data: "P&L en dólares real a partir del CCL al momento de la compra.",
          },
        ],
      },
      {
        title: "Registro de Transacciones",
        items: [
          {
            data: "Carga de movimientos de compra y venta por instrumento.",
          },
          {
            data: "Recálculo automático de la posición a partir de los movimientos:",
            subData: [
              "Cantidad neta (compras − ventas).",
              "Precio Promedio de Compra (PPC) ponderado.",
              "CCL de compra ponderado para el P&L en USD.",
            ],
          },
          {
            data: "🗓️ Autocompletado del CCL histórico según la fecha del movimiento (api.argentinadatos.com).",
          },
        ],
      },
      {
        title: "Arquitectura Técnica",
        items: [
          {
            data: "Backend en .NET (C#) con API REST, Entity Framework Core y migraciones versionadas.",
          },
          {
            data: "Persistencia en PostgreSQL corriendo en Docker (docker-compose).",
          },
          {
            data: "Frontend Angular standalone con Signals para estado reactivo.",
          },
          {
            data: "Gráficos con ngx-echarts y componentes UI con spartan/ui + Tailwind CSS.",
          },
        ],
      },
      {
        title: "Experiencia de Usuario",
        items: [
          { data: "Modo claro/oscuro con persistencia de tema." },
          { data: "Conmutador global de moneda (ARS / USD) en toda la app." },
          {
            data: "Diálogos contextuales para evolución, movimientos y edición de posiciones.",
          },
          {
            data: "Feedback visual en tiempo real durante la sincronización de precios.",
          },
        ],
      },
    ],
    skills: [
      { name: "Angular", link: "https://angular.dev/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "spartan/ui", link: "https://spartan.ng/" },
      { name: "ECharts", link: "https://echarts.apache.org/" },
      { name: "DotNet", link: "https://dotnet.microsoft.com/" },
      { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
      { name: "Docker", link: "https://www.docker.com/" },
    ],
    /*     highlight: true,
     */ featured: true,
    /* link: "", */
  },
  {
    slug: "preguntas-y-respuestas",
    imagePath: "/projects/TPFinalJS.jpg",
    title: "Preguntas y Respuestas",
    description:
      "Juego interactivo para dos jugadores, diseñado con JavaScript, HTML y CSS, que utiliza Socket.io para establecer una conexión local. Esta implementación garantiza una experiencia de juego fluida y en tiempo real.",
    skills: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
    ],

    github: "https://github.com/LRondinelli04/Preguntas-y-Respuestas",
  },
  {
    slug: "gestor-presupuesto",
    imagePath: "/projects/Presupuesto.jpg",
    title: "Gestor de Presupuesto",
    description:
      "Aplicación web para gestionar un presupuesto y sus gastos, desarrollada con Angular. Permite ingresar un presupuesto inicial, agregar servicios con sus respectivos gastos, sumar al presupuesto existente y reiniciarlo.",
    skills: [
      { name: "Angular", link: "https://angular.dev/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
    ],

    link: "https://agent-69fb385c348bc34d2de--gestor-de-presupuesto.netlify.app",
    github: "https://github.com/LRondinelli04/Presupuesto",
  },
  {
    slug: "it-resto",
    imagePath: "/projects/ITResto.jpg",
    title: "IT Resto",
    description:
      "Página web responsive para un restaurante, que permite visualizar promociones, menú, información de contacto y un formulario para realizar pedidos de delivery. Desarrollada con HTML, CSS, SCSS y JavaScript para ofrecer una experiencia de usuario atractiva y funcional en cualquier dispositivo.",
    skills: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "SCSS", link: "https://sass-lang.com/" },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    link: "https://eduit-resto.netlify.app/",
    github: "https://github.com/LRondinelli04/IT_Resto",
  },
];
