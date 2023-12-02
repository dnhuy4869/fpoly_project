const express = require("express");
const cors = require("cors");
const sequelize = require("./app/database");
const initAPIRoutes = require("./routes/api");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
    console.log("Server is running");
})

sequelize.sync()
        .then(result => {
            console.log("Connected to database");
        })
        .catch(err => {
            console.log(err);
        })

initAPIRoutes(app);