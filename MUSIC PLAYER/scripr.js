const myAudio = document.querySelector("audio")
const myPlay = document.getElementById("play")


isPlayingAudio = false;

function playAudio() {
    isPlayingAudio = true;
    myAudio.play()
    myPlay.classList.replace("fa-play", "fa-pause")
}

function pauseAudio() {
    isPlayingAudio = false;
    myAudio.pause()
    myPlay.classList.replace("fa-pause", "fa-play")
}
myPlay.addEventListener('click', function () {
    if (isPlayingAudio) {
        pauseAudio()
    } else {
        playAudio()
    }

})



const data = [
    {
        singerName: "Sophie Marie",
        songName: "All the way to to Moon",
        info: "image-1"
    },
    {
        singerName: "Jemma Barbsy",
        songName: "All the way to to earth",
        info: "image-2"
    },
    {
        singerName: "Nisha Duke",
        songName: "Men to the Earth",
        info: "image-3"
    }
]


const mySong = document.getElementById("song")
const mySinger = document.getElementById("singer")
const myImage = document.querySelector("img")
const myForward = document.getElementById("forward")


function loadSong(song) {
    mySinger.innerText = song.singerName;
    mySong.innerText = song.songName;
    myImage.src = `IMAGES/${song.info}.jpg`;
    myAudio.SRC = `MUSIC/${song.info}.mp3`
}

let songIndex =0;
function nextSong(){
    if(songIndex >= data.length - 1){
        songIndex =0;
    }
    loadSong(data[songIndex]);
    songIndex ++;
    playAudio()
}





myForward.addEventListener('click',nextSong)