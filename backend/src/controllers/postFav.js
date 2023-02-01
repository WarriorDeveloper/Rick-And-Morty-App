const postFav = (req, res, fav)=>{
    const {character} = req.body
    // console.log(character)
    fav.push(character)
    // console.log(fav)
    res.json(character)
}

module.exports = postFav