let order = [];
let clickedOrder = [];
let score = 0;

/*
    0 == Verde
    1 == Vermelho
    2 == Amarelo
    3 == Azul
*/

const green = window.document.querySelector('.green');
const red = window.document.querySelector('.red');
const yellow = window.document.querySelector('.yellow');
const blue = window.document.querySelector('.blue');

// Cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder; // order.push(colorOrder);
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Checa se os botões clicados são o mesmo da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }

        if(clickedOrder.length == order.length) {
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível...`);
            nextLevel();
        }
    }
}

// Função para o clique do usuário

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Função que retorna a cor

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

// Função para o próximo nível do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função para fim de jogo

let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo :(\nClique em 'OK' para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];
    playGame();
}

// Função de início do jogo
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo jogo...`);
    score = 0;
    nextLevel();
}

// Eventos de cliques para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

// Inicia o jogo
playGame();