const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const initAPIRoutes = require("./routes/api");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
    console.log("Server is running");
})

mongoose.connect("mongodb://127.0.0.1:27017/finalExams")
.then(() => {
    console.log(`Connected to database`);
})
.catch((err) => {
    console.log(err);
})

initAPIRoutes(app);