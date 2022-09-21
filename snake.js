// SNAKE_SPEED is how many times we want to update the snake each second.
export const SNAKE_SPEED = 1;
const snakeBody = [
    { x: 11, y: 11 },
    { x: 12, y: 11 },
    { x: 13, y: 11 }
];

export function update() {}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    // Here we are create an hmtl element with javascript. A div in this instance.
    const snakeElement = document.createElement("div");
    // Then we add style and class elements to our custom div.
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    // snake is a css class we created in the index.html. We access it here using classlist.add
    snakeElement.classList.add("snake");
    // If you console.log snakeElement it will look like this
    // <div class='snake' style="grid-row-start: 11; grid-column-start: 11;"></div>
    // adding our snakeElemnt to the game-board div in the index.htmml
    gameBoard.appendChild(snakeElement);
  });
}
