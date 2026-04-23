import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from "recharts";

export default function RadarCard({ item }) {

  const d = item.income || {};

  const chartData = [
    { k: "Return", v: d["total_return_%"] },
    { k: "Volume", v: d.avg_daily_volume },
    { k: "High", v: d.highest_price },
    { k: "Low", v: d.lowest_price },
    { k: "Volatile", v: d.volatility },
    { k: "Start", v: d.starting_price },
    { k: "End", v: d.ending_price }
  ];

  return (
    <div className="p-4 bg-white shadow rounded-xl">

      <h3 className="font-semibold">{item.ticker}</h3>

      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="k" />
          <Radar dataKey="v" fill="#3b82f6" />
        </RadarChart>
      </ResponsiveContainer>

    </div>
  );
}