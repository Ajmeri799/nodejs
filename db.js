const mongoose = require("mongoose");

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/hotel");
mongoose.connect(
  "mongodb+srv://joyasuvi:80admNIXHwydr5PB@cluster0.djd1y.mongodb.net/"
);
// Connection events//80admNIXHwydr5PB
const db = mongoose.connection;

// Event listener for successful connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

// Event listener for connection errors
db.on("error", (err) => {
  console.error("Error connecting to MongoDB server:", err);
});

// Event listener for disconnect
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB server");
});

// Gracefully closing the connection if Node.js process is terminated
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to app termination");
  process.exit(0);
});

module.exports = db;
