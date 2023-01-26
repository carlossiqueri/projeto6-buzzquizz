let quizObjeto = {
    title: "",
    image: "",
    questions: [],
    levels: []
}

let i;
let quizzesArray = []
let firstPage = document.querySelector('.first-page')
let quizCreation = document.querySelector('.quizz-creation')

function pageCreateQuiz() {
    firstPage.classList.add('hidden');
    quizCreation.classList.remove('hidden')
}

//função para obter os quizzes da api
function getQuizzes() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promise.then(getQuizzesSucess)

}
//função para renderizar os quizzes e criar uma array com todos os objetos dos quizzes
//elemento.data[i] === quizzesArray[i]
function getQuizzesSucess(elemento) {
    const showQuiz = document.querySelector('.all-quizzes')
    for (i = 49; i >= 0; i = i - 1) {
        quizzesArray.unshift(elemento.data[i])
        showQuiz.innerHTML = `
        <div class="quizz" onclick="goToQuizz(this)">
            <img src=${elemento.data[i].image}>
            <figcaption>${elemento.data[i].title}</figcaption>
        </div>`
    }
}
getQuizzes()