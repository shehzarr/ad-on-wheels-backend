const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import your models
const User = require('./models/User');
const CarInfo = require('./models/CarInfo');
const Brand = require('./models/Brand');
const AdAttachment = require('./models/AdAttachment');
