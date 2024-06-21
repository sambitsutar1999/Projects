export class MyPaginationView {
    paginationData
    render(data) {
        this.data = data
        this.paginationData = document.getElementById("pagination")
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
            console.log("I am in first page and some other pages are available")
        }

        //Last Page
        if (currentPage === numberOfPages && numberOfPages > 1) {
            console.log("I am in the last page")
        }

        //Other page
        if (currentPage < numberOfPages) {
            console.log("There are other pages that are available")
        }

        //Page 1 and there are no other pages are not required
        else {
            console.log("I am in first page and some other page are not available")
        }
    }
}