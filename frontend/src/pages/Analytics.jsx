import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import YearlyBarChart from "../components/analytics/YearlyBarChart";
import MiniPieChart from "../components/analytics/MiniPieChart";
import MarketRadarChart from "../components/analytics/MarketRadarChart";
import TopRevenueChart from "../components/analytics/TopRevenueChart";
import { useState, useEffect } from "react";

function Metric({ label, value }) {
  return (
    <div className="p-3 rounded-lg bg-gray-50">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold">{value ?? "-"}</p>
    </div>
  );
}

export default function Analytics() {
  const [data, setData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const limit = 10;
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/analytics`)
      .then(res => res.json())
      .then(d => {
      setData(d.paginated || []);
      setTopData(d.top || []);
    });
  }, []);
  

  const paginatedData = data.slice(
    (page - 1) * limit,
    page * limit
  );

  const handleSearch = () => {
    fetch(`http://localhost:5000/api/analytics/search?ticker=${search}`)
      .then(res => res.json())
      .then(data => {
        console.log("SEARCH RESULT:", data);
        setResult(data);
      });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-8 space-y-12">

          {paginatedData.length > 0 && (
            <>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <YearlyBarChart data={paginatedData} />
                <div className="flex gap-4 mt-4">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(p => Math.max(p - 1, 1))}
                    className="px-3 py-1 border"
                  >
                    Prev
                  </button>

                  <span>Page {page}</span>

                  <button
                    disabled={page === 5}
                    onClick={() => setPage(p => p + 1)}
                    className="px-3 py-1 border"
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="max-w-sm lg:col-span-4">
                <TopRevenueChart data={topData} />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex gap-4">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter ticker..."
                  className="w-64 p-2 border rounded"
                />

                <button
                  onClick={handleSearch}
                  className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                  Search
                </button>
              </div>

            </div>
            
            {result && Object.keys(result).length > 0 && (
              <div className="mt-8 space-y-6">

                {/* 🔥 COMPANY HEADER */}
                <div className="flex items-center justify-between p-6 bg-white shadow rounded-2xl">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {result.company_details?.name}
                    </h2>
                    <p className="text-gray-500">
                      {result.company_details?.sector}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {search.toUpperCase()}
                  </div>
                </div>

                {/* 🔥 GRID SECTION */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* 📊 MARKET SENTIMENT */}
                  {result.market_sentiment && (
                    <div className="flex items-center justify-between p-6 bg-white shadow rounded-2xl">

                      {/* LEFT TEXT */}
                      <div className="grid grid-cols-2 gap-3 text-sm">

                        <Metric label="Market Cap" value={result.market_sentiment.market_cap} />
                        <Metric label="PE Ratio" value={result.market_sentiment.pe_ratio} />
                        <Metric label="Forward PE" value={result.market_sentiment.forward_pe_ratio} />
                        <Metric label="Beta" value={result.market_sentiment.beta} />
                        <Metric label="EPS" value={result.market_sentiment.eps} />
                        <Metric label="P/B Ratio" value={result.market_sentiment.price_to_book} />
                        <Metric label="Dividend Yield" value={result.market_sentiment.dividend_yield} />

                      </div>

                      {/* RIGHT RADAR CHART */}
                      <MarketRadarChart data={result.market_sentiment} />

                    </div>
                  )}

                  {/* 📈 CHART DETAILS */}
                  {result.chart_details && (
                    <div className="flex items-center justify-between p-6 bg-white shadow rounded-2xl">

                      {/* LEFT TEXT */}
                      <div className="space-y-3 text-sm">

                        <h3 className="mb-2 text-lg font-semibold">Chart Insights</h3>

                        <p>
                          <span className="font-medium">Entry/Exit:</span>{" "}
                          {result.chart_details.entry_exit_points?.join(", ")}
                        </p>

                        <p>
                          <span className="font-medium">Movement:</span>{" "}
                          {result.chart_details.movement?.join(", ")}
                        </p>

                        <p>
                          <span className="font-medium">Volume:</span>{" "}
                          {result.chart_details.volume}
                        </p>

                      </div>

                      {/* RIGHT PIE CHART */}
                      <MiniPieChart chartDetails={result.chart_details} />

                    </div>
                  )}

                  {/* 💰 COMPANY BENEFITS */}
                  {result.company_benefits && (
                    <div className="p-6 bg-white shadow rounded-2xl">
                      <h3 className="mb-4 text-lg font-semibold">Company Benefits</h3>

                      <p className="text-sm">
                        <span className="font-medium">Dividend:</span>{" "}
                        {result.company_benefits.dividend}
                      </p>
                    </div>
                  )}

                </div>

              </div>
            )}
            
          </>
          )}

        </main>
      </div>
    </div>
  );
}