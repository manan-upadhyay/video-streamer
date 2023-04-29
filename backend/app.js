const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const dataRoutes = require("./routes/data");

// Access environment variables
const port = process.env.PORT || 5000;
const mongodbUri = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use(dataRoutes);

// Error middleware
app.use((error, req, res, next) => {
  console.error(error.message);
  res.status(500).json({ message: "Server error" });
});

// Connect to MongoDB
mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
