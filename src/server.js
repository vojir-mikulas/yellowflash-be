//DEPENDENCIES
const express = require('express');
const app = express();

//ROUTES
const itemRoute = require("./routes/items")
const imageRoute = require("./routes/images")
const colorRoute = require("./routes/colors")
const sizeRoute = require("./routes/sizes")

//MIDDLEWARES
app.use("/public", express.static('public/img'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/item', itemRoute)
app.use('/images', imageRoute)
app.use("/colors", colorRoute)
app.use("/sizes", sizeRoute)
app.listen(3000)
