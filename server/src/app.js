const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Button = require('./models/button')

mongoose.connect('mongodb://localhost:27017/entries')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connection Succeeded')
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/button', (req, res) => {
  const newButton = new Button({
    icon: req.body.icon,
    text: req.body.text,
    link: req.body.link,
    openSelf: req.body.openSelf
  })

  newButton.save((error) => {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Button saved successfully!'
    })
  })
})

app.get('/buttons/:typeId', (req, res) => {
  const filter = { 'type': req.params.typeId }
  Button.find(filter, 'icon text link openSelf scale', (error, buttons) => {
    if (error) {
      console.error(error)
    }
    res.send(
      { buttons: buttons }
    )
  })
})

app.listen(process.env.PORT || 8081)
