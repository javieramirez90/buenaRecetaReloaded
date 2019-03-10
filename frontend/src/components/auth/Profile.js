import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Profile(props) {
  console.log(props)
  let { user } = props
  let { recipes } = props.user
  console.log(recipes)

  let ownRecipesList = () => recipes.ownCreation.map(recipe => {
    return(
    <li>
      <img src={recipe.photoURL} alt={recipe.name}/>
      <h2>{recipe.name}</h2>
      <button>Detalle</button>
    </li>
    )
  })

  if(recipes.ownCreation.length > 0){
    return (
      <div>
        <img src={user.photoURL} alt={user.username + "photo"}/>
        <h1>Bienvenido {user.username}</h1>
        <ul>Mis recetas:
          { ownRecipesList }
        </ul>
      </div>
    )
  } else {
    return(
      <div> 
        <img src={user.photoURL} alt={user.username + "photo"}/>
        <h1>Bienvenido {user.username}</h1>
        <h4>No has creado recetas aún; inténtalo: </h4>
        <NavLink to="/createRecipe"><button>Crear receta</button></NavLink>
      </div>
    )
  }
  
}
