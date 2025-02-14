const questions = [
    {
        question: "what is (int) in c languae",
        answer: [
            { text: "Variable", correct: false },
            { text: "Name", correct: false },
            { text: "Word", correct: false },
            { text: "Data type", correct: true },

        ]
    },
    {
        question: "what is (float) in c languae",
        answer: [
            { text: "Variable", correct: false },
            { text: "Data type", correct: true },
            { text: "Name", correct: false },
            { text: "Word", correct: false },

        ]

    },
    {
        question: "Which programming language is mother of all programing lnaguage",
        answer: [
            { text: "C-languge", correct: true },
            { text: "Java", correct: false },
            { text: "Kotlin", correct: false },
            { text: "Pthon", correct: false },

        ]
    },
    {
        question: "Which is library function of c language",
        answer: [
            { text: "printf()", correct: false },
            { text: "scanf() ", correct: false },
            { text: "gets()", correct: false},
            { text: "All of the above", correct: true },

        ]

    },

];
const questionelement = document.getElementById("question");
const answerbutton = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
}
function showquestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionelement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
}
function resetstate(){
nextbutton.style.display="none";
while(answerbutton.firstChild){

    answerbutton.removeChild(answerbutton.firstChild);
}}
function selectAnswer(e)
{
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;

    }
    else{
        selectbtn.classList.add("incorrect");

    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
    
}
function showscore(){
    resetstate();
    questionelement.innerHTML=`You scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showquestion();

    }
    else{
        showscore();

    }
}

nextbutton.addEventListener("click",()=>{
    if (currentQuestionIndex<questions.length) {
        handlenextbutton();
        
    }
    else{
        startquiz();
    }
});


startquiz();