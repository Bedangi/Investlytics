export default function HoldingsHeader() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <span className="text-xs uppercase text-orange-500">
          Consolidated Portfolio
        </span>
        <h2 className="text-4xl font-bold">Holdings</h2>
      </div>

      <div className="flex gap-2 bg-gray-100 p-2 rounded-lg">
        <button className="px-4 py-2 bg-white text-blue-600 rounded">
          Equity
        </button>
        <button className="px-4 py-2">MF</button>
        <button className="px-4 py-2">Bonds</button>
      </div>
    </div>
  );
}