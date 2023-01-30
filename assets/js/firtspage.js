let firstPage = document.querySelector('.first-page')
let quizCreation = document.querySelector('.quizz-creation')
let testQuizz;
let Quizz;

function pageCreateQuiz() {
    firstPage.classList.add('hidden');
    quizCreation.classList.remove('hidden')
}

function getQuizzes(){
    const promisse = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    promisse.then(quizzes => {
        testQuizz = quizzes.data
        renderUserQuizzes(quizzes.data)
        renderQuizzes(quizzes.data)
    })

    promisse.catch(() => {
        alert("Algo inesperado aconteceu, a página será reiniciada")
        window.location.reload(true)
    })
}


function showMyQuizzes() {
    let hideMenu = document.querySelector('.menu-quiz')
    let showMuq = document.querySelector('.my-quizzes')

    hideMenu.classList.add('hidden')
    showMuq.classList.remove('hidden')
}

//Renderiza quizzes do usuário
function renderUserQuizzes(){
    
    //Resgata objetos salvos em localstorage em formato de string e transforma em JSON
    let localQuizzes = JSON.parse(localStorage.getItem('my-quizzes'))
    if(localQuizzes != null && localQuizzes.length > 0){
        //Resgata div que contém os quizzes criados pelo usuário
        showMyQuizzes()
        let userQuizzesDiv = document.querySelector('.my-quizzes-all .my-quizzes-list')
        //Percorre cada objeto-quizz do localStorage
        if(!localQuizzes) return
        localQuizzes.forEach(quiz => {
            userQuizzesDiv.innerHTML += `
            <div class="my-quiz" id="${quiz.id}" onclick="goToQuiz(this)">
                <img src=${quiz.image}>
                <figcaption>${quiz.title}</figcaption>
            </div>
            `
        })
        
    }
    
}

function renderQuizzes(quizzes){
    Quizz = quizzes
    //Resgata div que contém todos os quizes
    let allQuizzes = document.querySelector('.all-quizzes')
    quizzes.forEach(quiz => {
        allQuizzes.innerHTML += `
        <div class="quiz" id="${quiz.id}" onclick="goToQuiz(this)">
            <img src=${quiz.image}>
            <figcaption>${quiz.title}</figcaption>
        </div>
        `
    });
}

getQuizzes()
