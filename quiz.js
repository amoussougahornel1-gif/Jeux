const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Berlin", "Madrid", "Paris", "Londres"],
        correct: 2,
    },
    {
        question: "Quel club a remporté la Ligue des Champions 2024 ?",
        options: ["Real Madrid", "Manchester City", "Bayern Munich", "PSG"],
        correct: 1,
    },
    {
        question: "Quel est le plus haut sommet du monde ?",
        options: ["Mont Kilimandjaro", "Mont Everest", "Mont Blanc", "Mont McKinley"],
        correct: 1,
        image: "images/everest.jpg"
    },

    {
        question: "Qui a écrit Roméo et Juliette ?",
        options: ["Victor Hugo", "Molière", "William Shakespeare", "Dante"],
        correct: 2,
    },
    {
        question: "Quel est l’animal terrestre le plus rapide ?",
        options: ["Guépard", "Lion", "Antilope", "Léopard"],
        correct: 0,
    },
   {
    question: "Quelle ville est la capitale économique du Bénin ?",
    options: ["Porto-Novo", "Cotonou", "Parakou", "Ouidah"],
    correct: 1,
},

    {
        question: "Quelle est la planète la plus proche du Soleil ?",
        options: ["Vénus", "Mercure", "Mars", "Jupiter"],
        correct: 1,
    },
    {
        question: "Quel est le symbole chimique de l'or ?",
        options: ["Au", "Ag", "Fe", "O"],
        correct: 0,
    },
    {
        question: "Qui a peint la Joconde ?",
        options: ["Michel-Ange", "Leonardo da Vinci", "Raphaël", "Van Gogh"],
        correct: 1,
    },
    {
        question: "Quel pays est surnommé le pays du Soleil Levant ?",
        options: ["Chine", "Corée du Sud", "Japon", "Thaïlande"],
        correct: 2,
    }
];


let current = 0;
let score = 0;
let timer = 20;
let interval;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const timerDiv = document.getElementById("timer");
const progress = document.getElementById("progress");

function loadQuestion() {
    if(current >= questions.length) {
        localStorage.setItem("score", score);
        window.location.href = "result.html";
        return;
    }

    timer = 20;
    questionNumber.innerText = `Question ${current+1} / ${questions.length}`;
    questionText.innerText = questions[current].question;

    optionsDiv.innerHTML = "";
    questions[current].options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("btn-option");
        btn.addEventListener("click", () => checkAnswer(index));
        optionsDiv.appendChild(btn);
    });

    progress.style.width = `${(current/questions.length)*100}%`;

    clearInterval(interval);
    interval = setInterval(() => {
        timer--;
        timerDiv.innerText = `${timer}s`;
        if(timer <= 0){
            current++;
            loadQuestion();
        }
    }, 1000);
}

function checkAnswer(selected){
    if(selected === questions[current].correct){
        score++;
    }
    current++;
    loadQuestion();
}

loadQuestion();
