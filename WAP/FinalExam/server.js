/**
 * server.js
 * 
 * @author {}
 * @since {put-todays-date-here}
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const app = express();

 const homepageRoutes = require("./routes/home/index")

 app.set("views", path.join(__dirname, "views"));
 app.use("/static", express.static(path.join(__dirname, "assets")));
 // set up routes for home page
 app.use("", homepageRoutes)

 app.use("/fsap",homepageRoutes)

 app.use("/fsap/home",homepageRoutes)

 // set up route for error page not found 
 app.use((req, res) => {
    console.log(`Responding with the 404 Error page`);
    res.status(404);
    res.sendFile(path.join(__dirname, "views/error", "404.html"));
});

const PORT_NUMBER = 4000;
app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`);
});