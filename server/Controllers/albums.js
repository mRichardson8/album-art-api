const express = require('express')
const Album = require('../Models/album.js')
const router = express.Router()

router.get('/' , async (req,res) => {
    try{
        let data = await Album.All
        res.status(200).send({data})
    } catch(err){
        res.status(500).json({err})
    }
})

router.get('/search', async (req,res) => {
    try{
        let data = await Album.findBySongs(req.query.songs)
        res.status(200).send({data})
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router
