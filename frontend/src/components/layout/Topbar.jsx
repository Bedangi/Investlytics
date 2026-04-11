export default function Topbar() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">The Financial Architect</h1>
      <input placeholder="Search..." className="border p-2 rounded" />
    </header>
  );
}