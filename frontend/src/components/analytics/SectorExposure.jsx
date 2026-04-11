export default function SectorExposure() {
  return (
    <div className="p-6 border rounded-xl">
      <h2 className="text-lg font-bold mb-4">Sector Exposure</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border">Tech 32%</div>
        <div className="p-4 border">Finance 21%</div>
        <div className="p-4 border">Healthcare 15%</div>
      </div>
    </div>
  );
}