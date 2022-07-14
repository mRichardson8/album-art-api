const express = require('express')
const Album = require('../Models/album.js')
const router = express.Router()

router.get('/' , async (req,res) => {
    try{
        let data = await Album.All
        res.status(200).json({data})
    } catch(err){
        res.status(500).json({err})
    }
})

module.exports = router
