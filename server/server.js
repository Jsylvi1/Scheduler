
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

mongoose.connect('mongodb+srv://jsylvi1:8WRIVoTDD7Zo4u0F@cluster1.buyyios.mongodb.net/', {
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve API routes
app.use('/api/events', require('./routes/eventRoutes')); // Ensure this path is correct

// Serve static files from React build directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Route all other requests to React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://jsylvi1:8WRIVoTDD7Zo4u0F@cluster1.buyyios.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/