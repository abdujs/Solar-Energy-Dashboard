import React from "react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
  <div className="bg-navy rounded-xl shadow-glow p-4 sm:p-6 md:p-8 flex flex-col w-full">
    <h2 className="text-base sm:text-lg md:text-xl font-title font-bold mb-4 sm:mb-6 text-brand text-center drop-shadow z-10 relative">
      {title}
    </h2>
    <div className="flex-1 w-full mt-2 sm:mt-4 z-0 relative">{children}</div>
  </div>
);

export default ChartCard;
