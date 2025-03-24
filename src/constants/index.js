import GGG from "../assets/projects/GGGs.png";
import EdgeHacks from "../assets/projects/edgeHacks.png";
import EdgeHacks2 from "../assets/projects/EdgeHacks2.png";
import Timer1 from "../assets/projects/timer1.png";
import Timer2 from "../assets/projects/timer2.png";
import Moti1 from "../assets/projects/MotiQuo1.png";
import Moti2 from "../assets/projects/MotiQuo2.png";
import Plant from "../assets/projects/Plant.png";
import ClashRoyale from "../assets/projects/ClashRoyaleRender.png";
import Batman from "../assets/projects/BatmanRender.png";
import Gru from "../assets/projects/GruRender.png";

export const HERO_CONTENT = `Engineering Student at Queens University `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Dev",
    company: "Glazing Gorilla Games",
    description: `Landing Page`,
    technologies: ["Javascript", "React.js", "Tailwind", "html"],
  },
  {
    year: "2022 - 2023",
    role: "Creative",
    company: "Fitness Solutions Plus",
    description: `Edited, designed, and recorded videos that helped reached thousands suffering from osteoporosis, pcos, etc `,
    technologies: [],
  },
  {
    year: "2020 - 2021",
    role: "Freelance Creative",
    company: "Fiverr",
    description: `Delivered custom videos and thumbnails using Sony Vegas Pro, Adobe Premiere, and Photoshop for a global client base through Fiverr.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "GlazingGorillas",
    image: GGG,
    description: "Landing Website",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://ggweb-chi.vercel.app/",
    date: "2024",
  },
  {
    title: "WaterYouDoing",
    image: Plant,

    description: "MakeUoft12 Hackathon",
    technologies: ["HTML", "CSS"],
    link: "https://devpost.com/software/wateryoudoing-cjnzhp",
    date: "2023",
  },
  {
    title: "MotiQuo",
    image: Moti1,
    image2: Moti2,
    description: "Motivational Quote Generator",
    technologies: ["React", "Tailwind", "Vite", "ZenQuotesAPI"],
    link: "https://moti-quo.vercel.app/",
    date: "2025",
  },
  {
    title: "Timer ",
    image: Timer1,
    image2: Timer2,
    description: "Timer Web App",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://timer-blush-one.vercel.app/",
    date: "2025",
  },
 

  {
    title: "EdgeHacks",
    image: EdgeHacks2,
    image2: EdgeHacks2,
    description: "Hackathon Website",
    technologies: ["HTML", "CSS"],
    link: "https://justinlam6.github.io/EdgeHacks/",
    date: "2023",
  },

];

export const CONTACT = {
  email: "justin.lam@queensu.ca",
};
