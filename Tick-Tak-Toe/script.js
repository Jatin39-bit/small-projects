let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");


let turnO= true;

const winpatterns =[
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turnO=true;
    enableboxes();

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="o";
            turnO=false;
        }else {
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    })
})

const checkwin = () =>{
    for(let pattern of winpatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
        
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                for (let box of boxes){
                    box.disabled=true;
                }
            }
        
        }
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

reset.addEventListener("click",resetgame)
