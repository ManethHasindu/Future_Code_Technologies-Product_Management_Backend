// This file sets up the connection to MongoDB using Mongoose.

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);     // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
