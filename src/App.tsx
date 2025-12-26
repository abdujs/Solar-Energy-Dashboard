import solarpowerData from '../data/solarpower.json';
import ImpactCard from './components/ImpactCard';
import AreaChartCard from './components/AreaChartCard';

import PieChartCard from './components/PieChartCard';
import LineChartCard from './components/LineChartCard';
import RadarChartCard from './components/RadarChartCard';
import ScatterChartCard from './components/ScatterChartCard';


// Prepare top 10 countries by solar capacity (excluding 'World')
const topCapacity = solarpowerData
  .filter((d: any) => d.Country !== 'World')
  .sort((a: any, b: any) => b['Cap. (GW)'] - a['Cap. (GW)'])
  .slice(0, 10);

// Pie chart colors

const pieColors = ['#f59e42', '#6366f1', '#22c55e', '#ef4444', '#a78bfa'];

// Top 5 countries by capacity
const top5Capacity = solarpowerData
  .filter((d: any) => d.Country !== 'World')
  .sort((a: any, b: any) => b['Cap. (GW)'] - a['Cap. (GW)'])
  .slice(0, 5);


// Top 5 countries by capacity

// Prepare data for LineChart and AreaChart (global metrics)
const globalMetrics = solarpowerData.filter((d: any) => d.Country === 'World');
const lineAreaData = [
  {
    name: 'Capacity (GW)',
    value: globalMetrics[0]?.['Cap. (GW)'] || 0,
  },
  {
    name: 'Generation (TWh)',
    value: globalMetrics[0]?.['Gen. (TWh)'] || 0,
  },
  {
    name: 'Capacity Growth (%)',
    value: globalMetrics[0]?.['% cap. growth'] || 0,
  },
];

// Get world total capacity

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-dark2 to-light2 p-4 sm:p-6 md:p-8 flex flex-col items-center animate-fadein" aria-label="Worldwide Solar Energy Dashboard">
      {/* Headline Metric */}
      <h1 className="w-full text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 text-brand font-title drop-shadow-lg shadow-glowYellow tracking-tight transition-all duration-700">
        <span className="text-accent">☀️</span> Global Solar Capacity Today
      </h1>

      {/* Global Analytics: Impact Cards Only */}
      <div className="mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10" role="list">
        <ImpactCard
          title="Global Capacity"
          value={`${globalMetrics[0]?.['Cap. (GW)'] || 0} GW`}
          description="Total installed solar capacity worldwide"
          icon={<span role="img" aria-label="globe">🌍</span>}
          colorClass="bg-gradient-to-br from-navy2 via-brand to-light shadow-glow"
        />
        <ImpactCard
          title="Global Generation"
          value={`${globalMetrics[0]?.['Gen. (TWh)'] || 0} TWh`}
          description="Total solar energy generated worldwide"
          icon={<span role="img" aria-label="lightning">⚡</span>}
          colorClass="bg-gradient-to-br from-warning via-accent2 to-light2 shadow-glowYellow"
        />
        <ImpactCard
          title="Global Growth Rate"
          value={`${globalMetrics[0]?.['% cap. growth'] || '--'}%`}
          description="Annual global solar capacity growth rate"
          icon={<span role="img" aria-label="chart">📈</span>}
          colorClass="bg-gradient-to-br from-success via-green to-light2 shadow-glowGreen"
        />
        <ImpactCard
          title="Top Country"
          value={topCapacity[0]?.Country || '--'}
          description={`Leading country by solar capacity (${topCapacity[0]?.['Cap. (GW)'] || 0} GW)`}
          icon={<span role="img" aria-label="flag">🏳️</span>}
          colorClass="bg-gradient-to-br from-accent via-navy2 to-light shadow-glowBlue"
        />
      </div>

      {/* Global Charts */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <PieChartCard
          title="Top 5 Countries by Solar Capacity (GW)"
          data={top5Capacity}
          dataKey="Cap. (GW)"
          nameKey="Country"
          colors={pieColors}
        />
        <LineChartCard
          title="Top 10 Countries Solar Capacity (Line)"
          data={topCapacity.map((d: any) => ({ name: d.Country, value: d['Cap. (GW)'] }))}
          dataKey="value"
          nameKey="name"
          color="#6366f1"
        />
        <RadarChartCard
          title="Top 5 Countries by Capacity (Radar)"
          data={top5Capacity.map((d: any) => ({ Country: d.Country, Capacity: d['Cap. (GW)'] }))}
          dataKey="Capacity"
          nameKey="Country"
          color="#facc15"
        />
        <ScatterChartCard
          title="Capacity vs. Growth (Scatter)"
          data={topCapacity.map((d: any) => ({ Country: d.Country, Capacity: d['Cap. (GW)'], Growth: d['% cap. growth'] }))}
          xKey="Capacity"
          yKey="Growth"
          color="#ef4444"
        />
      </div>

      {/* Area Chart: Global Solar Metrics */}
      <div className="w-full mb-6 sm:mb-8">
        <AreaChartCard
          title="Global Solar Metrics (Area)"
          data={lineAreaData}
          dataKey="value"
          nameKey="name"
          color="#22c55e"
          fill="#a7f3d0"
        />
      </div>
    </div>
  );
}

export default App;
