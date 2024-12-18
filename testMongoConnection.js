const mongoose = require("mongoose");

// MongoDB connection string (replace with your own connection URI)
const dbURI = "mongodb://localhost:27017/TTManager"; // Example for local DB
// For MongoDB Atlas: "mongodb+srv://username:password@cluster.mongodb.net/TTManager"

async function testConnection() {
    try {
        // Connect to MongoDB
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("✅ MongoDB connection successful!");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
    } finally {
        mongoose.connection.close(); // Close the connection after testing
    }
}

testConnection();