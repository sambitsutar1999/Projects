class MyPaginationView {
    paginationData
    render() {
        this.paginationData = document.getElementById("pagination")
    }

    paginationLogic() {

        // Logic to count totally how many pages are actually required

        // 100 recipes / 10 recipes per page = 10 pages

        // Scenarios

        //Page 1 and there are no other pages are not required

        //Page 1 and there are some other pages that are available

        //Last Page

        //Other page
    }
}