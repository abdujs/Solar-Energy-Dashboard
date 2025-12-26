import React from "react";

interface RegionAnalyticsCardProps {
  region: string;
  capacity: number;
  generation: number;
  avgGrowth: string | number;
  topCountry: string;
  topCountryCapacity: number;
}

const RegionAnalyticsCard: React.FC<RegionAnalyticsCardProps> = ({ region, capacity, generation, avgGrowth, topCountry, topCountryCapacity }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full mb-6">
    <div className="bg-linear-to-br from-brand via-warning to-orange rounded-xl shadow-glow p-4 flex flex-col items-center justify-center">
      <div className="text-lg md:text-xl font-bold font-title text-dark text-center">Total {region} Capacity</div>
      <div className="text-2xl md:text-4xl font-extrabold mt-2 font-title text-dark drop-shadow text-center">{capacity ? capacity.toLocaleString() : '--'} GW</div>
      <div className="text-xs md:text-sm mt-2 font-body text-muted text-center">Installed solar capacity in {region}</div>
    </div>
    <div className="bg-linear-to-br from-accent via-success to-green rounded-xl shadow-glowYellow p-4 flex flex-col items-center justify-center">
      <div className="text-lg md:text-xl font-bold font-title text-light text-center">Total {region} Generation</div>
      <div className="text-2xl md:text-4xl font-extrabold mt-2 font-title text-light drop-shadow text-center">{generation ? generation.toLocaleString() : '--'} TWh</div>
      <div className="text-xs md:text-sm mt-2 font-body text-muted text-center">Annual solar energy produced in {region}</div>
    </div>
    <div className="bg-linear-to-br from-error via-purple to-accent rounded-xl shadow-glowBlue p-4 flex flex-col items-center justify-center">
      <div className="text-lg md:text-xl font-bold font-title text-light text-center">Avg. Capacity Growth</div>
      <div className="text-2xl md:text-4xl font-extrabold mt-2 font-title text-light drop-shadow text-center">{avgGrowth}%</div>
      <div className="text-xs md:text-sm mt-2 font-body text-muted text-center">Average annual growth rate in {region}</div>
    </div>
    <div className="bg-linear-to-br from-purple via-brand to-warning rounded-xl shadow-glowBlue p-4 flex flex-col items-center justify-center">
      <div className="text-lg md:text-xl font-bold font-title text-light text-center">Top Country by Capacity</div>
      <div className="text-2xl md:text-4xl font-extrabold mt-2 font-title text-brand drop-shadow text-center">{topCountry || '--'}</div>
      <div className="text-xs md:text-sm mt-2 font-body text-muted text-center">{topCountryCapacity ? `${topCountryCapacity} GW` : '--'} capacity</div>
    </div>
  </div>
);

export default RegionAnalyticsCard;
