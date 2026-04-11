import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import WatchlistHeader from "../components/watchlist/WatchlistHeader";
import MarketSummary from "../components/watchlist/MarketSummary";
import WatchlistTable from "../components/watchlist/WatchlistTable";

export default function Watchlist() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8 space-y-10">
          <WatchlistHeader />

          <div className="grid lg:grid-cols-12 gap-6">
            <MarketSummary />
            <WatchlistTable />
          </div>

        </main>
      </div>
    </div>
  );
}