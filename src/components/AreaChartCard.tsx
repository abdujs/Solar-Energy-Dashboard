import React from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface AreaChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  color?: string;
  fill?: string;
}

const AreaChartCard: React.FC<AreaChartCardProps> = ({ title, data, dataKey, nameKey, color = "#22c55e", fill = "#a7f3d0" }) => (
  <div className="bg-navy rounded-xl shadow-glowYellow p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full">
    <h2 className="text-base sm:text-lg md:text-xl font-title font-bold mb-2 sm:mb-4 text-brand text-center drop-shadow">{title}</h2>
    <ResponsiveContainer width="100%" height={220} minHeight={160}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey={dataKey} stroke={color} fill={fill} name={dataKey} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default AreaChartCard;
