const deleteFavById = (req, res, fav)=>{
    let {id} = req.params
    // console.log(id)
    id = Number(id)
    const favDelete = fav.find(f => f.id === id)
    const filterFav = fav.filter(f => f.id !== id)
    fav.length = 0
    fav.push(...filterFav)
    // console.log(fav)
    res.json(favDelete)
}

module.exports = deleteFavById