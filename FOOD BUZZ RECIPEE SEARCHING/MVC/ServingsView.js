import { anatherRecipeObject } from "./Mymodel"

export class ServingsView {
    rightContainer
    render() {
        this.rightContainer = document.getElementById("right-container")
        this.handleServings()

    }

    handleServings() {

        this.rightContainer = document.getElementById("right-container")
        //Logic which will identify INCREASE and Decrease Buttons
        this.rightContainer.addEventListener('click', function (e) {
            const btnName = target.innerText


            if (btnName == "INCREASE") {
                this.rightContainer = document.getElementById("right-container")
                const completeData = anatherRecipeObject.recipeObject
                const myServings = completeData.Servings
                anatherRecipeObject.recipeObjectservings = myServings + 1

                anatherRecipeObject.recipeObject.ingredients.map(function (i) {
                    i.quantity = Math.floor((i.quantity * anatherRecipeObject.recipeObject.servings) / 5)
                })



                const receivedData = anatherRecipeObject.recipeObject


                this.rightContainer.innerText = ""


                return this.rightContainer.insertAdjacentHTNL('afterbegin', `<div class= "right-food-container" >
                    <img  class ="right-image"src="${receivedData.imageUrl}" alt="">
                    <h2 class = "right-title">Title: ${receivedData.title}</h2>
                    <h3 class="right-publisher">Publisher:${receivedData.publisher}</h3>
                    <h3 class ="right-servings">Servings:${receivedData.servings}</h3>
                    <button id="inc">INCREASE</button>
                    <button id="dec">DECREASE</button>
                    <h3 class = "right-cooking-time">cooking Time:${receivedData.cookingTime}</h3>
    
    
                    <div class= "ingredients" >
                       ${receivedData.ingredients.map(function (i) {
                    console.log(i)
                    return `<div>
                             <span>${i.description}</span> --
                             <span>${i.quantity}</span>
                             <span>${i.quantity}</span >
                              </div > `

                }).join("")}
    
                </div >
                </div>`


                )
            }
            else if (btnName == "DECREASE") {
                this.rightContainer = document.getElementById("right-container")
                const completeData = anatherRecipeObject.recipeObject
                const myServings = completeData.Servings
                anatherRecipeObject.recipeObjectservings = myServings - 1

                anatherRecipeObject.recipeObject.ingredients.map(function (i) {
                    i.quantity = Math.ceil((i.quantity * anatherRecipeObject.recipeObject.servings) / 5)
                })



                const receivedData = anatherRecipeObject.recipeObject


                this.rightContainer.innerText = ""


                return this.rightContainer.insertAdjacentHTNL('afterbegin', `<div class= "right-food-container" >
                    <img  class ="right-image"src="${receivedData.imageUrl}" alt="">
                    <h2 class = "right-title">Title: ${receivedData.title}</h2>
                    <h3 class="right-publisher">Publisher:${receivedData.publisher}</h3>
                    <h3 class ="right-servings">Servings:${receivedData.servings}</h3>
                    <button id="inc">INCREASE</button>
                    <button id="dec">DECREASE</button>
                    <h3 class = "right-cooking-time">cooking Time:${receivedData.cookingTime}</h3>
    
    
                    <div class= "ingredients" >
                       ${receivedData.ingredients.map(function (i) {
                    console.log(i)
                    return `<div>
                             <span>${i.description}</span> --
                             <span>${i.quantity}</span>
                             <span>${i.quantity}</span >
                              </div > `

                }).join("")}
    
                </div >
                </div>`
        )}
        })
    }
}