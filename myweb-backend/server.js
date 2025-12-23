const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Synchronization
sequelize.sync()
  .then(() => {
    console.log('Database connected and synchronized successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Personal Portfolio API.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
