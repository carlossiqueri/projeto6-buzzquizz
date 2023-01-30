let arrayRespostas = [];
let retorna;
let contador = 0;

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
    let respostas = document.querySelector('.quizzAnswers');
    respostas.innerHTML = '';
   

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

function increaseCont (){
    if(respostaClicada === respostaCerta){
        contador++;
    }
}

function choosenAnswer(){
    // desenvolvendo uma lógica que percorra o array das respostas e identifique se a resposta esta correta ou não
    for(let i = 0; i<arrayRespostas.length; i++){
        if(resposta[i] !== respostaClicada){
            resposta.classList.add('choosenAnswer'); // add opacidade
        }
    }
    scrollAnswers(){
        respostas.scrollIntoView();
    }
    setTimeout(scrollAnswers, 2000);
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