const quizData = [
    {
        question: "How many years after a leap year will another leap year occur?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
    {
        question:"Which year is a leap year?",
        a: "2022",
        b: "2024",
        c: "2026",
        d: "2030",
        correct: "b",
    },
    {
        question: "Is 100 is a leap year?",
        a: "No",
        b: "Yes",
        c: "Either leap year or non leap year",
        d: "Neither leap year nor non leap year",
        correct: "a",
    },
    {
        question: "If it is a leap year, which date will be added in the month of February?",
        a: "28",
        b: "29",
        c: "30",
        d: "31",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})