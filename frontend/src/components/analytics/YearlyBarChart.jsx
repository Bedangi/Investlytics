import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

export default function YearlyBarChart({ data }) {

  if (!data.length) return null;


  return (
    <div className="p-4 border rounded-xl">

      <h3 className="mb-3 font-semibold">
        Y1 vs Y2 Comparison
      </h3>

      <div className="overflow-x-auto">

        <div style={{ width: `${data.length * 70}px` }}>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              
              <XAxis
                dataKey="ticker"
                angle={-45}
                textAnchor="end"
                interval={0}
                height={100}
              />

              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />

              <Bar dataKey="y1" fill="#3b82f6" />
              <Bar dataKey="y2" fill="#22c55e" />

            </BarChart>
        </ResponsiveContainer>

        </div>

      </div>
    </div>
  );
}