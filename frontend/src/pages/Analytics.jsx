import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import AnalyticsHero from "../components/analytics/AnalyticsHero";
import GrowthChart from "../components/analytics/GrowthChart";
import BenchmarkCard from "../components/analytics/BenchmarkCard";
import SectorExposure from "../components/analytics/SectorExposure";
import AttributionTable from "../components/analytics/AttributionTable";

export default function Analytics() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8 space-y-12">
          <AnalyticsHero />

          <div className="grid lg:grid-cols-12 gap-6">
            <GrowthChart />
            <BenchmarkCard />
          </div>

          <SectorExposure />
          <AttributionTable />
        </main>
      </div>
    </div>
  );
}