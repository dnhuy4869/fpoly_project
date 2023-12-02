const userRoute = require("./user");

const initAPIRoutes = (app) => {
    
    app.use("/user", userRoute);
}

module.exports = initAPIRoutes;