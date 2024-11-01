// Necessary modules for the server
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Creating an express app instance that uses cors and express.json
const app = express();
// cors is for cross-origin resource sharing
app.use(cors());
// express.json is for parsing JSON data
app.use(express.json());

const PORT = process.env.PORT || 5000;

// A connection to the mongo database is made
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected."))
    .catch((error) => console.log(error));

app.listen(PORT, () => console.log("Server running on port ${PORT}"));

const authRoutes = require("./Routes/Auth");
// Using the auth routes for any incoming requests to the '/api/auth' endpoint
app.use("/api/auth", authRoutes);
