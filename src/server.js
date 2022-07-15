//DEPENDENCIES
const express = require('express');
const app = express();

//ROUTES
const itemRoute = require("./routes/items")
const imageRoute = require("./routes/images")


//MIDDLEWARES

app.use("/public",express.static('public/img'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/me", (req,res) =>{
    let fullUrl = req.protocol + '://' + req.get('host') ;
    res.json({url: fullUrl}).send;
})

app.use('/item',itemRoute)
app.use('/images', imageRoute)
app.listen(3000)
