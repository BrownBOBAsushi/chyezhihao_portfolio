interface SkillsSectionProps {
  title: string;
  items: string[];
}

export default function SkillsSection({ title, items }: SkillsSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

