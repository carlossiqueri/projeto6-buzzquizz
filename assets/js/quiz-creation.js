
let amountQuizzQuestions;
let amountQuizzlevels;

let quizzQuestionsAreRight;
let quizzLevelsAreRight;

let createdQuizzId;

let createdQuizz = {
    title: "unassigned",
    image: "unassigned",
    questions: [
        {
            title: "unassigned",
            color: "unassigned",
            answers: [
                {
                    text: "unassigned",
                    image: "unassigned",
                    isCorrectAnswer: true
                },
                {
                    text: "unassigned",
                    image: "unassigned",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "unassigned",
            color: "unassigned",
            answers: [
                {
                    text: "unassigned",
                    image: "unassigned",
                    isCorrectAnswer: true
                },
                {
                    text: "unassigned",
                    image: "unassigned",
                    isCorrectAnswer: false
                }
            ]
        },
        {
            title: "unassigned",
            color: "unassigned",
            answers: [
                {
                    text: "unassigned",
                    image: "unassigned",
                    isCorrectAnswer: true
                },
                {
                    text: "unassigned",
                    image: "unassigned",
                    isCorrectAnswer: false
                }
            ]
        }
    ],
    levels: [
        {
            title: "unassigned",
            image: "unassigned",
            text: "unassigned",
            minValue: 999
        },
        {
            title: "unassigned",
            image: "unassigned",
            text: "unassigned",
            minValue: 999
        }
    ]
}

let incorrectQuestionsTwo = {
    text: "",
    image: "",
    isCorrectAnswer: false
}

let incorrectQuestionsThree = {
    text: "",
    image: "",
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
    const checkForURL = document.querySelector(".quizz-basic-info input:nth-child(2)").value;
    const isUrl = checkForURL.includes("http", 0);

    if (isUrl) {
        createdQuizz.image = document.querySelector(".quizz-basic-info input:nth-child(2)").value;
    }
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

    if (createdQuizz.title == "unassigned" ||
        createdQuizz.image == "unassigned" ||
        amountQuizzQuestions == undefined ||
        amountQuizzlevels == undefined) {

        alert(
            `Uma ou mais informa????es adicionadas n??o est?? correta.
            -T??tulo com mais de 20 e menos do que 65 caracteres;
            -A imagem precisa ser um URL v??lido;
            -A quantiddade de perguntas deve ser ao menos 3;
            -A quantidade de n??veis deve ser ao menos 2.`);
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
            `<div class="small-box" onclick="enlargeToEdit(this)">
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
            </div>`;
    }
}

function enlargeToEdit(object) {

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
    proceedToLevelsOrAlert();
}

function checkSaveQuizzQuestionText(listOfNodes, counter) {
    const checkLength = listOfNodes[counter].querySelector("input:Nth-of-type(1)").value.length;
    const minLength = 19;

    if (checkLength > minLength) {
        createdQuizz.questions[counter].title = listOfNodes[counter].querySelector("input:Nth-of-type(1)").value;
    }
}

function checkSaveQuizzQuestionBackGroundColor(listOfNodes, counter) {
    const stringColor = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(2)").value;
    const isColor = /^#[0-9A-F]{6}$/i;
    isColor.test(stringColor);

    if (isColor) {
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
    const checkForURL = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(4)").value;
    const isUrl = checkForURL.includes("http", 0);

    if (isUrl) {
        createdQuizz.questions[counter].answers[0].image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(4)").value;
        createdQuizz.questions[counter].answers[0].isCorrectAnswer = true;
    }
}

function checkSaveQuizzFirstIncorrectAnswer(listOfNodes, counter) {
    const isThereString = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(5)").value;

    if (isThereString !== undefined) {
        createdQuizz.questions[counter].answers[1].text = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(5)").value;
    }
}

function checkSaveQuizzFirstIncorrectAnswerImgUrl(listOfNodes, counter) {
    const checkForURL = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(6)").value;
    const isUrl = checkForURL.includes("http", 0);

    if (isUrl) {
        createdQuizz.questions[counter].answers[1].image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(6)").value;
        createdQuizz.questions[counter].answers[1].isCorrectAnswer = false;
    }
}

function checkSaveQuizzSecondIncorrectAnswer(listOfNodes, counter) {
    const isThereString = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(7)").value;

    if (isThereString !== undefined) {
        incorrectQuestionsTwo.text = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(7)").value;
    }
}

function checkSaveQuizzSecondIncorrectAnswerImgUrl(listOfNodes, counter) {
    const checkForURL = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(8)").value;
    const isUrl = checkForURL.includes("http", 0);

    if (isUrl) {
        incorrectQuestionsTwo.image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(8)").value;
        incorrectQuestionsTwo.isCorrectAnswer = false;
    }

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
    const checkForURL = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(10)").value;
    const isUrl = checkForURL.includes("http", 0);

    if (isUrl) {
        incorrectQuestionsThree.image = listOfNodes[counter].querySelector(".larger-to-edit input:Nth-of-type(10)").value;
        incorrectQuestionsThree.isCorrectAnswer = false;
    }

    if (incorrectQuestionsThree.text !== "" && incorrectQuestionsThree.image !== "") {
        createdQuizz.questions[counter].answers.push(incorrectQuestionsThree);
    }
}

function proceedToLevelsOrAlert() {

    checkIfQUestionsAreCorrect();

    if (quizzQuestionsAreRight) {

        document.querySelector(".quizz-creation.questions").classList.add("hidden");
        document.querySelector(".quizz-creation.levels").classList.remove("hidden");
        showLevelBoxes();

    } else {
        alert(`Uma ou mais informa????es adicionadas n??o est??o corretas.
                -Texto das perguntas deve conter ao menos 20 caracteres;
                -Cor de fundo: deve ser uma cor em hexadecimal
                (come??ar em "#", seguida de 6 caracteres hexadecimais,
                ou seja, n??meros ou letras de A a F);
                -Textos das respostas: n??o pode estar vazio;
                -Imagens de resposta: deve ter formato de URL;
                -?? obrigat??ria a inser????o da resposta correta e de
                pelo menos 1 resposta errada. Portanto,
                ?? permitido existirem perguntas com s?? 2 ou 3 respostas
                 em vez de 4.`);
    }
}

function checkIfQUestionsAreCorrect() {
    const checkQuestions = createdQuizz.questions.find(findUnassigned);
    let checkAnswers;
    for (let i = 0; i < amountQuizzQuestions; i++) {
        checkAnswers = createdQuizz.questions[i].answers.find(findUnassigned);
    }
    console.log(checkQuestions, checkAnswers);
    if (checkQuestions === undefined && checkAnswers === undefined) {
        quizzQuestionsAreRight = true;
    }
}

function findUnassigned(quizz) {
    if (quizz.title === "unassigned" ||
        quizz.color === "unassigned" ||
        quizz.text === "unassigned" ||
        quizz.image === "unassigned") {
        return true;
    }
}

function showLevelBoxes() {
    const quizzLevelBoxes = document.querySelector(".quizz-levels");

    for (let i = 1; i <= amountQuizzlevels; i++) {
        quizzLevelBoxes.innerHTML = quizzLevelBoxes.innerHTML +
            `<div class="small-box levels" onclick="enlargeToEdit(this)">
                <p>N??veis ${i}</p>
                <ion-icon name="create-outline"></ion-icon>
                <div class="larger-to-edit levels vanish">
                    <p>N??veis ${i}</p>
                    <input type="text" placeholder="T??tulo do n??vel">
                    <input type="text" placeholder="% de acerto m??nima">
                    <input type="url" placeholder="URL da imagem do n??vel">
                    <input type="text" placeholder="Descri????o do n??vel">
                </div>
            </div>`;
    }
}

function saveAndGoToFinishQuizz() {

    for (let i = 0; i < amountQuizzlevels; i++) {

        const quizzLevels = document.querySelectorAll(".larger-to-edit.levels");

        checkSaveQuizzLevelsTitle(quizzLevels, i);
        checkSaveQuizzLevelsMinValue(quizzLevels, i);
        checkSaveQuizzLevelsImgUrl(quizzLevels, i);
        checkSaveQuizzLevelsText(quizzLevels, i);
    }
    console.log(createdQuizz);
    proceedToSaveQuizzOrAlert();
}

function checkSaveQuizzLevelsTitle(listOfNodes, counter) {
    const checkLength = listOfNodes[counter].querySelector("input:Nth-of-type(1)").value.length;
    const minLength = 9;

    if (checkLength > minLength) {
        createdQuizz.levels[counter].title = listOfNodes[counter].querySelector("input:Nth-of-type(1)").value;
    }
}

function checkSaveQuizzLevelsMinValue(listOfNodes, counter) {

    const isInRange = listOfNodes[counter].querySelector("input:Nth-of-type(2)").value;

    if (isInRange >= 0 && isInRange <= 100) {
        createdQuizz.levels[counter].minValue = listOfNodes[counter].querySelector("input:Nth-of-type(2)").value;
    }
}

function checkSaveQuizzLevelsImgUrl(listOfNodes, counter) {
    const checkForURL = listOfNodes[counter].querySelector("input:Nth-of-type(3)").value;
    const isUrl = checkForURL.includes("http", 0);

    if (isUrl) {
        createdQuizz.levels[counter].image = listOfNodes[counter].querySelector("input:Nth-of-type(3)").value;
    }
}

function checkSaveQuizzLevelsText(listOfNodes, counter) {
    const checkLength = listOfNodes[counter].querySelector("input:Nth-of-type(4)").value.length;
    const minLength = 29;

    if (checkLength > minLength) {
        createdQuizz.levels[counter].text = listOfNodes[counter].querySelector("input:Nth-of-type(4)").value;
    }
}

function proceedToSaveQuizzOrAlert() {

    if (quizzLevelsAreRight) {
        saveCreatedQUizz();
    } else {
        alert(`Uma ou mais informa????es adicionadas n??o est??o corretas.
                -T??tulo do n??vel: m??nimo de 10 caracteres;
                -URL da imagem do n??vel: deve ter formato de URL;
                -Descri????o do n??vel: m??nimo de 30 caracteres;
                -% de acerto m??nima: um n??mero entre 0 e 100.
                -?? obrigat??rio existir pelo menos 1 n??vel
                cuja % de acerto m??nima seja 0%.`);
    }

}

function checkIfLevelsAreCorrect() {
    const checkLevels = createdQuizz.levels.find(findUnassigned);
    const checkForZero = createdQuizz.levels.find(findZero);

    if (checkLevels === undefined && checkForZero !== undefined) {
        quizzLevelsAreRight = true;
    }
}

function findUnassigned(quizz) {
    if (quizz.title === "unassigned" ||
        quizz.image === "unassigned" ||
        quizz.text === "unassigned" ||
        quizz.minValue === "unassigned") {
        return true;
    }
}

function findZero(quizz) {
    if (quizz.minValue === 0) {
        return true;
    }
}

function saveCreatedQUizz() {
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", createdQuizz);
    promise.then(createdQuizzIsSafe);
    promise.catch(createdQuizzIsNotSafe);

}

function createdQuizzIsSafe(response) {
    createdQuizzId = response.data.id;
    saveCreatedQuizzId();
    proceedToFinishedQuizz();
}

function createdQuizzIsNotSafe(response) {
    console.log(response);

    alert("Falha ao salvar o seu Quizz algum dado dele n??o corresponde com o requisitado");
    window.location.reload();

}

function proceedToFinishedQuizz() {
    document.querySelector(".quizz-creation.levels").classList.add("hidden");
    document.querySelector(".quizz-creation.finish").classList.remove("hidden");
}

function goBackHome() {
    document.querySelector(".quizz-creation.finish").classList.add("hidden");
    document.querySelector(".first-page").classList.remove("hidden");
}

function saveCreatedQuizzId() {

    const idFromStorage = localStorage.getItem("userIds");
    const idUnserialized = JSON.parse(idFromStorage);
    idUnserialized.push(createdQuizzId);
    const idToStorage = JSON.stringify(idUnserialized);
    localStorage.setItem("userIds", idToStorage);
}