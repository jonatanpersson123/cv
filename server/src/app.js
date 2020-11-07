require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Button = require('./models/button')
const Profile = require('./models/profile')
const PORT = process.env.PORT || 5000

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => { console.log('Connected to db') }
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connection Succeeded')
})

const app = express()
app.use(express.static(path.join(__dirname, '../../frontend/dist')))
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

app.get('/profiles', (req, res) => {
  Profile.find({}, (error, profile) => {
    if (error) {
      console.error(error)
    }
    res.send(
      { profile: profile }
    )
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
})

app.listen(PORT)
