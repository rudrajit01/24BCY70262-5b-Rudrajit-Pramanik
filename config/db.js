const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the URI from .env file
    const uri = process.env.MONGO_URI;
    console.log('Connecting to MongoDB with URI:', uri);
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;