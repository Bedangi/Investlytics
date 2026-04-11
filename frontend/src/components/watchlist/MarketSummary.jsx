export default function MarketSummary() {
  return (
    <div className="lg:col-span-4 flex flex-col gap-6">
      <div className="p-6 border rounded-xl">
        <h3 className="font-bold">S&P 500</h3>
        <p className="text-green-600">+1.24%</p>
      </div>

      <div className="p-6 border rounded-xl">
        <h3 className="font-bold">NASDAQ</h3>
        <p className="text-red-500">-0.42%</p>
      </div>
    </div>
  );
}