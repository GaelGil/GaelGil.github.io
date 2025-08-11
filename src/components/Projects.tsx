interface Project {
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Bridge Design Simulation",
    description:
      "Developed a 3D simulation of bridge load tests using Python and CAD tools.",
    link: "#",
  },
  {
    title: "Renewable Energy Monitoring System",
    description:
      "Built an IoT-based system to track solar panel performance in real-time.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link && (
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
