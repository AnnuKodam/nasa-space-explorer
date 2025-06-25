require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nasaRoutes = require("./routes/nasaRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nasa-frontend-kqlr.onrender.com",
    ],
  })
);
app.use(express.json());

// Routes
app.use("/api", nasaRoutes);

// Generic Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
