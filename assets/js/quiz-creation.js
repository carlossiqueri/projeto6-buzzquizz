let quizzTitle;
let quizzImgUrl;
let amountQuizzQuestions;
let amountQuizzlevels;

function saveAndGoToQuizzQuestions() {

    checkSaveQuizzTitle();
    checkSaveQuizzImgUrl();
    checkSaveAmountQuizzQuestions();
    checkSaveAmountQuizzLevels();
    proceedToQuestionsOrAlert();

    console.log(quizzTitle);
    console.log(quizzImgUrl);
    console.log(amountQuizzQuestions);
    console.log(amountQuizzlevels);
}

function checkSaveQuizzTitle() {
    const checkLength = document.querySelector(".quizz-basic-info input:first-child").value.length;
    const minLength = 19;
    const maxLength = 66;
    if (checkLength > minLength && checkLength < maxLength) {
        quizzTitle = document.querySelector(".quizz-basic-info input:first-child").value;
    }
}

function checkSaveQuizzImgUrl() {
    quizzImgUrl = document.querySelector(".quizz-basic-info input:nth-child(2)").value;
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
    if (quizzTitle == undefined ||
        quizzImgUrl == "" ||
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

function enlargeToEditQuestionOne(object) {
    document.querySelectorAll(".larger-to-edit")[1].classList.add("vanish");
    document.querySelectorAll(".larger-to-edit")[2].classList.add("vanish");
    document.querySelector(".quizz-questions div:nth-of-type(3)").classList.remove("vanish");
    document.querySelector(".quizz-questions div:nth-of-type(5)").classList.remove("vanish");

    object.classList.add("vanish");
    document.querySelector(".box-question-one").classList.remove("vanish");
}

function enlargeToEditQuestionTwo(object) {
    document.querySelectorAll(".larger-to-edit")[0].classList.add("vanish");
    document.querySelectorAll(".larger-to-edit")[2].classList.add("vanish");
    document.querySelector(".quizz-questions div:nth-of-type(1)").classList.remove("vanish");
    document.querySelector(".quizz-questions div:nth-of-type(5)").classList.remove("vanish");

    object.classList.add("vanish");
    document.querySelector(".box-question-two").classList.remove("vanish");
}

function enlargeToEditQuestionThree(object) {
    document.querySelectorAll(".larger-to-edit")[0].classList.add("vanish");
    document.querySelectorAll(".larger-to-edit")[1].classList.add("vanish");
    document.querySelector(".quizz-questions div:nth-of-type(1)").classList.remove("vanish");
    document.querySelector(".quizz-questions div:nth-of-type(3)").classList.remove("vanish");

    object.classList.add("vanish");
    document.querySelector(".box-question-three").classList.remove("vanish");
}


