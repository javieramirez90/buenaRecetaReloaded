const mongoose = require('mongoose')
const Schema = mongoose.Schema

const passportLocalMongoose = require('passport-local-mongoose')


const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  recetas: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ],
  shoppingCart: 
  {
    type: Schema.Types.ObjectId,
    ref: 'ShoppingCart'
  }
}, {
  timestamps: true
})

userSchema.plugin(passportLocalMongoose, {usernameField: 'email'})

module.exports =  mongoose.model('User', userSchema)

