import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-24 px-6 ${className}`}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}

