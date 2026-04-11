export default function WatchlistTable() {
  return (
    <div className="lg:col-span-8 p-6 border rounded-xl">
      <h3 className="text-lg font-bold mb-4">Active Watchlist</h3>

      <table className="w-full">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>Change</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AAPL</td>
            <td>$189</td>
            <td className="text-green-500">+2.31%</td>
            <td>
              <button className="bg-blue-500 text-white px-2 py-1 mr-2">Buy</button>
              <button className="border px-2 py-1">Sell</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}