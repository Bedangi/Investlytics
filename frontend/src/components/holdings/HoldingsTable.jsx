export default function HoldingsTable() {
  return (
    <div className="border rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>Market Price</th>
            <th>Value</th>
            <th>P&L</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AAPL</td>
            <td>450</td>
            <td>$142</td>
            <td>$189</td>
            <td>$85,243</td>
            <td className="text-green-500">+33%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}