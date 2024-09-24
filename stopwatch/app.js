let [seconds,minutes,hours]=[0,0,0]
let time=document.getElementById("watch")
let playbtn=document.getElementById("play")

function start(){
    timer = setInterval(()=>{
        seconds++;
        if(seconds == 60){
            seconds =0; 
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
        }
    }
    let h= hours <10 ? "0"+ hours : hours;
    let m= minutes <10 ? "0"+ minutes : minutes;
    let s= seconds <10 ? "0"+ seconds : seconds;

    time.innerHTML=`${h}:${m}:${s}`
},1000)
}

function actual(){
    start()
    playbtn.disabled="true"
}
function reset(){
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0]
    time.innerHTML="00:00:00"
    playbtn.disabled=false;
}
function pause(){
    clearInterval(timer);
    playbtn.disabled=false;
}
