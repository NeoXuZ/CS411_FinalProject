const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user')
const db = 'mongodb+srv://NeoXuZ:WuSheng2015@cluster0-vohb1.azure.mongodb.net/eventsdb?retryWrites=true&w=majority'
mongoose.connect(db, {useNewUrlParser:true,useUnifiedTopology:true}).then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));

  function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }


router.get('/',(req,res)=>{
    res.send('From API route')
})
router.get('/register',(req,res)=>{
    res.send("From API/Register Route")
})

router.post('/register',(req,res)=>{
    var user = new User(req.body);
    user.save()
      .then(registeredUser => {
        let payload =  {subject: registeredUser._id}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
      })
      .catch(err => {
        res.status(400).send(err);
      });
})

router.get('/login',(req,res)=>{
  res.send("This is login page")
})

router.post('/login',(req,res)=>{
  let userData = req.body;
  User.findOne({email: userData.email},(error,user)=>{
    if(error){
      console.log(error)
    }else{
      if(!user){
        res.status(401).send('Invalid E-mail')
      }else{
        if(user.password!==userData.password){
          res.status(401).send('E-mail address and password cannot match')
        }else{
          let payload =  {subject: user._id}
          let token = jwt.sign(payload,'secretKey')
          res.status(200).send({token})
        }
      }
    }
  })
})

router.get('/events',(req,res)=>{
  let events = [
    {
      "_id":"1",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"2",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"3",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"4",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"5",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"6",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"7",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"8",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    }
  ]
  res.json(events);
})

router.get('/special', verifyToken, (req,res)=>{
  let events = [
    {
      "_id":"1",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"2",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"3",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"4",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"5",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"6",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"7",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    },
    {
      "_id":"8",
      "name":"Neo",
      "Gender":"Male",
      "Description":"The one"
    }
  ]
  res.json(events);
})


module.exports = router