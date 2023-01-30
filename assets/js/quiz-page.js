let arrayRespostas = [];
let retorna;
let contador = 0;
let acertos = 0;


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
    selectUserQuizz();
    selectQuizz();
}

function renderQuizzPage(){
    document.querySelector('.first-page').classList.add('hidden');
    let quizzPage = document.querySelector('.quizzPage');
    quizzPage.classList.remove('hidden');
    quizzPage.innerHTML = "";
    
}

function renderQuizz() {
    let banner = document.querySelector('.quizzBanner');
    let respostas = document.querySelector('.quizzAnswers');
   

    banner.innerHTML = 
    `
    <div class="quizzBanner">   
                <img src="${quizz.image}" alt="">
                <h3>${quizz.title}</h3>
            </div>
    `

    for (let i = 0; i < retorna.questoes.length; i++){
        respostas.innerHTML = 
        `
        <div class="quizzAnswers">
        <div>
            <h4>${quizz.tittle}</h4>
        </div>
        <div class="containerQuizzes">
            <div onclick="selectedAnswer(this)">
                <img src="${quizz.image}">
                <p>${quizz.text}</p>
            </div>
            <div onclick="selectedAnswer(this)">
                <img src="${quizz.image}" alt="">
                <p>${quizz.text}</p>
            </div>
            <div onclick="selectedAnswer(this)">
                <img src="${quizz.image}" alt="">
                <p>${quizz.text}</p>
            </div>
            <div onclick="selectedAnswer(this)">
                <img src="${quizz.image}" alt="">
                <p>${quizz.text}</p>
        `
        arrayRespostas.push(respostas);
    }
}

//QUIZZ USER
function selectUserQuizz(element) {
    click = 0;
    score = 0;
    window.scrollTo(0,0);
    let quizzList = document.querySelectorAll('.my-quizzes-all .my-quizzes-list');

    for (let i = 0; i < quizzList.length; i++){
        if (element === quizzList[i]){
            idToBeRendered = element.id;
        }
    }
    catchingId();
}

//QUIZ OUTROS 

function selectQuizz(element){
    click = 0;
    score = 0;
    window.scrollTo(0,0);
    let quizzList = document.querySelectorAll('.all-quizzes');

    for(let i = 0; i<quizzList.length; i++){
        if(element === quizzList[i]){
            position = i;
        }
        idToBeRendered = Quizz[position].id;
        catchingId();
    }

    function catchingId (){
        let promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idToBeRendered}`);
        promise.then(r => {
            goodresp(r);
        });


    }
}

function selectedAnswer(answer){
    contador++;
    console.log('clicou');
    choosenAnswer();

}

function increaseAcertos (){
    if(respostaClicada === respostaCerta){
        acertos++;
    }
}

function choosenAnswer(){
    // desenvolvendo uma lógica que percorra o array das respostas e identifique se a resposta esta correta ou não
    for(let i = 0; i<arrayRespostas.length; i++){
        if(resposta[i] !== answer){
            resposta.classList.add('choosenAnswer'); // add opacidade
        }
    }
    /* function scrollAnswers(){
        respostas.scrollIntoView();
    }
    setTimeout(scrollAnswers, 2000); */
}

function checkAnswer (){
    for (let i = 0; i < arrayRespostas.length; i++){
        if(resposta[i] === respostaCerta){
            resposta.classList.add('respostaCerta');
        }else{
            resposta.classList.add('respostaErrada');
        }
    }
}