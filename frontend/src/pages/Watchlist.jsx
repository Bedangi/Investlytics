import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import { useState } from "react";
import WatchlistHeader from "../components/watchlist/WatchlistHeader";
import WatchlistTable from "../components/watchlist/WatchlistTable";

export default function Watchlist() {
  const mapCategory = {
  Crypto: "crypto",
  Stock: "stock",
  ETF: "etf",
  Forex: "forex"
};
const [category, setCategory] = useState("Stock");
const [exchange, setExchange] = useState("NASDAQ");
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="w-full p-8 mx-auto space-y-8 max-w-7xl">
          <WatchlistHeader onCategoryChange={setCategory} onExchangeChange={setExchange}/>

          <div className="grid gap-6 ">
            <WatchlistTable category={mapCategory[category]} exchange={exchange}/>
          </div>

        </main>
      </div>
    </div>
  );
}