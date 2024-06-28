const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const serverless = require('serverless-http')

const Mushroom = require('./models/mushroom')

const app = express()

mongoose.connect('mongodb+srv://MongoDBAdmin:MongoDBP%40ssw0rd@cluster0.xqtb9pu.mongodb.net/University?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
})

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');

})

const db = mongoose.connection


const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const mushrooms = await Mushroom.find({}).limit(20);
      res.render('index', {mushrooms})
    } catch (err) {
      res.status(500).send(err);
    }
  });


  
  app.use(`/.netlify/functions/api`, router);

  module.exports = app;
  module.exports.handler = serverless(app);