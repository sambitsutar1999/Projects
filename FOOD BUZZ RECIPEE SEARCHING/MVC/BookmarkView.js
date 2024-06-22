import { anatherRecipeObject } from "./Mymodel"
import { collectAndStoreBookmark } from "./Mymodel"

export class BookmarkView {
    handleBookmarks() {
        this.right = document.getElementById("right-container")

        this.right.addEventListener('click', function (e) {
            const btnName = e.target.innerText
            if (btnName == "Mark as Bookmark") {
                const myTitle = anatherRecipeObject.recipeObject.title
                let titleArray = collectAndStoreBookmark(myTitle)

                this.bookmark.innerText = ""
                titleArray.map((i) => {

                    //    this.bookmark.innerText = 1
                    this.bookmark = document.getElementById("childbookmark")
                    

                    this.bookmark.insertAdjacentHTML("afterbegin", `<h3>${i}</h3>`)
                })
            }

        })
    }
}