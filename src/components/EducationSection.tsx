interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

const educationList: EducationItem[] = [
  {
    degree: "B.Sc. in Civil Engineering",
    institution: "University of Example",
    year: "2018",
  },
  {
    degree: "M.Sc. in Structural Engineering",
    institution: "Tech Institute",
    year: "2021",
  },
];

export default function Education() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <ul className="space-y-4">
        {educationList.map((edu, idx) => (
          <li key={idx} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
