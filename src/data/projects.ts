import orderMail from "../assets/projects/order_mail.png";
import rocketAgent from "../assets/projects/rocket_agent.png";
import jupyter from "../assets/projects/jupyter.png";
import markov from "../assets/projects/markov.png";
import fulltack from "../assets/projects/fullstack.svg";
import neural_network from "../assets/projects/neural_network.svg";
import algorithm_visualizer from "../assets/projects/algorithm_visualizer.png";
import default_img from "../assets/react.svg";
import cnn from "../assets/projects/cnn.png";
import type { Project } from "../types/Project";
import rag from "../assets/projects/rag.svg";
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sentence Generator",
    description:
      "A simple sentence generator built with flask and markov chains.",
    link: "https://github.com/GaelGil/sentence-generator",
    content: "Portfolio",
    url: "https://github.com/GaelGil/sentence-generator",
    tags: ["Flask", "Python", "Markov Chain"],
    img: markov,
  },
  {
    id: 2,
    title: "Neural Network From Scratch",
    description:
      "A simple feed forward neural network I implemented from scratch in python using numpy.",
    link: "https://github.com/GaelGil/gaelgil-github-io",
    content: "Portfolio",
    url: "https://gaelgil.vercel.app/",
    tags: ["Python", "Numpy", "Deep Learning", "Jupyter Notebook"],
    img: neural_network,
  },
  {
    id: 3,
    title: "Intro to Convolutional Neural Networks",
    description: "A simple convolutional neural network I implented in pytorch",
    link: "https://github.com/GaelGil/notebooks/tree/master/convolutional_nueral_networks",
    content: "Portfolio",
    url: "https://github.com/GaelGil/notebooks/tree/master/convolutional_nueral_networks",
    tags: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Jupyter Notebook",
      "Computer Vision",
    ],
    img: cnn,
  },
  {
    id: 4,
    title: "Notebooks",
    description:
      "A place for all my notebook projects. In these notebooks you can find projects on machine learning, neural networks, computer vision and statistics",
    link: "https://github.com/GaelGil/notebooks",
    content: "Portfolio",
    url: "https://github.com/GaelGil/notebooks/",
    tags: [
      "ML",
      "Python",
      "Deep Learning",
      "Pytorch",
      "Jupyter Notebook",
      "Statistics",
    ],
    img: jupyter,
  },
  {
    id: 5,
    title: "Algorithms Visualizer",
    description:
      "A project I created using react to visualize sorting and pathfinding algorithms.",
    link: "https://github.com/GaelGil/algorithm-visualizer",
    content: "Portfolio",
    url: "https://gaelgil.github.io/algorithm-visualizer/",
    tags: ["React", "Typescript", "Algorithms", "Sorting", "Pathfinding"],
    img: algorithm_visualizer,
  },
  {
    id: 6,
    title: "Full Stack Template",
    description:
      "This is a full stack template I created using react, typescript, bun, flask, postgres and  docker",
    link: "https://github.com/GaelGil/algorithm-visualizer",
    content: "Portfolio",
    url: "https://gaelgil.github.io/algorithm-visualizer/",
    tags: ["React", "Typescript", "Flask", "Postgres", "Docker", "Template"],
    img: fulltack,
  },
  {
    id: 7,
    title: "Order Mail Agent",
    description:
      "A order mail agent that helps users manage and place incoming mail orders to a company.",
    link: "https://github.com/kevingil/ordermail-agent",
    content: "Portfolio",
    url: "https://github.com/kevingil/ordermail-agent",
    tags: ["AI", "Python", "MCP", "Fullstack", "Flask"],
    img: orderMail,
  },
  {
    id: 8,
    title: "Rocket Agent",
    description:
      "A personal finance agent that helps users manage their finances.",
    link: "https://github.com/kevingil/rocket-agent",
    content: "Portfolio",
    url: "https://github.com/kevingil/rocket-agent",
    tags: ["Fullstack", "AI Agent", "Python", "Flask"],
    img: rocketAgent,
  },
  {
    id: 9,
    title: "Essay Writing Agent",
    description:
      "A AI agent that writes essays based on user input. No frameworks.",
    link: "https://github.com/GaelGil/essay_writing_ai_agent",
    content: "Portfolio",
    url: "https://github.com/GaelGil/essay_writing_ai_agent",
    tags: ["AI", "Python", "MCP", "Fullstack"],
    img: default_img,
  },
  {
    id: 10,
    title: "Retrival Augmented Generation (RAG) Chatbot",
    description: "A chatbot that uses RAG to answer questions. No frameworks.",
    link: "https://github.com/GaelGil/essay_writing_ai_agent",
    content: "Portfolio",
    url: "https://github.com/GaelGil/essay_writing_ai_agent",
    tags: ["AI", "Python", "RAG", "Fullstack"],
    img: rag,
  },
  {
    id: 11,
    title: "Balanced Calendar Agent",
    description:
      "An AI agent that creates a balanced calendar based on your calendar. No frameworks.",
    link: "https://github.com/GaelGil/balanced_calender_agent",
    content: "Portfolio",
    url: "https://github.com/GaelGil/balanced_calender_agent",
    tags: ["AI", "Python", "Google API", "React", "Fullstack"],
    img: default_img,
  },
];
