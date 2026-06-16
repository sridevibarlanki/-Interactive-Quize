const quizData = [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyper Transfer Markup Language"
],
answer:0
},

{
question:"Which language is used for styling?",
options:[
"HTML",
"CSS",
"Python",
"Java"
],
answer:1
},

{
question:"Which keyword declares variable in JS?",
options:[
"var",
"define",
"create",
"int"
],
answer:0
},

{
question:"Which company developed JavaScript?",
options:[
"Google",
"Netscape",
"Microsoft",
"Oracle"
],
answer:1
},

{
question:"Which method fetches API data?",
options:[
"getData()",
"fetch()",
"retrieve()",
"api()"
],
answer:1
}

];

let currentQuestion = 0;
let userAnswers = [];

function loadQuestion(){

let q = quizData[currentQuestion];

document.getElementById("question").innerHTML =
`${currentQuestion + 1}. ${q.question}`;

let optionsHTML = "";

q.options.forEach((option,index)=>{

optionsHTML += `
<div class="option"
onclick="selectAnswer(${index})">
${option}
</div>
`;

});

document.getElementById("options").innerHTML =
optionsHTML;
}

function selectAnswer(index){

userAnswers[currentQuestion] = index;

let options =
document.querySelectorAll(".option");

options.forEach(option=>{
option.classList.remove("correct","wrong");
});

let correctAnswer =
quizData[currentQuestion].answer;

if(index === correctAnswer){

options[index].classList.add("correct");

}
else{

options[index].classList.add("wrong");
options[correctAnswer].classList.add("correct");

}
}

function nextQuestion(){

if(currentQuestion < quizData.length - 1){

currentQuestion++;
loadQuestion();

}
}

function prevQuestion(){

if(currentQuestion > 0){

currentQuestion--;
loadQuestion();

}
}

function showResult(){

let score = 0;

quizData.forEach((q,index)=>{

if(userAnswers[index] === q.answer){

score++;

}

});

document.getElementById("result").innerHTML =
`Your Score: ${score}/${quizData.length}`;

}

loadQuestion();

async function getJoke(){

try{

const response =
await fetch(
"https://official-joke-api.appspot.com/random_joke"
);

const data = await response.json();

document.getElementById("jokeBox").innerHTML =
`${data.setup}<br><br><strong>${data.punchline}</strong>`;

}
catch(error){

document.getElementById("jokeBox").innerHTML =
"Failed to load joke.";

}

}