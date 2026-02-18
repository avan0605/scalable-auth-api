const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/authdb");

app.use("/api", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
