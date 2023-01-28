//Variaveis para formar o objeto do quizz

let amountQuizzQuestions;
let amountQuizzlevels;

let createdQuizz = {
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

let incorrectQuestionsTwo = {
    text: "unassigned",
    image: "unassigned",
    isCorrectAnswer: false
}

let incorrectQuestionsThree = {
    text: "Texto da resposta incorreta",
    image: "https://http.cat/412.jpg",
    isCorrectAnswer: false
}

function saveAndGoToQuizzQuestions() {

    checkSaveQuizzTitle();
    checkSaveQuizzImgUrl();
    checkSaveAmountQuizzQuestions();
    checkSaveAmountQuizzLevels();
    proceedToQuestionsOrAlert();
}

function checkSaveQuizzTitle() {
    const checkLength = document.querySelector(".quizz-basic-info input:first-child").value.length;
    const minLength = 19;
    const maxLength = 66;
    if (checkLength > minLength && checkLength < maxLength) {
        createdQuizz.title = document.querySelector(".quizz-basic-info input:first-child").value;
    }
}

function checkSaveQuizzImgUrl() {
    //Falta editar a checagem se é URL. (guil)
    createdQuizz.image = document.querySelector(".quizz-basic-info input:nth-child(2)").value;
}

function checkSaveAmountQuizzQuestions() {
    const checkAmount = Number(document.querySelector(".quizz-basic-info input:nth-child(3)").value);
    const minAmount = 2;
    if (checkAmount > minAmount) {
        amountQuizzQuestions = document.querySelector(".quizz-basic-info input:nth-child(3)").value;
    }
}

function checkSaveAmountQuizzLevels() {
    const checkAmount = Number(document.querySelector(".quizz-basic-info input:last-child").value);
    const minAmount = 1;
    if (checkAmount > minAmount) {
        amountQuizzlevels = document.querySelector(".quizz-basic-info input:last-child").value;
    }
}

function proceedToQuestionsOrAlert() {
    if (createdQuizz.title == undefined ||
        createdQuizz.image == undefined ||
        amountQuizzQuestions == undefined ||
        amountQuizzlevels == undefined) {

        alert(
            `O título tem que ter mais do que 20 e menos do que 65;
A imagem precisa ser um URL válido;
A quantiddade de perguntas deve ser ao menos 3;
A quantidade de níveis deve ser ao menos 2.`);
    } else {
        proceedToQuestions();
    }
}

function proceedToQuestions() {
    document.querySelector(".quizz-creation.basic-info").classList.add("hidden");
    document.querySelector(".quizz-creation.questions").classList.remove("hidden");
    showQuestionBoxes();
}

function showQuestionBoxes() {
    const quizzQuestionBoxes = document.querySelector(".quizz-questions");
    for (let i = 1; i <= amountQuizzQuestions; i++) {
        quizzQuestionBoxes.innerHTML = quizzQuestionBoxes.innerHTML +
            `<div class="small-box-question" onclick="enlargeToEditQuestion(this)">
                <p>Pergunta ${i}</p>
                <ion-icon name="create-outline"></ion-icon>
                <div class="larger-to-edit vanish">
                    <p>Pergunta ${i}</p>
                    <input type="text" placeholder="Texto da pergunta">
                    <input type="text" placeholder="Cor de fundo da pergunta">
                    <p>Resposta correta</p>
                    <input type="text" placeholder="Resposta correta">
                    <input type="url" placeholder="URL da imagem">
                    <p>Respostas incorretas</p>
                    <input type="text" placeholder="Resposta incorreta">
                    <input type="url" placeholder="URL da imagem">
                    <input type="text" placeholder="Resposta incorreta">
                    <input type="url" placeholder="URL da imagem">
                    <input type="text" placeholder="Resposta incorreta">
                    <input type="url" placeholder="URL da imagem">
                </div>
            </div>`
    }
}

function enlargeToEditQuestion(object) {

    if (document.querySelector("ion-icon.vanish")) {
        document.querySelector("ion-icon.vanish").classList.remove("vanish");
        document.querySelector("p.vanish").classList.remove("vanish");
        for (let i = 0; i < document.querySelectorAll(".larger-to-edit").length; i++) {
            document.querySelectorAll(".larger-to-edit")[i].classList.add("vanish");
        }
    }
    object.querySelector("ion-icon").classList.add("vanish");
    object.querySelector("p").classList.add("vanish");
    object.querySelector(".larger-to-edit").classList.remove("vanish");
}

function saveAndGoToQuizzLevels() {

    for (let i = 0; i < amountQuizzQuestions; i++) {

        const quizzQuestions = document.querySelectorAll(".larger-to-edit");

        checkSaveQuizzQuestionText(quizzQuestions, i);
        checkSaveQuizzQuestionBackGroundColor(quizzQuestions, i);
        checkSaveQuizzCorrectAnswer(quizzQuestions, i);
        checkSaveQuizzCorrectAnswerImgUrl(quizzQuestions, i);
        checkSaveQuizzFirstIncorrectAnswer(quizzQuestions, i);
        checkSaveQuizzFirstIncorrectAnswerImgUrl(quizzQuestions, i);
        checkSaveQuizzSecondIncorrectAnswer(quizzQuestions, i);
        checkSaveQuizzSecondIncorrectAnswerImgUrl(quizzQuestions, i);
        checkSaveQuizzThirdIncorrectAnswer(quizzQuestions, i);
        checkSaveQuizzThirdIncorrectAnswerImgUrl(quizzQuestions, i);
    }
    console.log(createdQuizz);
}

function checkSaveQuizzQuestionText(listOfNodes, counter) {
    const checkLength = listOfNodes[counter].querySelector("input:Nth-of-type(1)").value.length;
    const minLength = 19;

    if (checkLength > minLength) {
        createdQuizz.questions[counter].title = listOfNodes[counter].querySelector("input:Nth-of-type(1)").value
    }
}

function checkSaveQuizzQuestionBackGroundColor(listOfNodes, counter) {
    const checkLength = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(2)").value.length;
    const theLength = 7;
    const stringColor = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(2)").value;
    const isColor = stringColor.includes("#", 0);

    if (theLength === 7 && isColor) {
        createdQuizz.questions[counter].color = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(2)").value;
    }
}

function checkSaveQuizzCorrectAnswer(listOfNodes, counter) {
    const isThereString = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(3)").value;

    if (isThereString !== undefined) {
        createdQuizz.questions[counter].answers[0].text = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(3)").value;
    }
}

function checkSaveQuizzCorrectAnswerImgUrl(listOfNodes, counter) {
    //Falta realizar checagem para verificar se é URL. (guil)
    createdQuizz.questions[counter].answers[0].image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(4)").value;
    createdQuizz.questions[counter].answers[0].isCorrectAnswer = true;
}

function checkSaveQuizzFirstIncorrectAnswer(listOfNodes, counter) {
    const isThereString = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(5)").value;

    if (isThereString !== undefined) {
        createdQuizz.questions[counter].answers[1].text = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(5)").value;
    }
}

function checkSaveQuizzFirstIncorrectAnswerImgUrl(listOfNodes, counter) {
    //Falta realizar checagem para verificar se é URL. (guil)
    createdQuizz.questions[counter].answers[1].image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(6)").value;
    createdQuizz.questions[counter].answers[1].isCorrectAnswer = false;
}

function checkSaveQuizzSecondIncorrectAnswer(listOfNodes, counter) {
    const isThereString = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(7)").value;

    if (isThereString !== undefined) {
        incorrectQuestionsTwo.text = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(7)").value;
    }
}

function checkSaveQuizzSecondIncorrectAnswerImgUrl(listOfNodes, counter) {
    //Falta realizar checagem para verificar se é URL. (guil)

    incorrectQuestionsTwo.image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(8)").value;
    incorrectQuestionsTwo.isCorrectAnswer = false;

    if (incorrectQuestionsTwo.text !== "" && incorrectQuestionsTwo.image !== "") {
        createdQuizz.questions[counter].answers.push(incorrectQuestionsTwo);
    }
}

function checkSaveQuizzThirdIncorrectAnswer(listOfNodes, counter) {
    const isThereString = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(9)").value;

    if (isThereString !== undefined) {
        incorrectQuestionsThree.text = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(9)").value;
    }
}

function checkSaveQuizzThirdIncorrectAnswerImgUrl(listOfNodes, counter) {
    //Falta realizar checagem para verificar se é URL. (guil)

    incorrectQuestionsThree.image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(10)").value;
    incorrectQuestionsThree.isCorrectAnswer = false;

    if (incorrectQuestionsThree.text !== "" && incorrectQuestionsThree.image !== "") {
        createdQuizz.questions[counter].answers.push(incorrectQuestionsThree);
    }
}




