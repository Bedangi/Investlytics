import { useState } from "react";
export default function HoldingsHeader({ onFilterChange }) {
  const filters = ["all", "stock", "etf", "crypto", "forex"];

  const [active, setActive] = useState("all");

  const handleClick = (f) => {
    setActive(f);
    onFilterChange(f);
  };
  
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
      <div>
        <div className="text-xs text-orange-500 uppercase">
          Consolidated Portfolio
        </div>
        <h2 className="text-4xl font-bold">Holdings</h2>
      </div>

      <div className="flex gap-2 p-2 bg-gray-100 rounded-lg">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={`px-4 py-2 rounded ${
            active === f
              ? "bg-blue-600 text-white"   // 🔥 ACTIVE
              : "bg-gray-200 text-black"  // default
          }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}