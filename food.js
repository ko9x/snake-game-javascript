import { setExpansion } from "./game.js";
import { snakeBody, expandSnake } from "./snake.js";

const food = {};
// foodCounter is how we keep score
export let foodCounter = 0;

function getRandomSpot() {
  let num = {};

  // I needed to prevent 0 from occuring because it caused the food to be rendered but not eatable
  num.x = Math.floor(Math.random() * 20 + 1);
  num.y = Math.floor(Math.random() * 20 + 1);

  // Check to see if the food landed on the snake
  snakeBody.forEach((segment) => {
    if (segment.y === num.x) {
      if (segment.x === num.y) {
        num.bad = 1;
      }
    }
    food.x = num.x;
    food.y = num.y;
    food.bad = num.bad;
  });
}

function onSnake(food) {
  if (food.x === snakeBody[0].y && food.y === snakeBody[0].x) {
    return true;
  }
}

getRandomSpot();

export function update() {
  let EXPANSION_RATE = (setExpansion() || 1)
  if (onSnake(food)) {
    foodCounter += 1;
    getRandomSpot();
    expandSnake(EXPANSION_RATE);
  }
}

export function draw(gameBoard) {
  // If the food landed on the snake run getRandomSpot again otherwise draw the food
  if (food.bad) {
    getRandomSpot();
  } else {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
  }
}
