import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/user')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <Link to="/leaderboard" className="dashboard-link">Leaderboard</Link>
      </div>

      <div className="dashboard-card">
        <p><strong>Name:</strong> {data?.name}</p>
        <p><strong>Referral Code:</strong> {data?.referral}</p>
        <p><strong>Total Raised:</strong> ₹{data?.raised}</p>
      </div>

      <div className="rewards-section">
        <h2>🎁 Rewards & Unlockables</h2>
        <div className="rewards-grid">
          <div className="reward-item">🎯 T-Shirt @ ₹5000</div>
          <div className="reward-item">👕 Hoodie @ ₹10000</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;