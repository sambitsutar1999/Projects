//  https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// 762ab8cf-f985-4cad-bacd-6ac38255013a
const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
const leftContainer = document.getElementById("left-container")
const rightContainer = document.getElementById("right-container")

import { OneRecipeView } from "./MVC/OneRecipeView.js"
import {storeRecipeData} from "./MVC/Mymodel.js"
searchBtn.addEventListener('click', function () {
    getRecipeData()
})
async function getRecipeData() {
    try {
        const searchItem = searchInput.value
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=762ab8cf-f985-4cad-bacd-6ac38255013a`)
        const recipedata = await response.json()
        const recipeArray = recipedata.data.recipes

        recipeArray.map(function (i) {
            console.log(i)
            const myPublisher = i.publisher
            const myTitle = i.title
            const myImageUrl = i.image_url
            const myId = i.id
            console.log(myId)

            // rightContainer.innerText = "";

            return leftContainer.insertAdjacentHTML('afterbegin', `
             <a href="#${myId}">
             <div class="left-food-container">
             <img src="${myImageUrl}" id="myimage"/>
             <h2 id="mypublisher">${myPublisher}</h2>
             <h3 id="mytitle">${myTitle}</h3>
             </div>
             </a>
            `)
        })
    } catch (e) {
        alert(e)
    }
}
// getRecipeData()

async function loadPerticularRecipe() { 

    const hashID= window.location.hash.slice(1)

    // const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${hashID}`)
    // const recipeData = await response.json()
    // console.log(recipeData.data.recipe)
    // const recipeObject = {
    //     publisher: recipeData.data.recipe.publisher,
    //     title: recipeData.data.recipe.title,
    //     imageUrl: recipeData.data.recipe.image_url,
    //     servings: recipeData.data.recipe.servings,
    //     cookingTime: recipeData.data.recipe.cooking_time,
    //     ingredients: recipeData.data.recipe.ingredients,

    // }

    // console.log(recipeObject.ingredients)

   await storeRecipeData(hashID)

   const rv = new OneRecipeView()
   rv.render()
      

    // rightContainer.innerText = "";

    // const rightData = `<div class= "right-food-container" >
    //             <img  class ="right-image"src="${recipeObject.imageUrl}" alt="">
    //             <h2 class = "right-title">Title: ${recipeObject.title}</h2>
    //             <h3 class="right-publisher">Publisher:${recipeObject.publisher}</h3>
    //             <h3 class ="right-servings">Servings:${recipeObject.servings}</h3>
    //             <h3 class = "right-cooking-time">cooking Time:${recipeObject.cookingTime}</h3>


    //             <div class= "ingredients" >
    //                ${recipeObject.ingredients.map(function (i) 
    //                 {
    //                 console.log(i)
    //                 return `<div>
    //                      <span>${i.description}</span> --
    //                      <span>${i.quantity}</span>
    //                      <span>${i.quantity}</span >
    //                       </div > `

    //                 }).join("")}

    //         </div >
    //         </div>`




    // rightContainer.insertAdjacentHTML("afterbegin", rightData)
}
loadPerticularRecipe()

window.addEventListener('hashchange',loadPerticularRecipe)