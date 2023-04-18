// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

// Load environment variables
dotenv.config();

// Initialize the express app
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Function to connect
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB: ', err);
        process.exit(1);
    }
}

// Connect to DB
connectToDatabase();

// Start 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Use the user routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api', protectedRoutes);
