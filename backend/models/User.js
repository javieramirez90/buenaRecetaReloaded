const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const populate = require('../helpers/fillAllRefs')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  recipes: {
    favourites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ],
    ownCreation: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ],
    interestedIn:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ],
    related: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    ]
  },
  shoppingCart: 
  {
    type: Schema.Types.ObjectId,
    ref: 'ShoppingCart'
  }
}, {
  timestamps: true
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'})
userSchema.plugin(populate)
module.exports =  mongoose.model('User', userSchema)

