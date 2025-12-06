require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Optimization = require('./models/Optimization');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const scrapeRoutes = require('./routes/scrapeRoutes');   // <--- ADD THIS
const optimizeRoutes = require('./routes/optimizeRoutes');
app.use('/api/scrape', scrapeRoutes);                    // <--- ADD THIS
app.use('/api/optimize', optimizeRoutes);
const historyRoutes = require('./routes/historyRoutes');
app.use('/api/history', historyRoutes);

app.get('/', (req, res) => {
  res.send('SalesDuo Optimizer backend running');
});

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('DB connected & synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('DB connection failed:', err);
  }
})();
