import { snakeBody, expandSnake } from "./snake.js";

const food = { x: 6, y: 13 };
const EXPANSION_RATE = 5;
const snakeTail = 0;

function getRandomSpot() {
  let num = { x: 0, y: 0 };

// I needed to prevent 0 from occuring because it caused the food to be rendered but not eatable
  num.x = Math.floor(Math.random() * 20 + 1);
  num.y = Math.floor(Math.random() * 20 + 1);

  snakeBody.forEach((segment) => {
    if (segment.y === num.x) {
      if (segment.x === num.y) {
        console.log('SEGMENT', segment); //@DEBUG
        console.log('NUM', num); //@DEBUG
        return;
      }
    }
    food.x = num.x
    food.y = num.y
  });
    
}

function onSnake(food) {
  if (food.x === snakeBody[0].y && food.y === snakeBody[0].x) {
    return true;
  }
}

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    getRandomSpot();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.x;
  foodElement.style.gridColumnStart = food.y;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
