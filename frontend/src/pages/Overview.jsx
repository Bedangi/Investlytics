import { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import MiniChartStrip from "../components/overview/MiniChartStrip";
import AssetPie from "../components/overview/AssetPie";
import HoldingsGrid from "../components/overview/HoldingsGrid";
import GainersLosers from "../components/overview/GainersLosers";

export default function Overview() {
  
  const user = JSON.parse(localStorage.getItem("user"));

  const [topHoldings, setTopHoldings] = useState([]);
  const [distribution, setDistribution] = useState([]);
  const [holdingsData, setHoldingsData] = useState([]);
  const [gainersLosers, setGainersLosers] = useState({});

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:5000/api/overview/top-holdings?email=${user.email}`)
      .then(res => {
      return res.json();
    })
    .then(data => {
      console.log("TOP HOLDINGS DATA:", data);
      setTopHoldings(data);
    })
    .catch(err => console.error("TOP HOLDINGS ERROR:", err));

    fetch(`http://localhost:5000/api/overview/distribution?email=${user.email}`)
    .then(res => {
      return res.json();
    })
    .then(data => {

      if (!Array.isArray(data)) {
        return setDistribution([]);
      }

      const formatted = data.map(d => ({
        name: d._id,
        value: d.count
      }));

      setDistribution(formatted);
    })
    .catch(err => console.error("DISTRIBUTION ERROR:", err));  
    
    fetch(`http://localhost:5000/api/overview/holdings-details?email=${user.email}`)
      .then(res => {
      return res.json();
    })
    .then(data => {
      setHoldingsData(data);
    })
    .catch(err => console.error("HOLDINGS ERROR:", err));
    
    fetch(`http://localhost:5000/api/overview/gainers-losers`)
      .then(res => {
      return res.json();
    })
    .then(data => {
      setGainersLosers(data);
    })
    .catch(err => console.error("GAINERS ERROR:", err));

  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <Topbar />
        
        <div className="p-8 space-y-10">

          <MiniChartStrip data={topHoldings} />

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <AssetPie data={distribution} />
            </div>

            <div className="lg:col-span-8">
              <GainersLosers data={gainersLosers} />
            </div>
          </div>

          <HoldingsGrid data={holdingsData} />
        </div>
      </main>
    </div>
  );
}