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
    allRecipeData: [],
    page: 1,
    dataPerPage: 10
   }
    export async function getAllData(searchItem){
        const recipeData = await getJSON(`${API_URL}?search=${searchItem}&key=762ab8cf-f985-4cad-bacd-6ac38255013a`)
        const recipeArray = recipeData.data.recipes
        AllData.allRecipeData = recipeArray
        console.log(AllData)
    }

export function paginationData(page = AllData.page){
    AllData.page = page
    const start = (page - 1) * AllData.dataPerPage
    const stop = page * AllData.dataPerPage
    return AllData.allRecipeData.slice(start, stop)
}


bookmarksArray = []
export function collectAndStoreBookmark(title)
{
// Collect the title and store it
bookmarksArray.push(title)

//localStorage --> storage which is inbuilt in the browser
//Stores the data in the form of a key value pair
// "mobile","Lenovo"  

// 4 methods -- > setItem() -- > Store the data in the form of
// a key value pair, getItem() -- > get/read that data,
// remove() -- > remove the data,
// clear() -- > completely clear the data

// stringify() -- > convert Javascript data -- > JSON

localStorage.setItem("bookmark",JSON.stringify(bookmarksArray))

//parse() -->convert JSON to Javascript data
const titleData = JSON.parse(localStorage.getItem("bookmark"))

return titleData
}