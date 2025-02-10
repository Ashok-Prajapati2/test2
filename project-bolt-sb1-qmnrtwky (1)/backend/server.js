const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in body parser

// Example route
app.use("/api/example", require("./routes/routes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
