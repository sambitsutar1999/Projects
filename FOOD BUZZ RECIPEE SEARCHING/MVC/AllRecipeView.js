export class AllRecipeView {

    leftContainer


    render(data) {
        this.leftContainer = document.getElementById("left-container")
        this.getRecipeDataView(data)
    }

    getRecipeDataView(recipeArray) {

        // const recipeArray = AllData.allRecipeData


         recipeArray.map((i) => {
            console.log(i)
            const myPublisher = i.publisher
            const myTitle = i.title
            const myImageUrl = i.image_url
            const myId = i.id
            console.log(myId)

            // rightContainer.innerText = "";

            return this.leftContainer.insertAdjacentHTML('afterbegin', `
         <a href="#${myId}">
         <div class="left-food-container">
         <img src="${myImageUrl}" id="myimage"/>
         <h2 id="mypublisher">${myPublisher}</h2>
         <h3 id="mytitle">${myTitle}</h3>
         </div>
         </a>
        `)
        })
    }


}