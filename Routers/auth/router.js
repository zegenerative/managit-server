const request = require('superagent')

const { Router } = require('express')
const clientID = '7b76b39a4660b1faa24d'
const clientSecret = '8a37d16ce8e276cd7bf1af81815f1047ba52802c'

const router = new Router()

router.get('/home', (req, res) => {

    // The req.query object has the query params that were sent to this route.
    const requestToken = req.query.code
    
    request
        .post(`https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`)
        // Set the content type header, so that we get the response in JSON
        .set('Accept', 'application/json')
        .then(response => {
            const accessToken = response.data.access_token
            console.log(response.data)
            // redirect the user to the home page, along with the access token
        res.redirect(`/home.html?access_token=${accessToken}`)
        })
})

module.exports = router

