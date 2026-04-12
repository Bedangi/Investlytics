import { useState } from "react";

export default function WatchlistHeader({ onCategoryChange, onExchangeChange }) {
  const [activeCategory, setActiveCategory] = useState("Stock");
  const [activeExchange, setActiveExchange] = useState("NASDAQ");
   
  const categories = ["Crypto", "Stock", "ETF", "Forex"];
  const exchanges = ["NASDAQ", "NIFTY50"];

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    onCategoryChange(cat);

    if (cat !== "stock") {
      onExchangeChange(null);
    }
  };

  const handleExchange = (ex) => {
    setActiveExchange(ex);
    onExchangeChange(ex);
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 uppercase">Market Overview</p>
          <h2 className="text-3xl font-bold">Watchlist</h2>
          <p className="text-gray-500">
            Select Assets to add to Holdings.
          </p>
        </div>

        {/* <input
          placeholder="Search..."
          className="w-64 p-2 border rounded"
        /> */}
      </div>

      <div className="flex gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {activeCategory === "Stock" && (
        <div className="flex gap-4">
          {exchanges.map((ex) => (
            <button
              key={ex}
              onClick={() => handleExchange(ex)}
              className={`px-3 py-1 rounded ${
                activeExchange === ex
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {ex.toUpperCase()}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}