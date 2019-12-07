const request = require('superagent')
const { Router } = require('express')
const url = require('../../Constants/urls')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const clientID = '7b76b39a4660b1faa24d'
const clientSecret = process.env.REACT_APP_SECRET
const scope = 'repo'

const router = new Router()

router.get('/home', (req, res) => {

    const requestToken = req.query.code

    request
        .post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&scope=${scope}&code=${requestToken}`)
        .then(response => {
            const accessToken = response.body.access_token
            res.redirect(`${url}/home?access_token=${accessToken}`)
        })
        .catch(err => console.log(err))
})

module.exports = router

