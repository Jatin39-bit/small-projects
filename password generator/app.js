const big="QWERTYUIOPASDFGHJKLZXCVBNM";
const small="qwertyuiopasdfghjklzxcvbnm";
const symbol="~`!@#$%^&*()-_.?|";
const number="1234567890";

const input=document.getElementById("pass");
input.disabled=true;
input.style.color="black";
let password="";

function generate() {
    const allCharacters = big + small + symbol + number;
    password="";
    for (let i = 0; i < 10; i++) { 
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    input.value=password;
}

document.querySelector(".btn").addEventListener("click",function(){
    generate();
})

document.getElementById("copy").addEventListener("click", function () {
    const Copy = input.value;
    navigator.clipboard.writeText(Copy)
});
