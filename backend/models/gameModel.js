const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gameShema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    points: {
        type: Number,
        required: true
    },
    rebounds: {
        type: Number,
        required: true
    },
    assists: {
        type: Number,
        required: true
    },
    fg: {
        type: Number,
        required: true
    },
    player_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Game', gameShema)