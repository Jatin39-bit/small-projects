const apiurl="https://api.quotable.io/random"
const quote=document.querySelector(".quote")
const author=document.getElementById("author")

async function getquote(){
    const response= await fetch(apiurl);
    const data = await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote()

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML +"\n\n"+"--- by" + author.innerHTML,"Tweet window","width=800","height=600")
}

