import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Recipes extends Component {

  state= {
    recipes: [],
    anyRecipes: false
  }

  componentDidMount() {
    let url = "http://localhost:3000/allRecipes"
    let {recipes} = this.state
    axios.get(url)
      .then(res => {
        console.log(res)
        recipes = res.data
        this.setState({recipes, anyRecipes: true})
      })
      .catch(e => console.log(e))
  }

  render() {
    let {anyRecipes} = this.state
          let {recipes} = this.state
          return(
          recipes.map(recipe => {
            return(
              <Link className="recipeCard" to={"/allRecipes/"+recipe._id}>
              <div >
                <img  src={recipe.photoURL} alt={recipe.name + "photo"}/>
                <h4>{recipe.name}</h4>
                <p>{recipe.category}</p>
              </div>
              </Link>
            )
          })
          )
}

}