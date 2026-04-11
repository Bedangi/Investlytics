export default function HoldingsTable() {
  return (
    <div className="p-6 border">
      <h2 className="text-xl font-bold mb-4">Holdings</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Shares</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AAPL</td>
            <td>1240</td>
            <td>$180</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}