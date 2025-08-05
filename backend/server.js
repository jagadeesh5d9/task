const express = require('express');
const cors = require('cors');
const  userRoutes = require('./routes/userRoutes.js');

const app = express();
app.use(cors());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));