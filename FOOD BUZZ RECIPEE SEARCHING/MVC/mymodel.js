import { API_URL } from "./helpers/helpers.js"
import { getJSON } from "../config/config.js"

export const anatherRecipeObject = {

    recipeObject: {}
}


export async function storeRecipeData(id) {
    const recipeData = await getJSON(`${API_URL}/${id}`)
    // const response = await fetch(`${API_URL}/${id}`)
    // const recipeData = await response.json()

    // console.log(recipeData.data.recipe)

    anatherRecipeObject.recipeObject = {
        publisher: recipeData.data.recipe.publisher,
        title: recipeData.data.recipe.title,
        imageUrl: recipeData.data.recipe.image_url,
        servings: recipeData.data.recipe.servings,
        cookingTime: recipeData.data.recipe.cooking_time,
        ingredients: recipeData.data.recipe.ingredients,

    }
    console.log(anatherRecipeObject)
}


   export const AllData = {
    allRecipeData: []
   }
    export async function getAllData(searchItem){
        const recipeData = await getJSON(`${API_URL}?search=${searchItem}&key=762ab8cf-f985-4cad-bacd-6ac38255013a`)
        const recipeArray = recipedata.data.recipes
        AllData.allRecipeData = recipeArray
        console.log(AllData)
    }