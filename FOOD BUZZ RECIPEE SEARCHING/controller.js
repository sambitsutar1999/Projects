//  https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// 762ab8cf-f985-4cad-bacd-6ac38255013a
const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
// const leftContainer = document.getElementById("left-container")
// const rightContainer = document.getElementById("right-container")
import { storeRecipeData } from "./MVC/Mymodel.js"
import { OneRecipeView } from "./MVC/OneRecipeView.js"
import { getAllData } from "./MVC/Mymodel.js"
import { API_URL } from "./helpers/helpers.js"
import { getJSON } from "./config/config.js"
import { AllData } from "./MVC/Mymodel.js"
import { AllRecipeView } from "./MVC/AllRecipeView.js"
import { paginationData } from "./MVC/Mymodel.js"
import { MyPaginationView } from "./MVC/MyPaginationView.js"
import { ServingsView } from "./MVC/ServingsView.js"
import { BookmarkView } from "./MVC/BookMarkView.js"






searchBtn.addEventListener('click', function () {
    getRecipeData()
})
async function getRecipeData() {
    try {
        const searchItem = searchInput.value
       await getAllData(searchItem)
        // const recipeData = await getJSON(`${API_URL}?search=${searchItem}&key=762ab8cf-f985-4cad-bacd-6ac38255013a`)
        // // const response = await fetch(`${API_URL}?search=${searchItem}&key=762ab8cf-f985-4cad-bacd-6ac38255013a`)
        // // const recipedata = await response.json()
        // const recipeArray = recipedata.data.recipes


        const arv = new AllRecipeView()
        arv.render(paginationData(10))

        // recipeArray.map(function (i) {
        //     console.log(i)
        //     const myPublisher = i.publisher
        //     const myTitle = i.title
        //     const myImageUrl = i.image_url
        //     const myId = i.id
        //     console.log(myId)

        //     // rightContainer.innerText = "";

        //     return leftContainer.insertAdjacentHTML('afterbegin', `
        //      <a href="#${myId}">
        //      <div class="left-food-container">
        //      <img src="${myImageUrl}" id="myimage"/>
        //      <h2 id="mypublisher">${myPublisher}</h2>
        //      <h3 id="mytitle">${myTitle}</h3>
        //      </div>
        //      </a>
        //     `)
        // })


        const mpv = new MyPaginationView()
        mpv.render(AllData)
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

function callHashChangeEventHandler(){
    const r = new OneRecipeView()
    r.hashChangeEventHandler(loadPerticularRecipe)
}

callHashChangeEventHandler()



function controlPagination(number)
{
    const arv = new AllRecipeView()
    arv.render(paginationData(number))
}

function callIt()
{
    const view = new MyPaginationView()
    view.getPageNumberFromButton(controlPagination)
}

callIt()

function servings(){
    new sv = ServingsView()
    sv.render()
}
servings()


function bookmark()
{
    const bv = new BookmarkView()
    bv.handleBookmarks()
}
bookmark()
// window.addEventListener('hashchange',loadPerticularRecipe)

// window.addEventListener("hashchange", loadParticularRecipe)

// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcded

// Publisher - Subscriber design pattern
// Publisher and Subscriber(functions)
// Publisher -- > fn -- > that will basicalliy hold the code related to an event -- > hashChangeEventHandler
// Subscriber -- > fn -- > that will be called when the event occurs -- > loadParticularRecipe()
// helper files(variables) and config files(functions)