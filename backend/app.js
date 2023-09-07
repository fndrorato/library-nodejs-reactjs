const express = require('express');
const dotenv = require("dotenv").config();
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use("/api/books", require("./routes/bookRoutes"))

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));