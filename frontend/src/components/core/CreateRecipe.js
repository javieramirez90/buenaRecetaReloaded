import React, { Component } from 'react'


const input = '<li><input type="text"/></li>'

export default class CreateRecipe extends Component {

  state={
    user: {},
    recipe: {},
    newIngredient: {},
    ingredients:[]
  }

  componentWillMount() {
    let {recipe, ingredients} = this.state
    console.log(this.state)
  }
  addIngredient = e => {
    e.preventDefault()
    let {recipe, ingredients ,newIngredient } = this.state
    console.log("Aquí son los ingredientes", ingredients)
    let leCopy = ingredients
    leCopy.push(newIngredient)
    recipe["ingredients"] = leCopy
    // console.log(ingredients)
    this.setState({ ingredients, recipe})

  }

  handleChange = e => {
    let { recipe, newIngredient } = this.state
    if(e.target.name === "quantity" || e.target.name === "kind"){
      newIngredient[e.target.name] = e.target.value
      console.log(newIngredient)
      this.setState({ newIngredient })
    } else {
      recipe[e.target.name] = e.target.value
      console.log(recipe)
      this.setState({ recipe })
    }
    console.log(recipe, newIngredient)
  }



  render() {
    
      let {ingredients}  = this.state
    
    return (
      <div className="createRecipeComponent">
        <form className="createRecipeForm">
          <label>Foto de tu receta: </label>
          <input type="file" name="photoURL" onChange={this.handleChange}/>
          <br/>
          <label>Nombre de tu receta: </label>
          <input type="text" name="name" onChange={this.handleChange}/>
          <br/>
          <label>Ingredientes: </label>
          <input type="number" min="1" placeholder="Cantidad" name="quantity" onChange={this.handleChange}/>
          <input type="text" maxLength="30" placeholder="Ingrediente" name="kind" onChange={this.handleChange}/>
          <br/>
          <button onClick={this.addIngredient}>Agregar</button>
          <ul >
            {
              ingredients.map((ingredient, index) => {
                return(
                  <li key={index}>
                    <p>{ingredient.quantity}</p>
                    <p>{ingredient.kind}</p>
                  </li>
                )
              })
            }
          </ul>
          
        </form>
      </div>
    )
  }
}
