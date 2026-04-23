import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function TopRevenueChart({ data }) {

  if (!data.length) return null;

  return (
    <div className="p-3 bg-white shadow rounded-xl">
      <h3 className="mb-3 font-semibold">Top Revenue (Y2)</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          
          <XAxis type="number" tickFormatter={(value) => value.toLocaleString()} />
          <YAxis dataKey="ticker" type="category" width={100} tick={{ fontSize: 14 }} />
          <Tooltip />

          <Bar dataKey="y2" fill="#22c55e" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}