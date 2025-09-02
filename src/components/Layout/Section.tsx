import React from "react";
import type { SectionProps } from "../../types/Section";
import { Title } from "@mantine/core";
const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="sm:px-6 md:px-8 py-8 md:py-12">
      <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
        <Title order={2} fw={600} className="text-xl block font-bold mb-10">
          {title}
        </Title>
        {children}
      </div>
    </section>
  );
};

export default Section;
