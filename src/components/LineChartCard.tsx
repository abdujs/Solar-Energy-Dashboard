import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface LineChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  color?: string;
}

const LineChartCard: React.FC<LineChartCardProps> = ({ title, data, dataKey, nameKey, color = "#6366f1" }) => (
  <div className="bg-navy rounded-xl shadow-glowBlue p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full">
    <h2 className="text-base sm:text-lg md:text-xl font-title font-bold mb-2 sm:mb-4 text-brand text-center drop-shadow">{title}</h2>
    <ResponsiveContainer width="100%" height={220} minHeight={160}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={3} name={dataKey} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartCard;
