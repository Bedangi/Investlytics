export default function AttributionTable() {
  return (
    <div className="p-6 border rounded-xl">
      <h2 className="text-lg font-bold mb-4">Attribution</h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Allocation</th>
            <th>Contribution</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AAPL</td>
            <td>12.4%</td>
            <td className="text-green-500">+4.2%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}