import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import HoldingsHeader from "../components/holdings/HoldingsHeader";
import HoldingsSummary from "../components/holdings/HoldingsSummary";
import HoldingsTable from "../components/holdings/HoldingsTable";
import { useState } from "react";

export default function Holdings() {
  const [type, setType] = useState("all");
  const [data, setData] = useState([]);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-10 space-y-10">
          <HoldingsHeader active={type} onFilterChange={setType} />
          <HoldingsSummary data={data}/>
          <HoldingsTable type={type} setParentData={setData}/>
        </main>
      </div>
    </div>
  );
}