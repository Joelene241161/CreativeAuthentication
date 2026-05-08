// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('hello World');
// });

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// const userRoutes = require('./routes/userRoutes');

// app.use('/api/users', userRoutes);

// app.listen(PORT, () => {
//     console.log('Server is running on port ${PORT}')
// });

// const authRoutes = require("./routes/auth");

// app.use("/auth", authRoutes);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API is running");
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});