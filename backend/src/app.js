const express = require('express')
const cors = require('cors')
const router = require('./routes/server')
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, ()=>console.log(`server on port ${PORT}`))