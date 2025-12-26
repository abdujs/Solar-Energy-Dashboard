import React from "react";

interface ImpactCardProps {
  title: string;
  value: string | number;
  description: string;
  icon?: React.ReactNode;
  colorClass?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ title, value, description, icon, colorClass = "bg-gradient-to-br from-success via-accent to-green" }) => (
  <div
    className={`group ${colorClass} rounded-xl shadow-glowYellow p-4 flex flex-col items-center justify-center hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-warning transition-transform duration-300 animate-fadein w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto`}
    tabIndex={0}
    role="region"
    aria-label={title}
  >
    {icon && <div className="mb-2 text-3xl" aria-hidden="true">{icon}</div>}
    <div className="text-lg md:text-xl font-bold font-title text-light text-center" aria-label="card-title">{title}</div>
    <div className="text-2xl md:text-4xl font-extrabold mt-2 font-title text-light drop-shadow text-center transition-all duration-500 group-hover:text-warning group-focus:text-warning" aria-label="card-value">{value}</div>
    <div className="text-xs md:text-sm mt-2 font-body text-muted text-center" aria-label="card-description">{description}</div>
  </div>
);

export default ImpactCard;
