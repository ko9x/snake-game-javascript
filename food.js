import { snakeBody, expandSnake } from "./snake.js";

const food = { x: 6, y: 13 };
const EXPANSION_RATE = 3
const snakeTail = 0;

function getRandomSpot() {
  food.x = Math.floor(Math.random() * 21);
  food.y = Math.floor(Math.random() * 21);
}

function onSnake(food) {
  if (food.x === snakeBody[0].y && food.y === snakeBody[0].x) {
    return true;
  }
}

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.x;
  foodElement.style.gridColumnStart = food.y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
