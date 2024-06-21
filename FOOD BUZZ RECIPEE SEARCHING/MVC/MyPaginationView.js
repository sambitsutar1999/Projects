export class MyPaginationView {

    paginationData
    data




    render(data) {
        this.data = data
        this.paginationLogic()
    }

    paginationLogic() {

        // Logic to count totally how many pages are actually required

        // 100 recipes / 10 recipes per page = 10 pages


        const recipeLength = this.paginationData.allRecipeData.length
        const recipePerPage = this.data.dataPerPage
        const numberOfPages = Math.ceil(recipeLength / recipePerPage)
        const currentPage = this.data.page

        // Scenarios

        //Page 1 and there are some other pages that are available
        if (currentPage === 1 && numberOfPages > 1) {
            // console.log("I am in first page and some other pages are available")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin", `
            <button class = ""btn-inline next>
            <span>Page${currentPage + 1}</span>
            </button>
            `
            )
        }

        //Last Page
        if (currentPage === numberOfPages && numberOfPages > 1) {
            // console.log("I am in the last page")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin", `
            <button class = ""btn-inline previous>
            <span>Page${currentPage - 1}</span>
            </button>
            `
            )
        }

        //Other page
        if (currentPage < numberOfPages) {
            // console.log("There are other pages that are available")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin", `
            <button class = ""btn-inline next>
            <span>Page${currentPage + 1}</span>
            </button>


            <button class = ""btn-inline previous>
            <span>Page${currentPage - 1}</span>
            </button>
            `
            )
        }

        //Page 1 and there are no other pages are not required
        else {
            // console.log("I am in first page and some other page are not available")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin", `
            <button class = ""btn-inline currentPage>
            <span>Page${currentPage}</span>
            </button>
            `
            )
        }
    }

    getPageNumberFromButton(handler) {
        this.paginationData = document.getElementById("pagination")
        this.paginationData.addEventListener("click", function (e) {
            this.left = document.getElementById("left-container")
            this.left.innerText = ""
            const pageNo = Number(e.target.innerText.slice(4))
            handler(pageNo)

        }
        )
    }
}