import { snakeBody, expandSnake } from "./snake.js";

const food = { x: 6, y: 13 };
const EXPANSION_RATE = 20;
const snakeTail = 0;
let badNum = false;

function getRandomSpot() {
  let num = {};
  console.log("here"); //@DEBUG

  // I needed to prevent 0 from occuring because it caused the food to be rendered but not eatable
  num.x = Math.floor(Math.random() * 20 + 1);
  num.y = Math.floor(Math.random() * 20 + 1);

  if (!badNum) {
    snakeBody.forEach((segment) => {
      if (segment.y === num.x) {
        if (segment.x === num.y) {
          num.bad = 1;
          console.log("SEGMENT", segment); //@DEBUG
          console.log("NUM", num); //@DEBUG
        }
      }
      if (!badNum) {
        // console.log("!badNum", num); //@DEBUG
        food.x = num.x;
        food.y = num.y;
        food.bad = num.bad;
      }
      if (badNum) {
        console.log("badNum", num); //@DEBUG
        // getRandomSpot();
      }
    });
  }
}

function onSnake(food) {
  if (food.x === snakeBody[0].y && food.y === snakeBody[0].x) {
    return true;
  }
}

getRandomSpot();

export function update() {
  if (onSnake(food)) {
    getRandomSpot();
    expandSnake(EXPANSION_RATE);
  }
}

export function draw(gameBoard) {
  if (food.bad) {
    console.log('hit the thing in the Draw!!!', ); //@DEBUG
    getRandomSpot()
  } else {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.x;
    foodElement.style.gridColumnStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
  }
}
