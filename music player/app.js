let progress=document.getElementById("progress")
let song=document.getElementById("song")
let ctrlicon=document.getElementById("ctrlicon")

song.onloadedmetadata = function(){
    progress.max =song.duration;
    progress.value= song.currentTime;
}

function playpause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
        check()
    }else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
        check()
    }
}

if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime;
    },500);
}

progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
    check()
}
document.addEventListener("keypress",function(e){
    if(e.key == " " ||
        e.code== "Space" ||
        e.keyCode == 32){
    if(song.paused){
        song.play()
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play"); 
        check()
    }else{
        song.pause()
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
        check()
    }
    }
})

song.addEventListener("ended", function() {
    song.currentTime = 0;
    song.play();
});

function check(){
    if(song.paused){
        ctrlicon.classList.add("fa-play");
    }else{
        ctrlicon.classList.add("fa-pause");
    }
}

