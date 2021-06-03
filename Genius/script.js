
let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () =>{
    
    let colorOrder =  Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }

}

// acende a proxima cor
let lightColor = (elementColor, time)=>{
    time = time * 500;
    setTimeout(() =>{
        elementColor.classList.add('selected');
    }, time -250);

    setTimeout(() =>{
        elementColor.classList.remove('selected');
    })
}

// checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
           gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximo nivel`);
        nextLevel();
    }

}

// função para o clique do usuario
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
   createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

   
}


//Função que retorna cor
let createColorElement = (color) =>{
    if(color == 0) {
        return green;
    } else if(color == 1){
        return red;
    } else if(color ==2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
} 


// função para proximo nivel do jogo

let nextLevel = () =>{
    score++;
    shuffleOrder();

}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\n Clique em ok para iniciar o jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// função de inicio do jogo!
let playGame = () => {
    alert('Bem vidndo ao Genisis! Iniciando o novo jogo!');
    score = 0;

    nextLevel();
}

//eventors de clique as cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

//inicio do jogo!
playGame();
