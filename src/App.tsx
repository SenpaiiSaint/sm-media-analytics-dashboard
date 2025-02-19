import React, { useEffect, useState } from "react";
import { fetchSocialData, SocialData } from "./services/socialServices";
import SocialMetricCard from "./components/SocialMetricCard";
import AnalyticsChart from "./components/AnalyticsChart";

const App: React.FC = () => {
  const [metrics, setMetrics] = useState<SocialData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const data = await fetchSocialData();
        setMetrics(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadMetrics();
  }, []);

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Social Media Analytics Dashboard</h1> 
      <div className="cards-container">
        {metrics.map((metric) => (
          <SocialMetricCard key={metric.platform} data={metric} />
        ))}
      </div>
      <AnalyticsChart />
    </div>
  );
};

export default App;
