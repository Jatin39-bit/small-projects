
const questions=[
    {
    question:"Which is largest animal in the world?",
    answers:[
        {text: "Shark",correct: false},
        {text: "Blue whale",correct: true},
        {text: "Elephant",correct: false},
        {text: "Giraffe",correct: false},
    ]
},
{
    question:"Which is the smallest country in the world?",
    answers:[
        {text: "vantican city",correct: true},
        {text: "Bhutan",correct: false},
        {text: "Nepal",correct: false},
        {text: "Sri lanka",correct: false},
    ]
},
{
    question:"Which is largest desert in the world?",
    answers:[
        {text: "Kalahari",correct: false},
        {text: "Gobi",correct: false},
        {text: "Sahara",correct: false},
        {text: "Antartica",correct: true},
    ]
},
{
    question:"Which is smallest continent in the world?",
    answers:[
        {text: "Asia",correct: false},
        {text: "Australia",correct: true},
        {text: "Arctic",correct: false},
        {text: "Africa",correct: false},
    ]
}
]
const question= document.getElementById("question")
const ansbtn= document.getElementById("ansbtn")
const nextbtn= document.getElementById("nextbtn")

let currentquestionindex=0;
let score=0;

function startquiz(){
    currentquestionindex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showquestion()
}

function showquestion(){
    resetstate();
    let currentquestion = questions[currentquestionindex];
    let questionno= currentquestionindex +1;
    question.innerHTML = questionno+"."+ currentquestion.question;

    currentquestion.answers.forEach(answer =>{
        const button=document.createElement("button")
        button.innerHTML =answer.text;
        button.classList.add("btn")
        ansbtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectans)
    })
}

function resetstate(){
    nextbtn.style.display="none"
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function selectans(e){
    const selectedbtn =e.target;
    const iscorrect = selectedbtn.dataset.correct ==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect")
    }
    Array.from(ansbtn.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
    nextbtn.style.display="block"
}

function showscore(){
    resetstate();
    question.innerHTML =`You Scored${score} out of ${questions.length}!`;
    nextbtn.innerHTML ="Play Again";
    nextbtn.style.display ="block"
}

function handlenextbtn(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showquestion();
    }else{
        showscore();
    }
}

nextbtn.addEventListener("click", () =>{
    if(currentquestionindex < questions.length){
        handlenextbtn()
    }else{
        startquiz()
    }
})

startquiz()