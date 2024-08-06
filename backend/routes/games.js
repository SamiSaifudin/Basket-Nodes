const express = require('express')
const {
    createGame,
    getAllGames,
    getGame,
    updateGame,
    deleteGame
} = require('../controllers/gameController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// Get all games 
router.get('/', getAllGames)

// Get a single game
router.get('/:id', getGame)

// Post a game
router.post('/', createGame)

// Delete a single game
router.delete('/:id', deleteGame)

// Update a game
router.patch('/:id', updateGame)

module.exports = router 