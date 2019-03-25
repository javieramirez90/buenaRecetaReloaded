const express = require('express')
const router = express.Router()
const Recipe = require('../models/Recipe') 
const uploadCloud = require('../helpers/cloudinary')
const User = require('../models/User.js')
const ShoppingCart = require('../models/ShoppingCart')

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {    
    return next()
  } else {
    res.status(401).json({ message: "No te has logueado" })
  }
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

router.post('/createRecipe',isAuth, (req, res, next) => {
  if(req.file) {
    req.body.recipe.photoURL = req.file.url
    req.body.recipe.owner = req.user
  }
  Recipe.create({...req.body.recipe})
    .then(newRecipe => {
      let {_id} = req.user
      User.findByIdAndUpdate(_id, {$push:{ "recipes.ownCretion": newRecipe}}, {new:true})
        .then(user => res.status(200).json({message: "Receta creada con éxito", newRecipe, user}))
      res.status(200).json({message: "Receta creada con éxito", newRecipe})
    })
    .catch(e => console.log(e))

})

// router.post('/updateRecipe', uploadCloud.single('picture'), (req,res, next)=> {
//   let id = req.body.id
//   Recipe.findByIdAndUpdate(id, {photoURL: req.file.url}, {new: true})
//     .then(recipe => {
//       res.status(200).json(recipe)
//     })
// } )

// router.get('/', (req, res) => {
//   res.status(200).json(req.user)
// })

module.exports = router