let posicao;
let click = 0;
let pontuacao = 0;
let a =[];
let idRender;
let retorna;
let t;

function selectUserQuizz(element){
    click = 0;
    pontuacao = 0;
    window.scrollTo(0, 0);
    let quizzList = document.querySelectorAll(".my-quizzes-all .my-quizzes-list .my-quiz");

    for (let i = 0; i<quizzList.length; i++){
        if(element === quizzList[i]){
            idRender = element.id
        }
    }

    trazerId();
}

function selectQuizz(element){
    click = 0;
    pontuacao = 0;
    window.scrollTo(0, 0);
    let quizzList = document.querySelectorAll(".all-quizzes .quiz");

    for (let i = 0; i<quizzList.length; i++){
        if(element === quizzList[i]){
            posicao = i;
        }
    }
    idRender = Quizz[posicao].id
    trazerId();
}


function trazerId(){
    let promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idRender}`);
    promise.then(r => {
        respostaBoa(r)
        goToQuiz();
        renderQuestions();
    });
}

function respostaBoa(r){
    retorna = r.data;
    console.log('TOP:')
    console.log(retorna);
}

function goToQuiz(){
    let tela1 = document.querySelector('.first-page')
    let tela2 = document.querySelector('.quizzPage')
    let tela3 = document.querySelector('.quizz-creation')

    tela1.classList.add('hidden')
    tela2.classList.remove('hidden')
    tela3.classList.add('hidden')

}

function compare() { 
	return Math.random() - 0.5; 
}


/*function refresh() {
    window.location.reload()
}
function compare() { 
	return Math.random() - 0.5; 
}

//FUNÇÃO QUE LIMPA A HOME E RENDERIZA TODO O QUIZ SELECIONADO

function goToQuiz(quizz) {
    //teste buscando id do quiz selecionado
    const elementIdQuiz = quizz.getAttribute('id');
    
    return console.log(elementIdQuiz)
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
    scrollAnswers() {
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
} */