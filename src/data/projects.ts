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
      " To generate sentences we use Markov chains. A Markov chain is a sequence of events where the probability of future events depend only on the current event. In our case the Markov chain is a sequence of words. Where the next word can be predicted based on the current word. I did this by creating a dictionary of all the words in a given text. Then for each word we get the following words and count them. We can see that some words are more common than others. For example car is more likely to be followed by drove rather than person or exploded. I applied softmax to this dictionary to accurately represent a Markov chain. This means all probabilities of each of the next words sum to 1. To learn more about the implementation check out the repo!",
    repo: "https://github.com/GaelGil/sentence-generator",
    link: "https://sentence-generator.pages.dev/",
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
    repo: "https://algorithm-visualizer-a7v.pages.dev/",
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
    content:
      "Several businesses take in orders through email still. People need to go one by one to place the order manually. We can automate this with AI. In this project we created a AI agent that takes in emails, analyzes what the customer wants, checks availability and places the order. It was created using the OpenAI api, mcp, and python. No agent framework. ",
    repo: "https://github.com/kevingil/ordermail-agent",
    tags: ["AI", "Python", "MCP", "Fullstack", "Flask"],
    img: orderMail,
  },
  {
    id: 9,
    title: "Rocket Agent",
    description:
      "A personal finance agent that helps users manage their finances.",
    content:
      "In this project we created a AI agent that helps users manage their finances. It was created using the OpenAI No agent framework. This is a full stack project so a user can create an account, sign in and connect their bank account to the agent. No agent framework. ",
    repo: "https://github.com/kevingil/rocket-agent",
    tags: ["Fullstack", "AI Agent", "Python", "Flask"],
    img: rocketAgent,
  },
  {
    id: 10,
    title: "Essay Writing Agent",
    description:
      'This is an AI Agent that "reasons", plans, and executes the task of writing an essay. It was created using the OpenAI api, mcp, and python. No agent framework. ',
    content:
      'In this project I created an AI agent that writes essays. It only writes essays or any sort of content but it started out as essays so I just kept the name. This uses Model Context Protocol (MCP) for the tools. The agent plans, "reasons" and excutues. This could be used in a a2a project where you have another agent call this agent for this task of writing.',
    repo: "https://github.com/GaelGil/essay_writing_ai_agent",
    tags: ["AI", "Python", "MCP"],
    img: writing_agent,
  },
  {
    id: 11,
    title: "Retrival Augmented Generation (RAG) Chatbot",
    description:
      "A chatbot that implements retrival augmented generation (RAG) to recommend movies and answer questions about new releases. Uses flask, react typescript, and postgres. No agent frameworks. ",
    content:
      "A simple chatbot that uses retrieval augmented generation (RAG) to recommend movies to a user. This project uses flask, react typescript, Postgres, pgvector and docker. It is a simple chat interface where a user can ask to get movies recommended. The agent will then use a tool to search in a vector database similar movies to those of the interest of the user. It will then return those movies to the user. I used the OpenAI embeddings model to generate the embeddings for movies descriptions. The descriptions were from letterboxd. I saved the embeddings to a pkl file to then seed into the database instead of calling the model on start up if I had to take down the container. You can see how I did that in ./backend/app/chat/utils/debugging and ./backend/seed.py Additionally the chatbot is equipped with tools to search news or search google for current movies and tell the user about them.",
    repo: "https://github.com/GaelGil/rag_movie_recommender",
    tags: ["AI", "Python", "RAG", "Fullstack", "Typescript"],
    img: rag,
  },
  {
    id: 12,
    title: "Balanced Calendar Agent",
    description:
      "A calendar agent that helps you balance your work life. Created using flask, typescript, react, OpenAI api, and google calendar api. No agent frameworks",
    content:
      "Through my journey in learning AI agents I've read articles about project ideas, gone to hackathons, etc. I've come to learn that calendar agents are very popular so I decided to create one myself. It is a simple chat interface where can login, connect their google calendar. After logging in and authenticating google calendar, you can ask the agent to help you. It can list, create , delete, updated events, analyze calendar, suggest new recreational events.",
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
    content: "In this project I created a ChatGPT clone. ",
    repo: "https://github.com/GaelGil/chat_gpt_clone",
    tags: ["ChatGPT", "Python", "Typescript", "React", "Fullstack", "Mantine"],
    img: chatgpt,
  },
  {
    id: 14,
    title: "Vision Transformer from Scratch in JAX",
    description:
      "In this project I implemented a Vision transformer model from the paper A Image is Worth 16x16 Words. I implemented it from scratch in jax.",
    content:
      "In this project I implemented a Vision transformer model from the paper A Image is Worth 16x16 Words. I implemented it from scratch in jax.",
    repo: "https://github.com/GaelGil/notebooks/tree/master/transformer",
    tags: ["ChatGPT", "Python", "Typescript", "React", "Fullstack", "Mantine"],
    img: chatgpt,
  },
  {
    id: 15,
    title: "Transformer from Scratch in JAX",
    description:
      "In this project I implemented a transformer model from the paper Attention is All You Need. I implemented it from scratch in jax.",
    content:
      "In this project I implemented a transformer model from the paper Attention is All You Need. I implemented it from scratch in jax.",
    repo: "https://github.com/GaelGil/notebooks/tree/master/transformer",
    tags: ["ChatGPT", "Python", "Typescript", "React", "Fullstack", "Mantine"],
    img: chatgpt,
  },
];
