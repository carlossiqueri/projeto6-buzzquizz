let quizObjeto = {
	title: "",
	image: "",
	questions:[],
	levels:[]
}

let i;
let quizzesArray = []
let firstPage = document.querySelector('.first-page')
let quizCreation = document.querySelector('.quiz-creation')

//FUNÇÃO IR PARA PAGINA DE CRIAÇÃO DE QUIZ
function pageCreateQuiz() {
    firstPage.classList.add('hidden');
    quizCreation.classList.remove('hidden')
}

//FUNÇÃO TRAZER QUIZZES DO SERVIDOR
function getQuizzes(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promisse.then(getQuizzesSucess)

    promisse.catch(() => {
        alert("Algo inesperado aconteceu, a pagina sera reiniciada")
        window.location.reload(true)
    })

}

// FUNÇÃO DE PEGAR QUIZZES E MOSTRAR NA TELA
function getQuizzesSucess(elemento){
    const showQuiz = document.querySelector('.all-quizzes')
    showQuiz.innerHTML = '';

    for(i = 49; i >= 0; i = i-1){ 
        quizzesArray.unshift(elemento.data[i])
        const showQuizList = `
        <div class="quiz" onclick="goToQuizz(this)">
            <img src=${elemento.data[i].image}>
            <figcaption>${elemento.data[i].title}</figcaption>
        </div>`

        showQuiz.innerHTML += showQuizList
    }
}
getQuizzes()
