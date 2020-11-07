var mongoose = require('mongoose')
var Schema = mongoose.Schema

const profile = new Schema({
  title: String,
  text: String,
  wordList: String
})

const Profile = mongoose.model('Profile', profile)
module.exports = Profile
