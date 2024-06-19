const PlayButton = document.getElementById("play")
const myVideo = document.querySelector("video")


isVideoPlaying = false;

function playVideo() {
    isVideoPlaying = true
    PlayButton.classList.replace("fa-play", "fa-pause")
    myVideo.play()
}

function pauseVideo() {
    isVideoPlaying = false
    myVideo.pause()
    PlayButton.classList.replace("fa-pause", "fa-play")


}
function controlVideo() {
    if (isVideoPlaying) {
        pauseVideo()
    }
    else {
        playVideo()
    }
}

PlayButton.addEventListener('click', controlVideo)




const MyProgressBar = document.getElementById("progress-bar")
const Duration = document.getElementById("duration")
const CurrentTime = document.getElementById("current-time")

myVideo.addEventListener('timeupdate', function (event) {
    let MyCurrentTime = myVideo.currentTime
    let MyDuration = myVideo.duration

    let progressPercentage = (MyCurrentTime / MyDuration) * 100
    MyProgressBar.style.width = `${progressPercentage}%`




    const durationInMinutes = Math.floor(MyDuration / 60)
    let durationInSeconds = Math.floor(MyDuration % 60)

    if (durationInSeconds <= 9) {
        durationInSeconds = `${durationInSeconds}`
    }

    Duration.innerText = `${durationInMinutes}:${durationInSeconds}`

    /////////////////////////////////////////////////////////////////////////////////
    const currentTimeInMinutes = Math.floor(MyCurrentTime / 60)
    let currentTimeInSeconds = Math.floor(MyCurrentTime % 60)

    if (currentTimeInSeconds <= 9) {

        currentTimeInSeconds = `0${currentTimeInSeconds}`
    }

    CurrentTime.innerText = `${currentTimeInMinutes}:${currentTimeInSeconds}/`

})

const ProgressRange = document.getElementById("progress-range")

ProgressRange.addEventListener('click', function (event) {
    const TotalWidth = event.srcElement.offsetWidth

    const TotalWidthFromStart = event.offsetX

    const clickPercentage = (TotalWidthFromStart / TotalWidth) * 100

    MyProgressBar.style.width = `${clickPercentage}%`

    myVideo.currentTime = (TotalWidthFromStart / TotalWidth) * myVideo.duration


})

const VolumeRange = document.getElementById("volume-range")
const VolumeBar = document.getElementById("volume-bar")


VolumeRange.addEventListener('click', function (event) {
    const TotalWidth = event.srcElement.offsetWidth
    const TotalWidthFromStart = event.offsetX
    const VolumePercentage = (TotalWidthFromStart / TotalWidth) * 100

    VolumeBar.style.width = `${VolumePercentage}%`

    let volumeInfo = TotalWidthFromStart / TotalWidth

    if (volumeInfo < 0.5) {
        myVideo.volume = 0.2
    } else {
        myVideo.volume = 1
    }
})


const Volume = document.getElementById("volume-up")


isMuted = false;
function mute() {
    myVideo.volume = 0
    Volume.classList.replace("fa-volume-up", "fa-volume-mute")
    VolumeBar.style.width = `${0}%`
    isMuted = true;
}
function unMute() {
    isMuted = false;


    const TotalWidth = event.srcElement.offsetWidth

    const TotalWidthFromStart = event.offsetX

    const volumeBarPercentage = (TotalWidthFromStart / TotalWidth) * 100

    VolumeBar.style.width = `${volumeBarPercentage}%`


    Volume.classList.replace("fa-volume-mute", "fa-volume-up")

    let volumeInfo = TotalWidthFromStart / TotalWidth

    if (volumeInfo < 0.5) {
        myVideo.volume = 0.2
    } else {
        myVideo.volume = 1
    }

}


Volume.addEventListener('click', function () {
    if (isMuted) {
        unMute()
    } else {
        mute()
    }

})



const Speed = document.getElementById("speed")

Speed.addEventListener('change', function () {
    myVideo.playbackRate = Speed.value
})


const FullScreen = document.getElementById("fullscreen")
const PlayerContainer = document.getElementById("player-container")


let fullScreen = false


function displayFullScreen(container)
{
    if(container.requestFullscreen)
    {
        container.requestFullscreen()   
    }
    
}

function closeFullScreen(container)
{
    //Logic to close the video which is already in fullscreenmode to normal mode
    if(container.exitFullscreen)
    {
        container.exitFullscreen()   
    }
}

FullScreen.addEventListener("click", function()
{
    //Logic to expand the full screen
    if(!fullScreen)
    {
        displayFullScreen(PlayerContainer)
    }
    else
    {
        closeFullScreen(PlayerContainer)
    }

})
