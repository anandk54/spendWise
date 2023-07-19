const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

// .env for port
dotenv.config();

// connect database
connectDB();

//rest object
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// user routes
app.use("/users", require("./routes/userRoute"));
// transaction routes
app.use("/transactions", require("./routes/transactionRoutes"));

// port
const PORT = process.env.PORT || 5000;

// listen server
app.listen(PORT, console.log(`app is running on port ${PORT}`));
