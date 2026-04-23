export default function GainersLosers({ data }) {

  return (
    <div className="grid grid-cols-2 gap-6">

      <div className="p-4 bg-white shadow rounded-xl">
        <h3 className="mb-2 font-semibold text-green-600">Top Gainers</h3>
        {data.gainers?.map((g, i) => (
          <p key={i}>{g.ticker}</p>
        ))}
      </div>

      <div className="p-4 bg-white shadow rounded-xl">
        <h3 className="mb-2 font-semibold text-red-600">Top Losers</h3>
        {data.losers?.map((l, i) => (
          <p key={i}>{l.ticker}</p>
        ))}
      </div>

    </div>
  );
}