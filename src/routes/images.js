//DEPENDENCIES
const {deleteImageById,getAllImages} = require('../services/images')
const express = require('express')
//HELPERS
const {upload} = require("../helpers/storage")
const {ensureExistsAndDelete, deleteImage} = require("../helpers/filesystem")
const fs = require("fs");
const router = express.Router();

router.get('/', async(req,res)=>{
    res.json(await getAllImages())
})

router.post("/",upload.single('image'),(req,res)=>{
    res.send( `Image uploaded ${req.file.originalname}`);
})

router.delete("/:id",async(req,res)=>{
   try{
    await deleteImage(req.body.id)
   } catch{
       res.status(500).send();
   }
    res.status(200).send();
})

module.exports = router;