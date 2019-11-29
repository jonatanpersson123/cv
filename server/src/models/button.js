var mongoose = require('mongoose')
var Schema = mongoose.Schema

const button = new Schema({
  icon: String,
  text: String,
  link: String,
  openSelf: Boolean,
  type: Number
})

const Button = mongoose.model('Button', button)
module.exports = Button
