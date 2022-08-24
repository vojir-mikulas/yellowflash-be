const express = require('express')
const {getAllCategories, getCategoryById} = require("../services/categories");
const itemRoute = require("./items");
const orderRoute = require("./order");
const discountRoute = require("./discountCode");
const shippingMethodRoute = require("./shippingMethod");
const categoryRoute = require("./categories");
const imageRoute = require("./images");
const colorRoute = require("./colors");
const sizeRoute = require("./sizes");
const stripeRoute = require("./stripe");


const router = express.Router();

router.use('/item', itemRoute)
router.use('/order',orderRoute)
router.use('/discountCode',discountRoute)
router.use('/shipping',shippingMethodRoute)
router.use('/categories', categoryRoute)
router.use('/images', imageRoute)
router.use("/colors", colorRoute)
router.use("/sizes", sizeRoute)
router.use("/stripe",stripeRoute)

module.exports = router;