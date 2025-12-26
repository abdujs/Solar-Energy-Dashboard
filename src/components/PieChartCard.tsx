import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface PieChartCardProps {
  title: string;
  data: any[];
  dataKey: string;
  nameKey: string;
  colors: string[];
}

const PieChartCard: React.FC<PieChartCardProps> = ({ title, data, dataKey, nameKey, colors }) => (
  <div className="bg-navy rounded-xl shadow-glowYellow p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full flex flex-col">
    <h2 className="text-base sm:text-lg md:text-xl font-title font-bold mb-8 sm:mb-10 text-brand text-center drop-shadow z-10 relative bg-transparent">{title}</h2>
    <div className="flex-1 w-full mt-2 sm:mt-4 z-0 relative" style={{ minHeight: 260 }}>
      <ResponsiveContainer width="100%" height={240} minHeight={200}>
        <PieChart margin={{ top: 48, right: 0, left: 0, bottom: 40 }}>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="65%"
            cy="64%"
            outerRadius={80}
            label={({ name }) => name}
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" verticalAlign="middle" align="left" wrapperStyle={{ left: 0, top: 40 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default PieChartCard;
