import { Anchor, Text } from "@mantine/core";
import { NAME } from "../../data/const";
export default function About() {
  return (
    <Text className="text-lg">
      Hello, my name is{" "}
      <Anchor href="" underline="never" c="red.9">
        {NAME}
      </Anchor>
      . I am an aspiring data scientist. Thank you for coming to my website.
      Here you can learn about me, my projects, experience and what I do.
      <br />
      <br />I have a BS in Applied Math and Computer Science Minor from San Jose
      State University. My technical interests include{" "}
      <Anchor href="" underline="never" c="red.9">
        math, deep learning, computer vision and overall software engineering
      </Anchor>
      . Most of my projects are related to those topics.
      <br />
      <br />
      In the past, I've had the opportunity to gain hands on experience through
      leadership roles like serving as the technical workshop lead at the
      Responsible Computing Club at San Jose State, creating workshops on
      technical topics such as large language models, diffusion models, Python,
      and software engineering internships at large companies. Outside of
      technical things some of my interests are soccer, sneakers, horror movies!
    </Text>
  );
}
