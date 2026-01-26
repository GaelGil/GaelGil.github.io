import { Anchor, Text, Stack } from "@mantine/core";
import { NAME } from "../../data/const";
export default function About() {
  return (
    <Stack>
      <Text className="text-lg">
        Hello, my name is{" "}
        <Anchor href="" underline="never" c="red">
          {NAME}
        </Anchor>
        . I am an aspiring data scientist. Thank you for coming to my website.
        Here you can learn about me, my projects, experience and what I do.
      </Text>
      <Text>
        I have a BS in Applied Math and Computer Science Minor from San Jose
        State University. My technical interests include{" "}
        <Anchor href="" underline="never" c="red">
          math, deep learning, computer vision and overall software engineering
        </Anchor>
        . Most of my projects are related to those topics.
      </Text>
      <Text>
        In the past, I've had the opportunity to gain hands on experience
        through leadership roles like serving as the technical workshop lead at
        the Responsible Computing Club at San Jose State, creating workshops on
        technical topics such as large language models, diffusion models,
        Python, and software engineering internships at large companies. Outside
        of technical things some of my interests are soccer, sneakers, horror
        movies!
      </Text>
    </Stack>
  );
}
