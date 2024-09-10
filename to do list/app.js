const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
const add= document.querySelector(".addd")


function addtask(){
    if(inputbox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        }
    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();

inputbox.addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
        addtask();
    }
})
