const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
})

playerSchema.statics.signup = async function(username, password) {

    if (!username || !password){throw Error('All fields must be filled')}
    
    const playerExists = await this.findOne({ username })
  
    if (playerExists) {throw Error('Username already exists')}
  
    const password_salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, password_salt)
  
    const player = await this.create({ username, password: password_hash })
  
    return player

}


playerSchema.statics.signin = async function(username, password) {

    if (!username || !password){throw Error('All fields must be filled')}

    const player = await this.findOne({ username })
    
    if (!player) {throw Error('The username you entered was incorrect.')}

    const password_check = await bcrypt.compare(password, player.password)

    if (!password_check) {throw Error('The password you entered was incorrect.')}

    return player

}

module.exports = mongoose.model('player', playerSchema)