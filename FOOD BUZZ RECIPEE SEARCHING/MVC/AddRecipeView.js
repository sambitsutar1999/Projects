import { recipe } from "./Mymodel"

export class AddRecipeView
{
    right
    addBtn

    displayAddRecipeForm()
    {
        this.right = document.getElementById("right-container")
        this.addBtn = document.getElementById("add-recipe")

        this.addBtn.addEventListener('click',() => {
            //Here,we need to display the form inside the right container

            const addRecipeForm = `
        <form method="POST">
            <label>Title:</label>
            <input type="text" placeholder="Enter the title..."name="title" value="TITLE 1" /><br>
        

            <label>Image URL:</label>
            <input type="url" placeholder="Enter the image url..."name="imageurl" value = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffood%2F&psig=AOvVaw1Nk8CQOkjJykV3ssyci_fe&ust=1719165517249000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICoquHk74YDFQAAAAAdAAAAABAE" /><br>

            <label>Cooking Time:</label>
            <input type="text" placeholder="Enter the cooking time..."name="cookingtime" value="40" /><br>

            <label>Servings:</label>
            <input type="text" placeholder="Enter the servings..."name="servings" value="4"/><br>

            <label>Publisher:</label>
            <input type="text" placeholder="Enter the publisher..."name="publisher" value="PUBLISHER 1" /><br>

            <label>Ingredient 1:</label>
            <input type="text" placeholder="Enter the ingredient 1..."name="ingredient1" value="2,kg,Rice" /><br>

            <label>Ingredient 2:</label>
            <input type="text" placeholder="Enter the ingredient 2..."name="ingredient2" value="4,kg,Dal" /><br>

            <label>Source URL:</label>
            <input type="text" placeholder="Enter the source url..."name="sourceurl" value="https://123.com" /><br>

            <input type="submit" value="Add" id="add"/>

         </form>`
        
         this.right.innerText = ""
         return this.right.insertAdjacentHTML('afterbegin',addRecipeForm)

        })
    }

    collectRecipeData()
    {
        this.right = document.getElementById("right-container")
        this.right.addEventListener('afterbegin',(e) => {
            e.preventDefault()
            //Collect the data from the form

            const title = e.target.form[0].value
            const imageurl = e.target.form[1].value
            const cookingTime = e.target.form[2].value
            const servings = e.target.form[3].value
            const publisher = e.target.form[4].value
            const ingredient1 = e.target.form[5].value
            const ingredient2 = e.target.form[6].value
            const sourceurl = e.target.form[7].value
            

            const newRecipeData = {
                title: title,
                imageUrl: imageurl,
                cookingTime: cookingTime,
                servings: servings,
                publisher: publisher,
                ingredient1: ingredient1,
                ingredient2: ingredient2,
                sourceurl: sourceurl

            }
            recipe(newRecipeData)

        }) 



    }




}