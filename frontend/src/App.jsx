import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Holdings from "./pages/Holdings";
import Analytics from "./pages/Analytics";
import WatchList from "./pages/Watchlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;