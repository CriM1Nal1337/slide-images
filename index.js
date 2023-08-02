const carrosel = document.querySelectorAll('.carrosel');
const setaEsquerda = document.getElementById('seta-esquerda');
const setaDireita = document.getElementById('seta-direita');

let backgroundAtual = 0;



setaDireita.addEventListener("click", function () {
    if (backgroundAtual === carrosel.length - 1) {
        return;
    }
    
    backgroundAtual++;
    esconderBackground();
    newFunction();
    mostrarOuEsconderSetas();
})

setaEsquerda.addEventListener("click", function () {
    if (backgroundAtual === 0) {
        return;
    }
    
    backgroundAtual--;
    esconderBackground();
    newFunction();
    mostrarOuEsconderSetas();
})

function newFunction() {
    carrosel[backgroundAtual].classList.add('show');
}

function esconderBackground(){
    const imagemAberta = document.querySelector('.show');
    imagemAberta.classList.remove('show');
}

function mostrarOuEsconderSetas(){
    const naoEAPrimeiraImagem = backgroundAtual !== 0;
    if (naoEAPrimeiraImagem) {
        setaEsquerda.classList.add('opacidade');
    } else {
        setaEsquerda.classList.add('opacidade');
    }

    const chegouNaUltimaImagem = backgroundAtual !== 0 && backgroundAtual === carrosel.length - 1;
    if (chegouNaUltimaImagem) {
        setaDireita.classList.add('opacidade');
    } else {
        setaDireita.classList.remove('opacidade');
    }
}