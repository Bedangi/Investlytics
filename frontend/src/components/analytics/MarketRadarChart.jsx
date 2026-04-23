import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

export default function MarketRadarChart({ data }) {

  if (!data) return null;

  // 🔥 normalize function
  const normalize = (value, max) =>
    value && max ? (value / max) * 100 : 0;

  const chartData = [
    {
      metric: "PE",
      value: normalize(data.pe_ratio, 50)
    },
    {
      metric: "FPE",
      value: normalize(data.forward_pe_ratio, 50)
    },
    {
      metric: "Beta",
      value: normalize(data.beta, 2)
    },
    {
      metric: "EPS",
      value: normalize(data.eps, 200)
    },
    {
      metric: "P/B",
      value: normalize(data.price_to_book, 10)
    },
    {
      metric: "Div",
      value: normalize(data.dividend_yield, 1)
    }
  ];

  return (
    <ResponsiveContainer width={250} height={200}>
      <RadarChart data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <Radar dataKey="value" fill="#3b82f6" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}