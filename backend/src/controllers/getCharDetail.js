const axios = require('axios')

const getCharDetail = (res, id) => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    //     .then(response => response.data)
    //     .then(data =>{
    //         const character = {
    //             id: data.id,
    //             name: data.name,
    //             gender: data.gender,
    //             image: data.image,
    //             species: data.species,
    //             status: data.status,
    //             origin: data.origin
    //         }
    //         // res.writeHead(200, { 'Content-Type': 'application/json' })
    //         // res.end(JSON.stringify(character))
    //         res.status(200).json(character)
    //     })
    //     .catch(err => {
    //         // res.writeHead(500, { 'Content-Type': 'text/plain' })
    //         // res.end({ message: err })
    //         res.status(500).json({ message: err })
    //     })
    const fn = async () => {
        try {
            const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.data
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                image: data.image,
                species: data.species,
                status: data.status,
                origin: data.origin
            }
            res.status(200).json(character)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    fn()
}

module.exports = getCharDetail