let arrayRespostas = [];
let retorna;


function refresh() {
    window.location.reload()
}
function compare() { 
	return Math.random() - 0.5; 
}

//FUNÇÃO QUE LIMPA A HOME E RENDERIZA TODO O QUIZ SELECIONADO

function goToQuiz(quizz) {
    renderQuizzPage();    
    renderQuizz();
}

function renderQuizzPage(){
    document.querySelector('.first-page').classList.add('hidden');
    let quizzPage = document.querySelector('.quizzPage');
    quizzPage.classList.remove('hidden');
    quizzPage.innerHTML = "";
    
    
}

function renderQuizz() {
    let banner = document.querySelector('.quizzBanner');
    let questoes = document.querySelector('.quizzAnswers');
    questoes.innerHTML
   

    banner.innerHTML = 
    `
    <div class="quizzBanner">   
                <img src="${quizz.image}" alt="">
                <h3>${quizz.title}</h3>
            </div>
    `

    for (let i = 0; i < retorna.questoes.length; i++){
        questoes.innerHTML = 
        `
        <div class="quizzAnswers">
        <div>
            <h4>Qual é a comida mais famosa?</h4>
        </div>
        <div class="containerQuizzes">
            <div>
                <img src="./assets/img/brownie.jpeg" alt="" class="choosenAnswer">
                <p>bxcxbbxcv</p>
            </div>
            <div>
                <img src="./assets/img/carbonara.jpeg" alt="" class="choosenAnswer">
                <p>zxczc</p>
            </div>
            <div>
                <img src="./assets/img/bife-a-milanesa.jpeg" alt="" class="choosenAnswer">
                <p>bife a asdasdsada</p>
            </div>
            <div>
                <img src="./assets/img/a-la-minuta.jpeg" alt="">
                <p>asdsdsad</p>
        `
    }
}