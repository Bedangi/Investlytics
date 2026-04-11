export default function TableFooter() {
  return (
    <div className="flex justify-between mt-4">
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-blue-500 text-white">1</button>
        <button className="px-3 py-1">2</button>
      </div>

      <p className="text-sm">Showing 1-4 of 14</p>
    </div>
  );
}