import RadarCard from "./RadarCard";

export default function HoldingsGrid({ data }) {

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {data.map((item, i) => (
        <RadarCard key={i} item={item} />
      ))}

    </div>
  );
}