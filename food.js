import {onSnake, expandSnake} from './snake.js';
import { randomGridPosition } from './grid.js'

let food = getRandomPosition();
const EXPANSION_RATE = 2;

export function update() {
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomPosition()
    }
}

export function draw(gameboard) {
        const foodElement = document.createElement("div")
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameboard.appendChild(foodElement)
}

function getRandomPosition() {
    let newFoodPosition 
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition
}