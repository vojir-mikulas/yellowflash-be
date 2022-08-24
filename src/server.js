//DEPENDENCIES
require("dotenv").config()
const serverless = require('serverless-http')
const express = require('express');
const app = express();
const cors = require("cors")
//ROUTES
const apiRoute = require("./routes/api")


//MIDDLEWARES
app.use((req, res, next) => {
    if (req.originalUrl === '/stripe/webhook') {
        next();
    } else {
        express.json()(req, res, next);
    }
});
app.use("/.netlify/functions/public", express.static('public/img'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





app.use('/.netlify/functions/api',apiRoute)
module.exports.handler = serverless(app)