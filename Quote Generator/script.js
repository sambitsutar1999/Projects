// https://api.quotable.io/random -->JSON Format--> javascript object

//JSON and Javascript Object

const myButton = document.getElementById("btn1")
const myQuote = document.getElementById("myquote")
const myAuthor = document.getElementById("my_author")
const copy = document.getElementById("copy")
const volume = document.getElementById("volume")
const myContainer = document.getElementById("container")
const myLoder = document.getElementById("loder")


function first(){
    //Container should visible ,loder not visible.
    myContainer.hidden = false;
    myLoder.hidden = true;
}

function second(){
    //Loder visible--> Container not visible
    myLoder.hidden = false;
    myContainer.hidden = true;
}

first();

myButton.addEventListener('click', async function(){
    second();
    const response = await fetch("https://api.quotable.io/random")
    let quotes = await response.json()
    
    myQuote.innerText = quotes.content
    myAuthor.innerText = quotes.author
    
    first();
})

copy.addEventListener('click',function(){
    navigator.clipboard.writeText(myQuote.innerText)
})

volume.addEventListener('click',function(){
    const Speech = new SpeechSynthesisUtterance(myQuote.innerText)
    speechSynthesis.speak(Speech)
})

