let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector(".playgame");

const userscorepara=document.querySelector("#user-score")
const comprscorepara=document.querySelector("#comp-score")

const getcompchoice=()=>{
    const options=["rock","paper","scissors"]
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawgame=()=>{
    msg.innerText="match was draw";
    msg.style.backgroundcolor="rgb(10, 3, 37)";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText="you win";
        msg.style.backgroundcolor="green";
        userscore++;
        userscorepara.innerText=userscore;
    }else{
        msg.innerText="you lose!"
        msg.style.backgroundcolor="red";
        compscore++;
        comprscorepara.innerText=compscore;
    }
};


const playgame=(userchoice)=>{
    const compchoice=getcompchoice();

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin = compchoice==="scissors"?false:true;
        }else{
            compchoice==="rock"?false:true;
        }
        showwinner(userwin, userchoice,compchoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
