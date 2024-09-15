const note=document.querySelector(".note")
const create=document.querySelector(".create")
let notes=document.querySelectorAll(".input-box")

function showdata(){
    let data=localStorage.getItem("notesd")
    if (data !== null){
        note.innerHTML=data
    }
}
showdata()

function savedata(){
    localStorage.setItem("notesd",note.innerHTML)
}




create.addEventListener("click",() =>{
    let area = document.createElement("p");
    area.className="input-box"
    let img =document.createElement("img")
    area.setAttribute("contentEditable","true")
    img.classList.add("image-container"); 
    img.src = "1.webp";
    note.appendChild(area).appendChild(img)
    savedata()
    
})
note.addEventListener("click", function(e){
    if(e.target.tagName=== "IMG"){
        e.target.parentElement.remove();
        savedata()
    }
    else if(e.target.tagName === "P"){
        notes= document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                savedata()
            }
        })
    }
})


savedata()
