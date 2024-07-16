const Game = require('../models/gameModel')
const mongoose = require('mongoose')

// get all games
const getAllGames = async (req, res) => {
    const games = await Game.find({}).sort({createdAt: -1})
    
    res.status(200).json(games)
}

// get a single game 
const getGame = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {return res.status(400).json({error: "Game does not exist!"})}
    
    const game = await Game.findById(id)

    if (!game){return res.status(400).json({error: "Game does not exist!"})}
        
    res.status(200).json(game)
}

// create a new game 
const createGame = async (req, res) => {
    const {title, points, rebounds, assists, fg} = req.body
    try {
        const game = await Game.create({title, points, rebounds, assists, fg})
        res.status(200).json(game)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}
 
// update a game 
const updateGame = async (req, res) => {
    const {title, points, rebounds, assists, fg} = req.body

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {return res.status(400).json({error: "Game does not exist!"})}

    const game = await Game.findOneAndUpdate({_id: id}, req.body)
    
    if (!game) {return res.status(400).json({error: "Game does not exist!"})}
        
    res.status(200).json(game)
}

// delete a game 
const deleteGame = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {return res.status(400).json({error: "Game does not exist!"})}

    const game = await Game.findOneAndDelete({_id: id})
    
    if (!game){return res.status(400).json({error: "Game does not exist!"})}
        
    res.status(200).json(game)
}

module.exports = {
    createGame,
    getAllGames,
    getGame,
    updateGame,
    deleteGame
}