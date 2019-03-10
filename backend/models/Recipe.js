const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  photoURL: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogKQLDiKxPppc6st0pctrj_n89TobtWmG1o74HzJ3wQBZEwXfew"
  },
  name: {
    type:String,
    required:true
  },
  ingredients:  [
    {
      type:String,
      required:true
    }
  ],
  category: [
    {
      type: String,
      enum: ['Postre','Ensalada', 'Plato fuerte', 'Sopas y caldos', 'Vegetariano', 'Entradas']
    }
  ],
  preparationInstructions: {
    type: String,
    required:true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref:"User"
  }
},{
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)