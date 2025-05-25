const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectTodb = require("./db/db")
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes = require("./routes/maps.routes")
const rideRoutes = require("./routes/ride.routes")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connectTodb()

app.use(cors());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapRoutes)
app.use("/ride", rideRoutes)









module.exports = app;