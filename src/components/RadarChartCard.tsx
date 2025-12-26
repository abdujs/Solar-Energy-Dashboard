import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from "recharts";

interface RadarChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  color?: string;
}

const RadarChartCard: React.FC<RadarChartCardProps> = ({ title, data, dataKey, nameKey, color = "#facc15" }) => (
  <div className="bg-navy rounded-xl shadow-glowYellow p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full">
    <h2 className="text-base sm:text-lg md:text-xl font-title font-bold mb-2 sm:mb-4 text-warning text-center drop-shadow">{title}</h2>
    <ResponsiveContainer width="100%" height={220} minHeight={160}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={nameKey} />
        <PolarRadiusAxis />
        <Radar name={dataKey} dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.6} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  </div>
);

export default RadarChartCard;
