export default function KPISection() {  
    return (
    <section>
      <h1 className="text-4xl font-bold">5753</h1>
    Equity, Net P\L, Balance, My holdings, Daily P\L, Buying Power, Yield
      <div className="grid gap-6 mt-6 md:grid-cols-3">
        <div className="p-6 border">Daily P&L: +$12,450</div>
        <div className="p-6 border">Buying Power: $412,000</div>
        <div className="p-6 border">Yield: 14.8%</div>
      </div>
    </section>
  );
}