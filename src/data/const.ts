import type { EducationItem } from "../types/EducationItem";
import img from "../assets/me_medium.png";

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
    url: "https://gaelgil.vercel.app/",
    tags: ["React", "TailwindCSS"],
  },
];
