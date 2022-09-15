import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js';
import { update as updateFood, draw as drawFood} from './food.js';
import {getSnakeHead, snakeIntersection} from './snake.js';
import { outSideGrid } from './grid.js'

// document.addEventListener('keydown', function(e) {
//     switch (e.keyCode) {
//         case 37:
//             alert('left');
//             break;
//         case 38:
//            alert('up');
//             break;
//         case 39:
//             alert('right');
//             break;
//         case 40:
//             alert('down');
//             break;
//     }
// });


let lastRenderTime = 0;
const gameboard = document.getElementById('game-board');
let gameOver = false;


function main(currentTime) {

    if (gameOver ) {
       if(confirm("You lost. Press OK to restart.")){
           window.location = ""
       }
       return
    }
    window.requestAnimationFrame(main)  
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return

    // console.log("Render")
    lastRenderTime = currentTime;


    update()
    draw()
};

window.requestAnimationFrame(main);

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameboard.innerHTML = ''
    drawSnake(gameboard)
    drawFood(gameboard)
}


function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}