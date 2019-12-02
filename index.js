const express = require('express')
const app = express()

const clientID = '7b76b39a4660b1faa24d'
const clientSecret = '8a37d16ce8e276cd7bf1af81815f1047ba52802c'

const port = process.env.PORT || 4000

function onListen() {
  console.log(`Listening on port ${port}`)
}

app.listen(port, onListen)