import { anatherRecipeObject } from "./Mymodel"
import { collectAndStoreBookmark } from "./Mymodel"

export class BookmarkView
{
    handleBookmarks()
    {
        this.right = document.getElementById("right-container")

        this.right.addEventListener('click',function(e){
            const btnName = e.target.innerText
            if(btnName == "Mark as Bookmark")
                {
                    const myTitle = anatherRecipeObject.recipeObject.title
                    collectAndStoreBookmark(myTitle)
                }

        })
    }
}