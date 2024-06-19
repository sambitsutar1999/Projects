
//AVmYVaKUrezlrzp-a0WwGYfxohqaW_NpZ_i9MdQb6Bo
const imageContainer = document.getElementById("img-container")
const myLoder = document.getElementById("loder")

function controllLoder() {
    myLoder.hidden = false;
}

controllLoder()

async function getImages() {
    const response = await fetch("https://api.unsplash.com/photos/?client_id=AVmYVaKUrezlrzp-a0WwGYfxohqaW_NpZ_i9MdQb6Bo")
    const imagesData = await response.json()
    imagesData.map(function (i) {
        const imgUrls = i.urls.full;
        const myImageElement = document.createElement("img")
        myImageElement.setAttribute("src", imgUrls)
        imageContainer.append(myImageElement)

    })

}
// getImages()
setTimeout(function () {
    getImages();
    myLoder.hidden = true;

}, 1000)


window.addEventListener('scroll', function () {
    let myClintHeight = document.documentElement.clientHeight
    let myScrollHeight = document.documentElement.scrollHeight
    let myScrollTop = document.documentElement.scrollTop

    if (myClintHeight + myScrollTop >= myScrollHeight) {
        getImages()
    }
})