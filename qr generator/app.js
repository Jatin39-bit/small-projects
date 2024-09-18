const apiurl="http://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
const img=document.getElementById("img")
const text=document.getElementById("text")
const btn=document.getElementById("btn")
const container=document.querySelector(".image")

function qr(){
    if(text.value !== ""){
        container.innerHTML =""
        let img=document.createElement("img")
        img.classList.add("img")
        container.appendChild(img)
        img.src=apiurl+text.value
        container.style.display="block"
    }else{
        text.classList.add("error")
        setTimeout(()=>{
            text.classList.remove("error")
        },500)
    }
}

text.addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
        qr()
    }
})




