const mongoose = require("mongoose");
const dbConfig = require("./config/dbConfig"); // Pfad zur dbConfig.js

async function testConnection() {
    console.log("🔄 Connecting to MongoDB Cluster...");

    try {
        // Verbindung mit der MongoDB-URI aus dbConfig.js herstellen
        await mongoose.connect(dbConfig.mongoURI);
        console.log("✅ MongoDB connection successful!");

        // Status anzeigen
        const dbStatus = mongoose.connection.readyState; // 1 = connected
        console.log(`📊 Connection status: ${dbStatus} (1 = connected)`);

    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
    } finally {
        // Verbindung schließen
        await mongoose.connection.close();
        console.log("🔒 MongoDB connection closed.");
    }
}

testConnection();
