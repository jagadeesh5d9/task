const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.json({
    name: 'Jagadeesh Dasari',
    referral: 'jagadeesh2025',
    raised: 7800
  });
});

router.get('/leaderboard', (req, res) => {
  res.json([
    { name: 'Rahul', raised: 15000 },
    { name: 'Ananya', raised: 12000 },
    { name: 'Jagadeesh', raised: 8000 }
  ]);
});

module.exports = router;