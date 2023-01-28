
let i;
let quizzesArray = []
let firstPage = document.querySelector('.first-page')
let quizCreation = document.querySelector('.quizz-creation')
let myQuizzes = document.querySelector('.my-quizzes')
let menuQuiz = document.querySelector('.menu-quiz')

//FUNÇÃO IR PARA PAGINA DE CRIAÇÃO DE QUIZ
function pageCreateQuiz() {
    firstPage.classList.add('hidden');
    quizCreation.classList.remove('hidden')
}

//FUNÇÃO TRAZER QUIZZES DO SERVIDOR
function getQuizzes() {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promisse.then(getQuizzesSucess)

    promisse.catch(() => {
        alert("Algo inesperado aconteceu, a pagina sera reiniciada")
        window.location.reload(true)
    })

}

// FUNÇÃO DE PEGAR QUIZZES E MOSTRAR NA TELA
function getQuizzesSucess(element) {
    const showQuiz = document.querySelector('.all-quizzes')
    showQuiz.innerHTML = '';

    for (i = 49; i >= 0; i = i - 1) {
        quizzesArray.unshift(element.data[i])
        const showQuizList = `
        <div class="quiz" id="${element.data[i].id}" onclick="goToQuiz(this)">
            <img src=${element.data[i].image}>
            <figcaption>${element.data[i].title}</figcaption>
        </div>`

        showQuiz.innerHTML += showQuizList
    }
}

//FUNÇÃO TESTE PARA CAPTURAR 'SEUS QUIZZES'
function getUserQuizzesSucess() {

    let localQuizzes = JSON.parse(localStorage.getItem('my-quizzes-list'))

    if(localQuizzes != null && localQuizzes.length > 0) {
        let userQuizzes = document.querySelector('.my-quizzes-list')
        menuQuiz.classList.add('hidden')
        myQuizzes.classList.remove('hidden')

        if(!localQuizzes) return 
        localQuizzes.forEach(element => {
            userQuizzes.innerHTML += `
            <div class="my-quiz" id="${element.data[i].id}" onclick="goToMyQuiz(this)">
                <img src=${element.data[i].image}>
                <figcaption>${element.data[i].title}</figcaption>
            </div>`
        })
    }

}

getQuizzes()
