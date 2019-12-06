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

    // The req.query object has the query params that were sent to this route.
    const requestToken = req.query.code
    
    request
        .post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`)
        // Set the content type header, so that we get the response in JSON
        .then(response => {
            const accessToken = response.body.access_token
            // redirect the user to the home page, along with the access token
            res.send(accessToken)
            res.redirect(`${url}/home`)
        })
        .catch(err => console.log(err))
})

module.exports = router

