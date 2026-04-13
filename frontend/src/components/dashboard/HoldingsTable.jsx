export default function HoldingsTable() {
  
  return (
    <div className="p-6 border">
      <h2 className="mb-4 text-xl font-bold">Holdings</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Start</th>
            <th>End</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            <td>A</td>
            <td>450</td>
            <td>C</td>
            <td>D</td>
          </tr>
       
      </tbody>
      </table>
    </div>
  );
}