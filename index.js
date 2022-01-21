const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB configuration
const db = require("./config/db");

//Routes
const usersRoutes = require('./routes/usersRoutes');

mongoose
    .connect(
        process.env.NODE_ENV === "production" ? db.mongoURI : db.mongoURIDev
    )
    .then(() => console.log("Mongodb Connected"))
    .catch((err) => console.log(err));


//Use Routes
app.use("/api", usersRoutes);

app.get("/api", (req, res) => {
    res.send("Server Running...");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});