import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Leaderboard.css'; // Make sure this file exists!

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/leaderboard')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setLeaders(res.data);
        } else {
          setError('Invalid data format from server.');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch leaderboard.');
      });
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>

      {error && <p className="error-text">{error}</p>}

      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount Raised</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={index}>
              <td>{leader.name}</td>
              <td>₹{leader.raised}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
