interface TimelineItemProps {
  institution: string;
  location: string;
  degree: string;
  period: string;
  isLast?: boolean;
}

export default function TimelineItem({
  institution,
  location,
  degree,
  period,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gray-200" />
      )}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-gray-900 border-4 border-white" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {institution}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-gray-700 mb-2">{degree}</p>
        <p className="text-sm text-gray-500">{period}</p>
      </div>
    </div>
  );
}

