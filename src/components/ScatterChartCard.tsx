import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface ScatterChartCardProps {
  title: string;
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
}

const ScatterChartCard: React.FC<ScatterChartCardProps> = ({ title, data, xKey, yKey, color = "#ef4444" }) => {
  // Micro-interactions: illuminate/dim points, smart tooltip, animated transitions
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);
  return (
    <div className="bg-navy rounded-xl shadow-glow p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 w-full animate-fadein">
      <h2 className="text-base sm:text-lg md:text-xl font-title font-bold mb-2 sm:mb-4 text-error text-center drop-shadow">{title}</h2>
      <ResponsiveContainer width="100%" height={220} minHeight={160}>
        <ScatterChart margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid />
          <XAxis dataKey={xKey} name={xKey} />
          <YAxis dataKey={yKey} name={yKey} />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ backgroundColor: '#f8fafc', color: '#1e293b', borderRadius: '8px', boxShadow: '0 0 8px #f59e42' }}
            formatter={(value, name) => {
              if (name === 'Cap. (GW)' || name === 'Capacity (GW)') {
                const homes = Math.round((value as number) * 400000 / 1000);
                return [`${value} GW`, `≈ Powering ${homes.toLocaleString()} homes`];
              }
              return value;
            }}
          />
          <Legend />
          <Scatter
            name={title}
            data={data}
            fill={color}
            isAnimationActive={true}
            animationDuration={1200}
            shape={(props: any) => {
              const { cx, cy, index } = props;
              const isHovered = hoveredIdx === index;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 9 : 6}
                  fill={isHovered ? color : '#fde68a'}
                  opacity={hoveredIdx === null ? 1 : isHovered ? 1 : 0.4}
                  style={{ filter: isHovered ? 'drop-shadow(0 0 12px #f59e42)' : '' }}
                  onMouseOver={() => setHoveredIdx(index)}
                  onMouseOut={() => setHoveredIdx(null)}
                />
              );
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartCard;
