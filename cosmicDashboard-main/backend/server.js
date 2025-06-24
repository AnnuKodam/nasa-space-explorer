require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const nasaRoutes = require("./routes/nasaRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api", nasaRoutes);

// Serve frontend static files
const clientPath = path.join(__dirname, "client");
app.use(express.static(clientPath));

// For any other route, serve the frontend (React's index.html)
app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
