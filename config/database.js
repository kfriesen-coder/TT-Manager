/*
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongoDBUser:rzf3v0aCmz4r8Nnn@cluster1.hkaoo.mongodb.net/TTManager?retryWrites=true&w=majority&appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
*/

module.exports = {
    mongoURI: "mongodb+srv://mongoDBUser:rzf3v0aCmz4r8Nnn@cluster1.hkaoo.mongodb.net/TTManager?retryWrites=true&w=majority&appName=Cluster1"
};