export default function Sidebar() {
  return (
    <aside className="w-64 h-screen border-r p-6">
      <h2 className="font-bold text-lg mb-6">Portfolio</h2>

      <nav className="flex flex-col gap-3">
        <a href="/">Overview</a>
        <a href="/holdings">Holdings</a>
        <a href="/analytics">Analytics</a>
        <a href="/watchlist">WatchList</a>
      </nav>
    </aside>
  );
}