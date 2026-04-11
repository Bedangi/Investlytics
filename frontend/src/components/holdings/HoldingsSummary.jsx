export default function HoldingsSummary() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <div className="p-6 border">
        <p>Total Value</p>
        <h2>$1,428,940</h2>
      </div>

      <div className="p-6 border">
        <p>Realized P&L</p>
        <h2>$84,200</h2>
      </div>

      <div className="p-6 border md:col-span-2">
        <p>Market Outlook</p>
        <h2>Bullish</h2>
      </div>
    </div>
  );
}