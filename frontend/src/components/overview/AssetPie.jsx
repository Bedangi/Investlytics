import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function AssetPie({ data }) {

  if (!data || data.length === 0) return null;

  const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h3 className="mb-3 font-semibold">Asset Distribution</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            formatter={(value, name) => [`${value}`, name]}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
          />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}