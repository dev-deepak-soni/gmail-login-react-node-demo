const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb://0.0.0.0:27017/google-login-demo';

// Establish the MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
