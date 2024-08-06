const Player = require('../models/playerModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')



const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

const playerSignin = async (req, res) => {
    const {username, password} = req.body

    try {
        const player = await Player.signin(username, password)
        const token = createToken(player._id)
        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const playerSignup = async (req, res) => {
    const {username, password} = req.body

    try {
        const player = await Player.signup(username, password)
        const token = createToken(player._id)
        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = {
    playerSignin,
    playerSignup
}