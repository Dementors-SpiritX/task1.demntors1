import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

// Attempt to connect
connectDB();

// Handle unexpected MongoDB disconnections
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB Disconnected. Attempting to reconnect...");
});
