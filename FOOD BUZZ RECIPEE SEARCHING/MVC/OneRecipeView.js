import{anatherRecipeObject } from "./Mymodel.js";

export class OneRecipeView {
    rightContainer;
    rightData;


    render(){
        this.rightContainer = document.getElementById("right-container")
        this.clear()
        let collectedData = anatherRecipeObject.recipeObject
        this.rightData =this.actualLogic(collectedData)
        this.addDataTOContainer()
    }



    clear(){
    rightContainer.innerText = "";
           }






       actualLogic(receivedData){

    const rightData = `<div class= "right-food-container" >
                <img  class ="right-image"src="${receivedData.imageUrl}" alt="">
                <h2 class = "right-title">Title: ${receivedData.title}</h2>
                <h3 class="right-publisher">Publisher:${receivedData.publisher}</h3>
                <h3 class ="right-servings">Servings:${receivedData.servings}</h3>
                <h3 class = "right-cooking-time">cooking Time:${receivedData.cookingTime}</h3>


                <div class= "ingredients" >
                   ${receivedData.ingredients.map(function (i) 
                    {
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



addDataTOContainer(){
    rightContainer.insertAdjacentHTML("afterbegin", this.rightData)
}
}