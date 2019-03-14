import React, { Component } from 'react'
import axios from 'axios'

export default class CreateRecipe extends Component {

  state={
    user: {},
    recipe: {},
    photoURL: {},
    newIngredient: {},
    ingredients:[]
  }

  componentWillMount() {
  }

  addIngredient = e => {
    e.preventDefault()
    let {ingredients ,newIngredient, recipe, photoURL } = this.state
    ingredients.push(newIngredient)
    recipe["ingredients"] = ingredients
    // recipe["photoURL"] = photoURL
    // console.log(ingredients)
    this.setState({ recipe, ingredients, newIngredient: {}})
  }

  handleChange = e => {
    let { recipe, newIngredient } = this.state
    if(e.target.name === "quantity" || e.target.name === "kind"){
      newIngredient[e.target.name] = e.target.value
      this.setState({ newIngredient })
    } else {
      recipe[e.target.name] = e.target.value
      this.setState({ recipe })
    }
  }

  handleImageChange = e => {
    let { photoURL } = this.state
    photoURL = e.target.files[0]
		this.setState({photoURL})
	}

  sendToServer = e => {
    e.preventDefault()
    let url = "http://localhost:3000/createRecipe"
    let { photoURL, recipe, ingredients} = this.state 
    console.log(recipe)
    // let formData = new FormData()
    // // formData.append("recipe", recipe)
    // formData.append("picture", photoURL)

    axios({
      method: 'post',
      url: url,
      data: {
        recipe: recipe,
      },
        withCredentials:true
      
    })
    // recipe["photoURL"] =photoURL
    // let serviceUpload = axios.create({url, withCredentials: true})
    // return serviceUpload.post(url, {
		// 	headers: {
		// 		'Content-Type': 'multipart/form-data',
		// 	}
		// })
      .then(res => {
        console.log("Esta es la respuesta para la primer",res.data.newRecipe)
        let formData = new FormData()
        formData.append("picture", photoURL)
        formData.append("id", res.data.newRecipe._id)
        let serviceUpload = axios.create({url:"http://localhost:3000/updateRecipe", withCredentials: true})
        return serviceUpload.post('http://localhost:3000/updateRecipe', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then(res => {
          console.log("Éste es el resultado de dos operaciones: ", res )
        })
        .catch(e => console.log(e))
        
      })
      .catch(e => console.log(e))


  } 

  render() {
    
      let {ingredients}  = this.state
    
    return (
      <div className="createRecipeComponent">
        {/* <form onSubmit={this.sendToServer} className="createRecipeForm"> */}
          <label>Foto de tu receta: </label>
          <input type="file" name="photoURL" onChange={this.handleImageChange}/>
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
          <button onClick={this.sendToServer} type="submit">Crear</button>
        {/* </form> */}
      </div>
    )
  }
}
