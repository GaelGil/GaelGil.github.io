import { Anchor, Text, Stack } from "@mantine/core";
import { LINKEDIN_URL, NAME } from "../../data/const";

export default function About() {
  return (
    <Stack gap="md" maw={720}>
      <Text size="lg" lh={1.8}>
        Hello, my name is{" "}
        <Anchor
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          underline="never"
          c="brand"
        >
          {NAME}
        </Anchor>
        . I am an aspiring data scientist. Thank you for coming to my website.
        Here you can learn about me, my projects, experience and what I do.
      </Text>
      <Text lh={1.8}>
        I am a graduate student in Computational Linguistics at San Jose
        University. I did my undergrad in Applied Math and Computer Science also
        from San Jose State. My technical interests include{" "}
        <Text span c="brand" inherit>
          math, deep learning, computer vision and overall software engineering
        </Text>
        . Most of my projects are related to those topics.
      </Text>
      <Text lh={1.8}>
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
