const {Router} = require('express')
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const deleteFavById = require('../controllers/deleteFavById')
const getFav = require('../controllers/getFav')
const postFav = require('../controllers/postFav')
const router = Router()

router.get('/rickandmorty/onsearch/:id', (req, res)=>{
    const {id} = req.params
    getCharById(res, Number(id))
})

router.get('/rickandmorty/detail/:id', (req, res)=>{
    const {id} = req.params
    getCharDetail(res, Number(id))
})

let fav = []

router.get('/rickandmorty/fav', (req, res)=>{
    getFav(res, fav)
})

router.post('/rickandmorty/fav', (req, res)=>{
    postFav(req, res, fav)
})

router.delete('/rickandmorty/fav/:id', (req, res)=>{
    deleteFavById(req, res, fav)
})

module.exports = router