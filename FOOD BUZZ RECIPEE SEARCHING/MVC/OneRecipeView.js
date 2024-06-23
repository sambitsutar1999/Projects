import { anatherRecipeObject } from "./MVC/Mymodel.js";

export class OneRecipeView {
    rightContainer;
    rightData;

    render() {
        this.rightContainer = document.getElementById("right-container")
        this.clear()
        let collectedData = anatherRecipeObject.recipeObject
        this.rightData = this.actualLogic(collectedData)
        this.addDataTOContainer()
    }

    clear() {
        this.rightContainer.innerText = "";
    }

    actualLogic(receivedData) {

        return `<div class= "right-food-container" >
                <img  class ="right-image"src="${receivedData.imageUrl}" alt="">
                <button>Mark as bookmark</button>
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
    }



    addDataTOContainer() {
        this.rightContainer.insertAdjacentHTML("afterbegin", this.rightData)
    }

    hashChangeEventHandler(data) {
        window.addEventListener('hashchange', data)
    }
    handleError() {
        this.rightContainer = document.getElementById("right-container")
        this.rightContainer.innerText = "";
        this.rightContainer.innerText = "Please Enter  A valid id";
    }




}