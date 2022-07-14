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

router.post('/create', async (req,res) => {
    try{
        let albumData = req.body.newAlbum
        let result = await Album.createAlbum(albumData)
        res.status(204).send()
    }catch(err){
        res.status(500).json({err})
    }
})

router.delete('/', async (req,res) => {
    try{
        let albumToDelete = req.body.album
        let result = await Album.deleteAlbum(albumToDelete)
        res.status(204).send()
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router
