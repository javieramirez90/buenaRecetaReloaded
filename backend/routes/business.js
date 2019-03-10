const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe')
const uploadCloud = '../helpers/cloudinary.js'
const User = '../models/User.js'
const ShoppingCart = '../models/ShoppingCart.js'

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

//GET ALL RECIPES
router.get('/allRecipes', (req, res, next) => {
  Recipe.find()
   .then(recipes => {
     res.status(200).json(recipes)
    })
})

// router.get('/', (req, res) => {
//   res.status(200).json(req.user)
// })

module.exports = router