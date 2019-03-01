const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  photoURL: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogKQLDiKxPppc6st0pctrj_n89TobtWmG1o74HzJ3wQBZEwXfew"
  },
  nombre: {
    type:String,
    required:true
  },
  ingredientes:  [
    {
      type:String,
      required:true
    }
  ],
  categoria: {
    type: String,
    enum: ['Postre','Ensalada', 'Plato fuerte', 'Sopas y caldos', 'Vegetariano', 'Entradas']
  },
  preparacion: {
    type: String,
    required:true
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref:"User"
  }
},{
  timestamps: true
})

module.exports = mongoose.Schema('Recipe', recipeSchema)