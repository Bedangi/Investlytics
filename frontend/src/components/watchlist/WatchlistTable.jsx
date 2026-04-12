import { useEffect, useState } from "react";

export default function WatchlistTable({ category, exchange }) {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let url = `http://localhost:5000/api/watchlist?type=${category}&page=${page}`;

    if (exchange) {
      url += `&exchange=${exchange}`;
    }

  fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(res.data);
      setTotalPages(res.totalPages);
    })
    .catch(err => console.error("ERROR:", err));
}, [category, exchange, page]);

  return (
    <div className="b-full order wp-6 rounded-xl">

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-sm text-gray-500 border-b">
            <th className="px-4 py-3">Ticker</th>
            <th className="px-4 py-3">Start</th>
            <th className="px-4 py-3">End</th>
            <th className="px-4 py-3">High</th>
            <th className="px-4 py-3">Low</th>
            <th className="px-4 py-3">Return %</th>
            <th className="px-4 py-3">Volume</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const returnVal = item.total_return || 0;

            return (
              <tr key={index} className="border-b hover:bg-gray-50">
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

                <td className="px-4">
                  {item.volume?.toLocaleString() || "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div className="flex justify-center gap-2 mt-6">
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