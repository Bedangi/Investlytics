export default function HoldingsSummary({ data }) {
  const totalAssets = data.length;
  const totalReturn = data.reduce(
    (sum, item) => sum + (item.total_return || 0),
    0
  );
  const isBullish = totalReturn >= 0;

  return (
    <div className="grid gap-6 md:grid-cols-4">
      <div className="p-6 border">
        <p>Total Assets</p>
        <h2>{totalAssets}</h2>
      </div>

      <div className="p-6 border">
        <p>Total Return </p>
        <h2 className={` ${
          isBullish ? "text-green-600" : "text-red-500"
        }`}>{totalReturn.toFixed(2)}%</h2>
      </div>

      <div className="p-6 border md:col-span-2">
        <p>Market Outlook</p>
        <h2 className={`${
          isBullish ? "text-green-600" : "text-red-500"
        }`}>{isBullish ? "Bullish" : "Bearish"}</h2>
      </div>
    </div>
  );
}