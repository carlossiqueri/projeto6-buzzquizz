function refresh() {
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
