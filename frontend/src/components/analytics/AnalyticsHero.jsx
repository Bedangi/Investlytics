export default function AnalyticsHero() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <p className="text-xs uppercase text-orange-500">Total Net Worth</p>
        <h1 className="text-5xl font-bold">$1,248,590</h1>
        <p className="text-green-600">+12.4%</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p>Unrealized P&L</p>
          <h3>$142,400</h3>
        </div>
        <div>
          <p>Realized P&L</p>
          <h3>$38,210</h3>
        </div>
      </div>
    </div>
  );
}