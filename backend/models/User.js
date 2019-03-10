const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const populate = require('../helpers/fillAllRefs')

const userSchema = new Schema({
  photoURL: {
    type: String,
    default: "https://res.cloudinary.com/dtciysqlf/image/upload/v1552192812/buenaReceta/userLogo.png"
  },
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "client"],
    default: "client"
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
userSchema.plugin(populate)
userSchema.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports =  mongoose.model('User', userSchema)

