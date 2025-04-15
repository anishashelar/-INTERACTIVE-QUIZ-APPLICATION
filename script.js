const questions = {
    hiphop: [
        { q: "Who is the 'Godfather of Hip-Hop Dance'?", options: ["Michael Jackson", "Kool Herc", "Usher", "Chris Brown"], a: "Kool Herc" },
        { q: "Which city is the birthplace of hip-hop?", options: ["Los Angeles", "New York", "Chicago", "Miami"], a: "New York" },
        { q: "What is 'popping' in hip-hop?", options: ["A dance move", "A rap style", "A DJ technique", "A graffiti style"], a: "A dance move" },
        { q: "Which K-pop group incorporates hip-hop?", options: ["BTS", "BLACKPINK", "TWICE", "EXO"], a: "BTS" },
        { q: "Name a basic breakdancing move.", options: ["Toprock", "Waltz", "Salsa", "Tango"], a: "Toprock" }
    ],
    ballet: [
        { q: "What is the French term for a ballet jump?", options: ["Pirouette", "Jeté", "Arabesque", "Plié"], a: "Jeté" },
        { q: "Who founded classical ballet?", options: ["Marius Petipa", "Leonardo da Vinci", "Mozart", "Tchaikovsky"], a: "Marius Petipa" },
        { q: "What does 'en pointe' mean?", options: ["Dancing on tiptoes", "Spinning", "Jumping", "Leaping"], a: "Dancing on tiptoes" },
        { q: "What is a tutu?", options: ["A ballet skirt", "A dance move", "A costume", "A type of shoe"], a: "A ballet skirt" },
        { q: "Famous ballet performance?", options: ["Swan Lake", "Nutcracker", "Romeo & Juliet", "All of the above"], a: "All of the above" }
    ],
    kpop: [
        { q: "Which K-pop group has the hardest choreography?", options: ["BTS", "EXO", "Seventeen", "BLACKPINK"], a: "Seventeen" },
        { q: "Who is BTS’s main choreographer?", options: ["Son Sung Deuk", "Lisa", "Kai", "Hyuna"], a: "Son Sung Deuk" },
        { q: "What is 'point choreography'?", options: ["A move that highlights the song", "A dance battle", "A fan dance", "A traditional Korean dance"], a: "A move that highlights the song" },
        { q: "Which BLACKPINK song has an iconic move?", options: ["Kill This Love", "DDU-DU DDU-DU", "How You Like That", "BOOMBAYAH"], a: "Kill This Love" },
        { q: "What is a 'random dance challenge'?", options: ["Dancing to random K-pop songs", "A solo performance", "A traditional dance", "A flash mob"], a: "Dancing to random K-pop songs" }
    ]
};

let currentQuestions = [];
let questionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
    let selectedStyle = localStorage.getItem("selectedStyle");
    currentQuestions = questions[selectedStyle];
    document.getElementById("quiz-title").innerText = selectedStyle.toUpperCase() + " Quiz";
    showQuestion();
});

function showQuestion() {
    if (questionIndex < currentQuestions.length) {
        let questionData = currentQuestions[questionIndex];
        document.getElementById("question").innerText = questionData.q;
        let optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        questionData.options.forEach(option => {
            let button = document.createElement("button");
            button.innerText = option;
            button.onclick = () => checkAnswer(option);
            optionsDiv.appendChild(button);
        });
    } else {
        showResult();
    }
}

function checkAnswer(answer) {
    if (answer === currentQuestions[questionIndex].a) score++;
    questionIndex++;
    showQuestion();
}

function showResult() {
    document.getElementById("score").innerText = score;
    localStorage.setItem("quizScore", score);
}
