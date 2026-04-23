import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function MiniChartStrip({ data }) {

  if (!data || data.length === 0) return null;

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h3 className="mb-3 font-semibold">Top Holdings Comparison</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="ticker" />
          <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />

          <Tooltip formatter={(v) => v.toLocaleString()} />

          <Bar dataKey="return">
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.return > 0 ? "#22c55e" : "#ef4444"} />
            ))}
          </Bar>
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}