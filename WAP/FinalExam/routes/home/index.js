const express = require("express")

const path = require("path")

const homepageRouter = express.Router()


homepageRouter.get("", (req,res)=>{

   res.sendFile(path.join(__dirname, "../../views/home", "index.html"));
})

module.exports = homepageRouter