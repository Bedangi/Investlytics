export default function HoldingsHeader() {
  return (
    <div className="flex items-end justify-between">
      <div>
        <span className="text-xs text-orange-500 uppercase">
          Consolidated Portfolio
        </span>
        <h2 className="text-4xl font-bold">Holdings</h2>
      </div>

      <div className="flex gap-2 p-2 bg-gray-100 rounded-lg">
        <button className="px-4 py-2 text-blue-600 bg-white rounded">
         NASDAQ
        </button>
        <button className="px-4 py-2">Crypto</button>
        <button className="px-4 py-2">ETFs</button>
      </div>
    </div>
  );
}