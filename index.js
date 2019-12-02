const express = require('express')
const app = express()

const authRouter = require('./Routers/auth/router')

app.use(authRouter)

const port = process.env.PORT || 4000

function onListen() {
  console.log(`Listening on port ${port}`)
}

app.listen(port, onListen)