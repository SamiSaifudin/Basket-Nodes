const express = require('express')

const {
    playerSignin,
    playerSignup
} = require('../controllers/playerController')

const router = express.Router()

router.post('/signin', playerSignin)

router.post('/signup', playerSignup)

module.exports = router 