import { NAME } from "../../data/const";
export default function About() {
  return (
    <p className="text-lg">
      Hello, my name is <a className="font-bold text-secondary-300">{NAME}</a>
      . I am an aspiring data scientist. Thank you for coming to my website.
      Here you can learn about me, my projects, experience and what I do.
      <br />
      <br />I have a BS in Applied Math and Computer Science Minor from San Jose
      State University. My technical interests include <a></a>
      <a className="font-bold text-secondary-300">
        math, deep learning, computer vision and overall software engineering
      </a>
      . Most of my projects are related to those topics.
      <br />
      <br />
      In the past, I've had the opportunity to gain hands on experience through
      leadership roles like serving as the technical workshop lead at the
      Responsible Computing Club at San Jose State, creating workshops on
      technical topics such as large language models, diffusion models, Python,
      and software engineering internships at large companies. Outside of
      technical things some of my interests are soccer, sneakers, horror movies!
    </p>
  );
}
