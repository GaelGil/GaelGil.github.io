import type { EducationItem } from "../types/EducationItem";
import type { ExperinceItem } from "../types/ExperienceItem";
import img from "../assets/me.jpg";

export const LINKEDIN_URL = "https://www.linkedin.com/in/gael-gil-7a4baa172";
export const GITHUB_URL = "https://github.com/GaelGil";
export const NAME = "Gael Gil";
export const ME_IMAGE = img;

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelors of Science in Applied Math & CS Minor",
    institution: "San Jose State University",
  },
  {
    degree: "Associate of Science in Computer Science",
    institution: "San Francisco Community College",
  },
];

export const SKILLS: string[] = [
  "Python",
  "Typescript",
  "React",
  "PostgreSQL",
  "PyTorch",
  "MCP",
  "Java",
  "Tesnorflow",
  "C++",
  "Git",
  "GCP",
];

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "My personal portfolio built with React and TailwindCSS. Hosted on Vercel.",
    link: "https://github.com/GaelGil/gaelgil-github-io",
    content: "Portfolio",
    url: "https://gaelgil.vercel.app/",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "My personal portfolio built with React and TailwindCSS. Hosted on Vercel.",
    link: "https://github.com/GaelGil/gaelgil-github-io",
    content: "Portfolio",
    url: "https://gaelgil.vercel.app/",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio built with React and TailwindCSS. Hosted on Vercel.",
    link: "https://github.com/GaelGil/gaelgil-github-io",
    content: "Portfolio",
    url: "https://gaelgil.vercel.app/",
    tags: ["React", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Neural Network From Scratch",
    description:
      "My personal portfolio built with React and TailwindCSS. Hosted on Vercel.",
    link: "https://github.com/GaelGil/gaelgil-github-io",
    content: "Portfolio",
    url: "https://gaelgil.vercel.app/",
    tags: ["Python", "Numpy", "Deep Learning"],
  },
  {
    id: 5,
    title: "Order Mail Agent",
    description:
      "My personal portfolio built with React and TailwindCSS. Hosted on Vercel.",
    link: "https://github.com/kevingil/rocket-agent",
    content: "Portfolio",
    url: "https://github.com/kevingil/rocket-agent",
    tags: ["AI", "Python", "MCP", "Fullstack"],
  },
  {
    id: 6,
    title: "Rocket Agent",
    description:
      "My personal portfolio built with React and TailwindCSS. Hosted on Vercel.",
    link: "https://github.com/kevingil/rocket-agent",
    content: "Portfolio",
    url: "https://github.com/kevingil/rocket-agent",
    tags: ["Fullstack", "AI Agent", "Python"],
  },
  {
    id: 7,
    title: "Essay Writing Agent",
    description:
      "A AI agent that writes essays based on user input. No frameworks.",
    link: "https://github.com/GaelGil/essay_writing_ai_agent",
    content: "Portfolio",
    url: "https://github.com/GaelGil/essay_writing_ai_agent",
    tags: ["AI", "Python", "MCP", "Fullstack"],
  },
  {
    id: 8,
    title: "Balanced Calendar Agent",
    description:
      "An AI agent that creates a balanced calendar based on your calendar. No frameworks.",
    link: "https://github.com/GaelGil/balanced_calender_agent",
    content: "Portfolio",
    url: "https://github.com/GaelGil/balanced_calender_agent",
    tags: ["AI", "Python", "MCP", "Google API", "React", "Fullstack"],
  },
];

export const EXPERIENCE: ExperinceItem[] = [
  {
    company: "San Jose State University",
    position: "Research Assistant",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
  },
  {
    company: "Cisco App Dynamics",
    position: "Software Engineer",
    startDate: "June 2020",
    endDate: "Aug 2020",
  },
  {
    company: "Uber",
    position: "Software Engineer",
    startDate: "Nov 2019",
    endDate: "Apr 2020",
  },
];
