const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shoppingCartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  recipes: [
    {
      type: Schema.Types.ObjectId, 
      ref: "Recipe"
    }
  ]

},{
  timestamps: true
})

module.exports = mongoose.model('ShoppingCart', shoppingCartSchema)