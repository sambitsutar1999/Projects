//  https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// 762ab8cf-f985-4cad-bacd-6ac38255013a
const searchBtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
const leftContainer = document.getElementById("left-container")
const rightContainer = document.getElementById("right-container")

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

            rightContainer.innerText = "";

            return leftContainer.insertAdjacentHTML('afterbegin', `
             <a href="#">
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
    const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e887c")
    const recipeData = await response.json()
    console.log(recipeData.data.recipe)
    const recipeObject = {
        publisher: recipeData.data.recipe.publisher,
        title: recipeData.data.recipe.title,
        imageUrl: recipeData.data.recipe.image_url,
        servings: recipeData.data.recipe.servings,
        cookingTime: recipeData.data.recipe.cooking_time,
        ingredients: recipeData.data.recipe.ingredients,

    }

    console.log(recipeObject.ingredients)

    const rightData = `<div class= "right-food-container" >
                <img  class ="right-image"src="${recipeObject.imageUrl}" alt="">
                <h2 class = "right-title">Title: ${recipeObject.title}</h2>
                <h3 class="right-publisher">Publisher:${recipeObject.publisher}</h3>
                <h3 class ="right-servings">Servings:${recipeObject.servings}</h3>
                <h3 class = "right-cooking-time">cooking Time:${recipeObject.cookingTime}</h3>


                <div class= "ingredient" >
                   ${recipeObject.ingredients.map(function (i) {
                    console.log(i)
                    return `<div>
                         <h2>${i.description}</h2>
                         <span>${i.quantity}</span>
                         <span>${i.quantity}</span >
                          </div > `

                    }).join("")}

            </div >
            </div>`




    rightContainer.insertAdjacentHTML("afterbegin", rightData)
}
loadPerticularRecipe()