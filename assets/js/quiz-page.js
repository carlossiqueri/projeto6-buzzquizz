let posicao;
let click = 0;
let pontuacao = 0;
let idRender;
let arrayRespostas = [];
let retorna;
let contador = 0;
let acertos = 0;

function goToQuiz(){
    let tela1 = document.querySelector('.first-page')
    let tela2 = document.querySelector('.quizzPage')
    let tela3 = document.querySelector('.quizz-creation')

    tela1.classList.add('hidden')
    tela2.classList.remove('hidden')
    tela3.classList.add('hidden')

}

mockQuizz1 = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [
        {
            title: "Título da pergunta 1",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 2",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "Título da pergunta 3",
            color: "#123456",
            answers: [
                {
                    text: "Texto da resposta 1",
                    image: "https://http.cat/411.jpg",
                    isCorrectAnswer: true
                },
                {
                    text: "Texto da resposta 2",
                    image: "https://http.cat/412.jpg",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 2",
            image: "https://http.cat/412.jpg",
            text: "Descrição do nível 2",
            minValue: 50
        }
    ]
}


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
    //selectUserQuizz();
    //selectQuizz();
}

function renderQuizzPage() {
    document.querySelector('.first-page').classList.add('hidden');
    let quizzPage = document.querySelector('.quizzPage');
    quizzPage.classList.remove('hidden');
    quizzPage.querySelector('.quizzBanner').innerHTML = "";
    quizzPage.querySelector('.quizzAnswers').innerHTML = "";
    quizzPage.querySelector('.containerLevels').innerHTML = "";

}

function renderQuizz() {
    let banner = document.querySelector('.quizzBanner');
    let respostas = document.querySelector('.quizzAnswers');


    banner.innerHTML =
        `
    <div class="quizzBanner">   
                <img src="${mockQuizz1.image}" alt="">
                <h3>${mockQuizz1.title}</h3>
            </div>
    `

    for (let i = 0; i < mockQuizz1.questions.length; i++) {
        respostas.innerHTML = respostas.innerHTML +
            `
        <div class="quizzAnswers">
        <div>
            <h4>${mockQuizz1.tittle}</h4>
        </div>
        <div class="containerQuizzes">
            <div onclick="selectedAnswer(this)">
                <img src="${mockQuizz1.image}">
                <p>${mockQuizz1.text}</p>
            </div>
            <div onclick="selectedAnswer(this)">
                <img src="${mockQuizz1.image}" alt="">
                <p>${mockQuizz1.text}</p>
            </div>
            <div onclick="selectedAnswer(this)">
                <img src="${mockQuizz1.image}" alt="">
                <p>${mockQuizz1.text}</p>
            </div>
            <div onclick="selectedAnswer(this)">
                <img src="${mockQuizz1.image}" alt="">
                <p>${mockQuizz1.text}</p>
        `
        //arrayRespostas.push(respostas);
    }

    let level = document.querySelector('.containerLevels');
    level.innerHTML = level.innerHTML +
    `
    <div class="containerLevels">
                <div class="levelTitle">
                    <h5>${mockQuizz1.levels.title}</h5>
                </div>
                <div class="levelDescription">
                    <img src="${mockQuizz1.levels.image}">
                    <p>${mockQuizz1.levels.text}.</p>
                </div>
            </div>
    `
}

//QUIZZ USER
function selectUserQuizz(element) {
    click = 0;
    score = 0;
    window.scrollTo(0, 0);
    let quizzList = document.querySelectorAll('.my-quizzes-all .my-quizzes-list');

    for (let i = 0; i < quizzList.length; i++) {
        if (element === quizzList[i]) {
            idToBeRendered = element.id;
        }
    }
    catchingId();
}

//QUIZ OUTROS 

function selectQuizz(element) {
    click = 0;
    score = 0;
    window.scrollTo(0, 0);
    let quizzList = document.querySelectorAll('.all-quizzes');

    for (let i = 0; i < quizzList.length; i++) {
        if (element === quizzList[i]) {
            position = i;
        }
        idToBeRendered = Quizz[position].id;
        catchingId();
    }

    function catchingId() {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idToBeRendered}`);
        promise.then(r => {
            goodresp(r);
        });


    }
}

function selectedAnswer(answer) {
    contador++;
    console.log('clicou');
    choosenAnswer();

}

function increaseAcertos() {
    if (respostaClicada === respostaCerta) {
        acertos++;
    }
}

function choosenAnswer() {
    // desenvolvendo uma lógica que percorra o array das respostas e identifique se a resposta esta correta ou não
    for (let i = 0; i < arrayRespostas.length; i++) {
        if (resposta[i] !== answer) {
            resposta.classList.add('choosenAnswer'); // add opacidade
        }
    }
    /* function scrollAnswers(){
        respostas.scrollIntoView();
    }
    setTimeout(scrollAnswers, 2000); */
}

function checkAnswer() {
    for (let i = 0; i < arrayRespostas.length; i++) {
        if (resposta[i] === respostaCerta) {
            resposta.classList.add('respostaCerta');
        } else {
            resposta.classList.add('respostaErrada');
        }
    }
}