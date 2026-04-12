export default function Sidebar() {
  return (
    <aside className="w-64 h-screen p-6 border-r">
      <h2 className="mb-6 text-lg font-bold">Portfolio</h2>

      <nav className="flex flex-col gap-3">
        <a href="/">Overview</a>
        <a href="/holdings">Holdings</a>
        <a href="/analytics">Analytics</a>
        <a href="/watchlist">WatchList</a>
      </nav>
    </aside>
  );
}