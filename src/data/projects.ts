import orderMail from "../assets/projects/order_mail.png";
import rocketAgent from "../assets/projects/rocket_agent.png";
import jupyter from "../assets/projects/jupyter.png";
import markov from "../assets/projects/markov.png";
import fulltack from "../assets/projects/fullstack.svg";
import neural_network from "../assets/projects/neural_network.svg";
import algorithm_visualizer from "../assets/projects/algorithm_visualizer.png";
import cnn from "../assets/projects/cnn.png";
import rag from "../assets/projects/rag.svg";
import calendar_agent from "../assets/projects/calendar.png";
import writing_agent from "../assets/projects/writing_agent.png";
import web_scraper from "../assets/projects/selenium.png";
import chatgpt from "../assets/projects/chatgpt.png";

import type { Project } from "../types/Project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sentence Generator",
    description:
      "A simple sentence generator built with flask and markov chains.",
    content:
      "In this project I implemented a markov chain to generate sentences. The idea is that given a piece of text you can count the frequency of each word and that way calculate which is more likely to come after one another. I used dictionaries to create the chain. The project was created using flask and python.",
    repo: "https://github.com/GaelGil/sentence-generator",
    tags: ["Flask", "Python", "Markov Chain", "Probability"],
    img: markov,
  },
  {
    id: 2,
    title: "Neural Network From Scratch",
    description:
      "A simple feed forward neural network I implemented from scratch in python using numpy.",
    link: "https://github.com/GaelGil/notebooks/blob/master/back-propagation/back_propagation.ipynb",
    content:
      "I wanted to learn the basics of deep learning and so I implemented a feed forward neural network from scratch in python using numpy. The project was created using jupyter notebook. I only used numpy and not pytorch or tensorflow. In this notebook you can find the implementation of the backpropagation algorithm and a simple feed forward neural network. The notebook requires a good understanding of calculus and linear algebra.",
    repo: "https://github.com/GaelGil/notebooks/blob/master/back-propagation/",
    tags: ["Python", "Numpy", "Deep Learning", "Jupyter Notebook"],
    img: neural_network,
  },
  {
    id: 3,
    title: "Intro to Convolutional Neural Networks",
    description: "A simple convolutional neural network I implented in pytorch",
    link: "https://github.com/GaelGil/notebooks/blob/master/convolutional_nueral_networks/cnns.ipynb",
    content:
      "In this notebook I implemented a convolutinal neural network in pytorch. The notebook goes over convolutions, min and max pooling, and the feed forward part of the network. This notebook assumes that you have a good understanding of neural networks.  The data I used for this was the cats and dogs dataset from kaggle. In the end I got some pretty good results with a basic architecture and light data augmentation.",
    repo: "https://github.com/GaelGil/notebooks/tree/master/convolutional_nueral_networks",
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
      " A place for all my notebook projects. In these notebooks you can find projects on machine learning, neural networks, computer vision and statistics :) ",
    link: "https://github.com/GaelGil/notebooks",
    content:
      "I created these notebooks to learn and practice machine learning. Here you can find projects on deep learning, computer vision and statistics. The datasets are included as well. For each project I go in depth into the data, the goal, the model and evaluating the results. ",
    repo: "https://github.com/GaelGil/notebooks/",
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
    content:
      "A project I created using react to visualize sorting algorithms and pathfinding algorithms. It uses react typescript and tailwind.",
    repo: "https://gaelgil.github.io/algorithm-visualizer/",
    tags: ["React", "Typescript", "Algorithms", "Sorting", "Pathfinding"],
    img: algorithm_visualizer,
  },
  {
    id: 6,
    title: "Web Scraper",
    description:
      "A web scraper I created using selenium. Its intended to scrape items from several pages. I am using it to scrape books from goodreads.",
    content: "Portfolio",
    repo: "https://github.com/GaelGil/web-scraper",
    tags: ["Python", "Selenium", "Web Scraper", "Postgres"],
    img: web_scraper,
  },
  {
    id: 7,
    title: "Full Stack Template",
    description:
      "This is a full stack template I created using react, typescript, bun, flask, postgres and  docker",
    content: "Portfolio",
    repo: "https://github.com/GaelGil/full_stack_template",
    tags: ["React", "Typescript", "Flask", "Postgres", "Docker", "Template"],
    img: fulltack,
  },
  {
    id: 8,
    title: "Order Mail Agent",
    description:
      "A order mail agent that helps users manage and place incoming mail orders to a company.",
    content: "Portfolio",
    repo: "https://github.com/kevingil/ordermail-agent",
    tags: ["AI", "Python", "MCP", "Fullstack", "Flask"],
    img: orderMail,
  },
  {
    id: 9,
    title: "Rocket Agent",
    description:
      "A personal finance agent that helps users manage their finances.",
    content: "Portfolio",
    repo: "https://github.com/kevingil/rocket-agent",
    tags: ["Fullstack", "AI Agent", "Python", "Flask"],
    img: rocketAgent,
  },
  {
    id: 10,
    title: "Essay Writing Agent",
    description:
      'This is an AI Agent that "reasons", plans, and executes the task of writing an essay. It was created using the OpenAI api, mcp, and python. No agent framework. ',
    content: "Portfolio",
    repo: "https://github.com/GaelGil/essay_writing_ai_agent",
    tags: ["AI", "Python", "MCP"],
    img: writing_agent,
  },
  {
    id: 11,
    title: "Retrival Augmented Generation (RAG) Chatbot",
    description:
      "A chatbot that implements retrival augmented generation (RAG) to recommend movies and answer questions about new releases. Uses flask, react typescript, and postgres. No agent frameworks. ",
    content: "Portfolio",
    repo: "https://github.com/GaelGil/essay_writing_ai_agent",
    tags: ["AI", "Python", "RAG", "Fullstack", "Typescript"],
    img: rag,
  },
  {
    id: 12,
    title: "Balanced Calendar Agent",
    description:
      "A calendar agent that helps you balance your work life. Created using flask, typescript, react, OpenAI api, and google calendar api. No agent frameworks",
    content: "Portfolio",
    repo: "https://github.com/GaelGil/balanced_calender_agent",
    tags: [
      "AI",
      "Python",
      "Google API",
      "React",
      "Fullstack",
      "Typescript",
      "Composio",
    ],
    img: calendar_agent,
  },
  {
    id: 13,
    title: "ChatGPT Clone",
    description:
      "A ChatGPT clone I created using flask, react, typescript OpenAI api and postgres. You can sign up, create chat sessions, etc.",
    content: "Portfolio",
    repo: "https://github.com/GaelGil/chat_gpt_clone",
    tags: ["ChatGPT", "Python", "Typescript", "React", "Fullstack", "Mantine"],
    img: chatgpt,
  },
];
