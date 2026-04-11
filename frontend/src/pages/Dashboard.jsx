import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import KPISection from "../components/dashboard/KPISection";
import ChartSection from "../components/dashboard/ChartSection";
import AllocationSection from "../components/dashboard/AllocationSection";
import HoldingsTable from "../components/dashboard/HoldingsTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-8 space-y-10">
          <KPISection />
          <div className="grid lg:grid-cols-12 gap-8">
            <ChartSection />
            <AllocationSection />
          </div>
          <HoldingsTable />
        </div>
      </main>
    </div>
  );
}