import React from "react";
import type { SectionProps } from "../../types/Section";

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="sm:px-6 md:px-8 py-8 md:py-12">
      <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
        <h4 className="text-xl block font-bold mb-10">{title}</h4>
        {children}
      </div>
    </section>
  );
};

export default Section;
