var audio = new Audio("music/0.mp3")
let songItem = Array.from(document.getElementsByClassName("songItem"))
let index = 0

let songs = [
    {S: 1, songName: "Lose Control", filePath: "music/1.mp3" , coverPath: "images/1.jpg", artist: "-Becky Hill, Meduza, Goodboys", timer:"2:47"},
    {S: 2, songName: "Earth Song", filePath: "music/2.mp3", coverPath: "images/2.jpg", artist: "-Michael Jackson", timer:"6:45"},
    {S: 3, songName: "We Own It", filePath: "music/3.mp3", coverPath: "images/3.jpg", artist: "-Wiz Khalifa, 2 Chainz", timer:"3:47"},
    {S: 4, songName: "Not Afraid", filePath: "music/4.mp3", coverPath: "images/4.jpg", artist: "-Eminem", timer:"4:17"},
    {S: 5, songName: "Bad Liar", filePath: "music/5.mp3", coverPath: "images/5.jpg", artist: "-Imagine Dragons", timer:"4:44"},
    {S: 6, songName: "Dream On", filePath: "music/6.mp3", coverPath: "images/6.jpg", artist: "-Aerosmith", timer:"4:29"},
    {S: 7, songName: "Lose Yourself", filePath: "music/7.mp3", coverPath: "images/7.jpg", artist: "-Eminem", timer:"5:24"},
    {S: 8, songName: "Demons", filePath: "music/8.mp3", coverPath: "images/8.jpg", artist: "-Imagine Dragons", timer:"2:58"},
    {S: 9, songName: "Final Countdown", filePath: "music/9.mp3", coverPath: "images/9.jpg", artist: "-Europe", timer:"5:15"},
    {S: 10, songName: "Tonight I'm Lovin You", filePath: "music/10.mp3", coverPath: "images/10.jpg", artist: "-Enrique Iglesias", timer:"4:59"},
    {S: 11, songName: "Born Again", filePath: "music/11.mp3", coverPath: "images/11.jpg", artist: "-Cageman, Wholm, Michael Shynes", timer:"2:54"},
    {S: 12, songName: "Somebody That I Used To Know", filePath: "music/12.mp3", coverPath: "images/12.jpg", artist: "-Gotye", timer:"4:04"}
]





// Adding Images and Name
songItem.forEach((element,i)=> {
    element.getElementsByClassName("single")[0].innerText = songs[i].S
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("hello")[0].innerText = songs[i].songName
    element.getElementsByClassName("cbum")[0].innerText = songs[i].artist
    element.getElementsByClassName("songListPlay")[0].innerText = songs[i].timer
})



// For Play and Pause Button
document.getElementById("masterPlay").addEventListener('click', ()=> {
    if(audio.paused || audio.currentTime <= 0) {
        audio.play()
        document.getElementById("masterPlay").classList.remove("fa-circle-play")
        document.getElementById("masterPlay").classList.add("fa-circle-pause")
    }
    else{
        audio.pause()
        document.getElementById("masterPlay").classList.remove("fa-circle-pause")
        document.getElementById("masterPlay").classList.add("fa-circle-play")
        
    }
})

// Adjusting the range Bar
audio.addEventListener('timeupdate',()=> {
    let time = parseInt((audio.currentTime /audio.duration) * 100)
    musicBar.value = time
})
musicBar.addEventListener('change', ()=> {
    audio.currentTime = (musicBar.value * audio.duration)/100
})

// funciton makeAllPlay
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=> {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")

    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=> {
    element.addEventListener('click',(e)=> {
        makeAllPlays()
        index = parseInt(e.target.id)
        console.log(index)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audio.src = songs[index-1].filePath
        audio.play()
        document.getElementById("info").innerText = songs[index-1].songName
        document.getElementById("artist").innerText = songs[index-1].artist
        audio.currentTime = 0
        document.getElementById("masterPlay").classList.remove("fa-circle-play")
        document.getElementById("masterPlay").classList.add("fa-circle-pause")
        
    })
})

// Adding Previous and Next
document.getElementById("nxt").addEventListener('click',()=> {
    if(index > 12) {
        index = 0
    }
    else {
        index += 1
    }
    audio.src = 'music/' + index + '.mp3'
    audio.play()
    document.getElementById("info").innerText = songs[index-1].songName
    document.getElementById("artist").innerText = songs[index-1].artist
    audio.currentTime = 0
    document.getElementById("masterPlay").classList.remove("fa-circle-play")
    document.getElementById("masterPlay").classList.add("fa-circle-pause")
})
document.getElementById("pre").addEventListener('click',()=> {
    if(index <= 0) {
        index = 0
        // currentTime = 0
    }
    else {
        index -= 1
    }
    audio.src = songs[index].filePath
    audio.play()
    document.getElementById("info").innerText = songs[index-1].songName
    document.getElementById("artist").innerText = songs[index-1].artist
    audio.currentTime = 0
    document.getElementById("masterPlay").classList.remove("fa-circle-play")
    document.getElementById("masterPlay").classList.add("fa-circle-pause")
})


// Creating hover effect on Sno
royal()



function royal() {
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
    document.getElementById("4").style.display = "none"
    document.getElementById("5").style.display = "none"
    document.getElementById("6").style.display = "none"
    document.getElementById("7").style.display = "none"
    document.getElementById("8").style.display = "none"
    document.getElementById("9").style.display = "none"
    document.getElementById("10").style.display = "none"
    document.getElementById("11").style.display = "none"
    document.getElementById("12").style.display = "none"
    $( ".one1" ).hover(
        function() {
          $( ".another1" ).css("display", "none")
          $( ".playing1" ).css("display", "block")
        //   document.getElementById("play1").addEventListener('click', ()=> {
        //     $(".playing1").removeClass("fa-circle-play")
        //     $(".playing1").addClass("fa-circle-pause")
        //   })
        }, function() {
            $( ".another1" ).css("display", "block")
            $( ".playing1" ).css("display", "none")
        }
      )
      $( ".two2" ).hover(
        function() {
          $( ".another2" ).css("display", "none")
          $( ".playing2" ).css("display", "block")
        }, function() {
            $( ".another2" ).css("display", "block")
            $( ".playing2" ).css("display", "none")
        }
      )
      $( ".three3" ).hover(
        function() {
          $( ".another3" ).css("display", "none")
          $( ".playing3" ).css("display", "block")
        }, function() {
            $( ".another3" ).css("display", "block")
            $( ".playing3" ).css("display", "none")
        }
      )
      $( ".four4" ).hover(
        function() {
          $( ".another4" ).css("display", "none")
          $( ".playing4" ).css("display", "block")
        }, function() {
            $( ".another4" ).css("display", "block")
            $( ".playing4" ).css("display", "none")
        }
      )
      $( ".five5" ).hover(
        function() {
          $( ".another5" ).css("display", "none")
          $( ".playing5" ).css("display", "block")
        }, function() {
            $( ".another5" ).css("display", "block")
            $( ".playing5" ).css("display", "none")
        }
      )
      $( ".six6" ).hover(
        function() {
          $( ".another6" ).css("display", "none")
          $( ".playing6" ).css("display", "block")
        }, function() {
            $( ".another6" ).css("display", "block")
            $( ".playing6" ).css("display", "none")
        }
      )
      $( ".seven7" ).hover(
        function() {
          $( ".another7" ).css("display", "none")
          $( ".playing7" ).css("display", "block")
        }, function() {
            $( ".another7" ).css("display", "block")
            $( ".playing7" ).css("display", "none")
        }
      )
      $( ".eight8" ).hover(
        function() {
          $( ".another8" ).css("display", "none")
          $( ".playing8" ).css("display", "block")
        }, function() {
            $( ".another8" ).css("display", "block")
            $( ".playing8" ).css("display", "none")
        }
      )
      $( ".nine9" ).hover(
        function() {
          $( ".another9" ).css("display", "none")
          $( ".playing9" ).css("display", "block")
        }, function() {
            $( ".another9" ).css("display", "block")
            $( ".playing9" ).css("display", "none")
        }
      )
      $( ".ten1" ).hover(
        function() {
          $( ".another10" ).css("display", "none")
          $( ".playing10" ).css("display", "block")
        }, function() {
            $( ".another10" ).css("display", "block")
            $( ".playing10" ).css("display", "none")
        }
      )
      $( ".el1" ).hover(
        function() {
          $( ".another11" ).css("display", "none")
          $( ".playing11" ).css("display", "block")
        }, function() {
            $( ".another11" ).css("display", "block")
            $( ".playing11" ).css("display", "none")
        }
      )
      $( ".nextGen12" ).hover(
        function() {
          $( ".nextGen1" ).css("display", "none")
          $( ".nextGen" ).css("display", "block")
        }, function() {
            $( ".nextGen1" ).css("display", "block")
            $( ".nextGen" ).css("display", "none")
        }
      )
    }
    
    
