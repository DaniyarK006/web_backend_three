require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const blogRoutes = require('./routes/blogRoutes');
const { errorHandler, notFound } = require('./middleware/error_handler');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// API Routes
app.use('/api', blogRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Blog API Server',
    status: 'running',
    endpoints: '/api'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n Server running on port ${PORT}`);
  console.log(` API: http://localhost:${PORT}/api`);
  console.log(` Frontend: http://localhost:${PORT}/index.html\n`);
});

module.exports = app;