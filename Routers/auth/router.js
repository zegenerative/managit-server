const request = require('superagent')
const { Router } = require('express')
const url = require('../../Constants/urls')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const clientID = '7b76b39a4660b1faa24d'
const clientSecret = process.env.REACT_APP_SECRET

const router = new Router()

router.get('/home', (req, res) => {

    const requestToken = req.query.code
    const scope = 'repo'

    request
        .post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}&scope=${scope}`)
        .then(response => {
            const accessToken = response.body.access_token
            res.redirect(`${url}/home?access_token=${accessToken}`)
        })
        .catch(err => console.log(err))
})

module.exports = router

