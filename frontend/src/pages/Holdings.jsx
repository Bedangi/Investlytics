import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import HoldingsHeader from "../components/holdings/HoldingsHeader";
import HoldingsSummary from "../components/holdings/HoldingsSummary";
import HoldingsTable from "../components/holdings/HoldingsTable";
import TableFooter from "../components/holdings/TableFooter";

export default function Holdings() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-10 space-y-10">
          <HoldingsHeader />
          <HoldingsSummary />
          <HoldingsTable />
          <TableFooter />
        </main>
      </div>
    </div>
  );
}