const express = require('express')
const {getAllItems, getItemById, deleteItemById} = require("../services/items");

const router = express.Router();

//get all
router.get('/', async (req, res) => {
    //TODO nějakej ten dotaz do DB na nejvyšší cenu něčeho idk
    let lowestPrice = req.query.lowestPrice ? req.query.lowestPrice : undefined
    let highestPrice = req.query.highestPrice ? req.query.highestPrice : undefined
    let categories = req.query.categories ? req.query.categories.split(";") : []
    let colors = req.query.colors ? req.query.colors.split(";") : []
    let sizes = req.query.sizes ? req.query.sizes.split(";") : []
    res.json(await getAllItems(lowestPrice, highestPrice, categories, colors, sizes));
})
router.get('/:id', async (req, res) => {
    try {
        res.json(await getItemById(parseInt(req.params.id)));
    } catch {
        res.sendStatus(500)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await deleteItemById(parseInt(req.params.id))
        res.sendStatus(200);
    } catch {
        res.sendStatus(500)
    }
})

module.exports = router;