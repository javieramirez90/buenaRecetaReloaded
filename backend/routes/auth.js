const express = require('express')
const router = express.Router()
const passport = require('passport')
const multer = require('multer')
const uploadCloud = require('../helpers/cloudinary')

const User = require('../models/User')
const ShoppingCart = require('../models/ShoppingCart')

function isAuth(req, res, next){
  if(req.isAuthenticated()){
    return next()
  } else {
    res.status(401).json({message: "No has iniciado sesión"}).redirect('/login')
  }
}

function isLoggedIn(req, res, next){
  if(req.session.currentUser){
    res.redirect('/profile')
  } else {
    next()
  }
}

router.post('/signup', (req, res) => {
  if(req.body.password !== req.body.password2){
    req.body.err = "Tu password no coincide, vuelve a intentarlo."
    res.json(...req.body)
  }else {
    User.register(req.body, req.body.password)
      .then(user => {
        req.body.user = user.id
        ShoppingCart.create(req.body)
          .then(shoppingCart => {
            res.status(201).json([user, shoppingCart])
          })
          .catch(e => {
            req.body.err = errDict[e.name]
            res.json(e)})
      })
  }
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  req.app.locals.user = req.user
  let {user} = req
  res.status(200).json({message: "Has iniciado sesión de forma exitosa", user})
})

router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy((err) => {
    if(!err) {
      res.status(200).clearCookie('connect.sid', {path: '/'}).json({message: "Has finalizado sesión de forma exitosa."})
    }
  })
})


module.exports = router