import { useEffect, useState } from "react";
export default function HoldingsTable({ type }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/api/user/holdings?email=${user.email}`)
      .then(res => res.json())
      .then(async (tickers) => {

        const res = await fetch("http://localhost:5000/api/user/holdingsData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ tickers, page, type: type === "all" ? null : type })
      });
      
      const data = await res.json();
      setData(Array.isArray(data) ? data : data.data || []);
      setTotalPages(data.totalPages || 1);
      });

  }, [page, type]);
  
  return (
    <div className="b-full order wp-6 rounded-xl">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr className="text-sm font-bold borderlack-b text-b-500">
            <th className="px-4 py-3">Ticker</th>
            <th className="px-4 py-3">Start</th>
            <th className="px-4 py-3">End</th>
            <th className="px-4 py-3">High</th>
            <th className="px-4 py-3">Low</th>
            <th className="px-4 py-3">Return %</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => {
            const returnVal = item.total_return || 0;
          return (
            <tr key={i}>
              <td className="px-4 py-3 font-semibold">{item.ticker}</td>
              <td className="px-4">${item.starting_price?.toFixed(2)}</td>
              <td className="px-4">${item.ending_price?.toFixed(2)}</td>
              <td className="px-4">${item.highest_price?.toFixed(2)}</td>
              <td className="px-4">${item.lowest_price?.toFixed(2)}</td>

              <td className={`px-4 font-semibold ${
                returnVal >= 0 ? "text-green-600" : "text-red-500"
              }`}>
                {returnVal.toFixed(2)}%
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          className="px-3 py-1 border"
        >
          Prev
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 border"
        >
          Next
        </button>
      </div>
    </div>
  );
}