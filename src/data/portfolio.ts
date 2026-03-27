import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithub,
  SiJira,
  SiConfluence,
  SiDotnet,
} from "@icons-pack/react-simple-icons";
import { Database } from "lucide-react";

export const PORTFOLIO_DATA = {
  profile: {
    cvUrl: "/cv-juan-avedano.pdf", // Ruta directa al archivo en public
    name: "Juan Cruz Avedano",
    title: "Fullstack Developer | Python & React Specialist",
    location: "Córdoba, Argentina",
    linkedin: "https://www.linkedin.com/in/juan-cruz-avedano-165b90239/",
    github: "https://github.com/Juan-Avedano",
    about:
      "Desarrollador enfocado en soluciones escalables. Especializado en la robustez de Python (FastAPI/Flask) y la interactividad de React + TypeScript, con fuerte enfoque en flujos corporativos ágiles.",
  },

  skillGroups: [
    {
      title: "Infraestructura & Backend Core",
      items: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
        { name: "Flask", icon: SiFlask, color: "#ffffff" },
        { name: "C# (.NET)", icon: SiDotnet, color: "#512BD4" },
      ],
    },
    {
      title: "Bases de Datos y Operaciones",
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "SQL Server", icon: Database, color: "#CC2927" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
      ],
    },
    {
      title: "Desarrollo Frontend & Herramientas",
      items: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Metodologías Ágiles & Calidad (QA)",
      items: [
        { name: "Jira", icon: SiJira, color: "#0052CC" },
        { name: "Confluence", icon: SiConfluence, color: "#172B4D" },
        { name: "Zephyr QA", icon: null, color: "#009FDA" }, // Zephyr no tiene icono oficial en SimpleIcons
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      ],
    },
  ],

  projects: [
    {
      title: "Customer Portal",
      description:
        "Plataforma de autogestión para telecomunicaciones que redujo la dependencia del soporte telefónico mediante digitalización de trámites.",
      stack: ["Python", "Flask", "PostgreSQL", "JS"],
      highlights: "Optimización de escalabilidad y atención al cliente.",
    },
    {
      title: "Sistema de Gestión de Repuestos",
      description:
        "Aplicación Fullstack para la automatización de inventario y ventas. Permite la carga de productos, cálculos automáticos y sincronización de pedidos en tiempo real entre el mostrador y caja.",
      stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL"],
      highlights: "Automatización de procesos de venta y control de stock.",
    },
  ],
};
