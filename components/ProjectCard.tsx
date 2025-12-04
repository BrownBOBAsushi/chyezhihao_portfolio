interface ProjectCardProps {
  title: string;
  event: string;
  date: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  event,
  date,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-300 bg-white">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 font-medium">{event}</p>
        </div>
        <span className="text-sm text-gray-500 whitespace-nowrap">{date}</span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-full border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

