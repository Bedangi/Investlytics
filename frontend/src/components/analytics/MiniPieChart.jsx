import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function MiniPieChart({ chartDetails }) {

  if (!chartDetails) return null;

  const entry = chartDetails.entry_exit_points?.[0] || 0;
  const exit = chartDetails.entry_exit_points?.[1] || 0;

  const movement = chartDetails.movement || [];

  const change = Math.abs(exit - entry);

  const movementRange =
    Math.max(...movement, 0) - Math.min(...movement, 0);

  const stability = entry !== 0 ? 1 / entry : 0;

  const data = [
    { name: "Change", value: change },
    { name: "Volatility", value: movementRange },
    { name: "Stability", value: stability }
  ].filter(d => d.value > 0);

  if (!data.length) return null;

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

  return (
    <ResponsiveContainer width={150} height={150}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={20}
          outerRadius={60}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}