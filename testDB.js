const mongoose = require("mongoose");

// MongoDB Cluster connection string (mit Benutzer, Passwort und Cluster-URI)
const dbURI = "mongodb+srv://mongoDBUser:rzf3v0aCmz4r8Nnn@cluster1.hkaoo.mongodb.net/TTManager?retryWrites=true&w=majority&appName=Cluster1";

async function testConnection() {
    console.log("🔄 Connecting to MongoDB Cluster...");

    try {
        // Verbindung zu MongoDB herstellen
        await mongoose.connect(dbURI);
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
