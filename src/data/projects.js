import { AtogroupImg, RecetAppImg } from "../assets/images";

export const projects = [
  {
    title: "AutoGroup - Concesionario de Vehículos",
    descriptionKey: "autoGroupDesc",
    image: AtogroupImg,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/JoseFernandezViloria/Auto",
    live: "https://auto-wheat-rho.vercel.app/",
    featured: false,
  },
  {
    title: "Cocina Enraizada - Sitio Gastronómico",
    descriptionKey: "cocinaEnraizadaDesc",
    image: "/images/Cocina Enraizada.png",
    technologies: ["Astro", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/JoseFernandezViloria/cocina-enraizada-astro",
    live: "https://cocina-enraizada-astro.vercel.app/",
    featured: false,
  },
  {
    title: "RecetApp - Aplicación de Recetas",
    descriptionKey: "recetAppDesc",
    image: RecetAppImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/JoseFernandezViloria/recipes-app",
    live: "https://recipes-app-vtm1-5pa2uvlla-jose-fernandezs-projects-704c21d1.vercel.app/",
    featured: true,
  },
];
