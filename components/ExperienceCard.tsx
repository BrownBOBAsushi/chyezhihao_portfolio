interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export default function ExperienceCard({
  role,
  company,
  location,
  period,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-300 bg-white">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{role}</h3>
          <p className="text-gray-700 font-medium">{company}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-gray-400 mt-1.5">•</span>
            <span className="text-gray-700 leading-relaxed flex-1">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

