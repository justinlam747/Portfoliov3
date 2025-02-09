import GGG from "../assets/projects/consume.png";
import EdgeHacks from "../assets/projects/edgeHacks.png";
import EdgeHacks2 from "../assets/projects/EdgeHacks2.png";
import Timer1 from "../assets/projects/Timer1.png";
import Timer2 from "../assets/projects/Timer2.png";
import Moti1 from "../assets/projects/MotiQuo1.png";
import Moti2 from "../assets/projects/MotiQuo2.png";

export const HERO_CONTENT = `Engineering Student at Queens University `;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Web Dev",
    company: "Glazing Gorilla Games",
    description: `Developed and maintained a responsive company website for Glazing Gorilla Games, an acquisition company with 2+ million players monthly and 70+ million media views`,
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
    title: "MotiQuo",
    image: Moti1,
    image2: Moti2,
    description:
      "MotiQuo is a React-based app that fetches random motivational quotes from the ZenQuotes API with both manual and automatic refresh options. Its responsive design delivers a streamlined user experience across all devices.",
    technologies: ["React", "Tailwind", "Vite", "ZenQuotesAPI"],
    link: "https://moti-quo.vercel.app/",
    date: "2025",
  },
  {
    title: "Timer ",
    image: Timer1,
    image2: Timer2,
    description:
      "A timer app that lets users set a custom countdown, pause/resume the timer, and restart it with a preset 15-minute duration. It also features a responsive display and a light/dark mode toggle for an enhanced user experience.",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://timer-blush-one.vercel.app/",
    date: "2025",
  },
  {
    title: "GlazingGorillas",
    image: GGG,
    description:
      " Responsive website that tracks concurrent users, total visits, and game details using Roblox API",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://glazinggorillagames.com/",
    date: "2024",
  },

  {
    title: "EdgeHacks",
    image: EdgeHacks2,
    image2: EdgeHacks2,
    description:
      "Responsive website for EdgeHacks, non-profit hackathon with 100+ participants.",
    technologies: ["HTML", "CSS"],
    link: "https://justinlam6.github.io/EdgeHacks/",
    date: "2023",
  },
];

export const CONTACT = {
  email: "justin.lam@queensu.ca",
};
