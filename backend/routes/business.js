const express = require('express')
const router = express.router()
const uploadCloud = '../helpers/cloudinary.js'
const User = '../models/User.js'
const ShoppingCart = '../models/ShoppingCart.js'
const Recipe = '../models/Recipe.js'

function isAuth(){
  if(req.isAuthenticated()){
    return next()
  }
  res.status(401).json({message: "No has iniciado sesión"}).redirect('/login')
}

function isLoggedIn(req, res, next) {
  if(!req.user){
    req.status(401).json({message: "No te has logueado"})
  }else {
    next()
  }
}

router.get('/', (req, res) => {
  res.status(200).json(req.user)
})

router.get('/profile', isLoggedIn, (req, res) => {
  let {user} = req
  res.status(200).json({message: `Bienvenido ${user.name}`, user})
})