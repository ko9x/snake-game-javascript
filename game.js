let lastRenderTime = 0;
// SNAKE_SPEED is how many times we want to update the snake each second.
const SNAKE_SPEED = 1;

function mainLoop(currentTime) {
  // requestAnimationFrame runs the function you pass it as soon as an animation frame is available.
  //   It may look strange to call the mainLoop function inside of itself but that's how it is done
  window.requestAnimationFrame(mainLoop);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  //  Check to see if it has been long enough to render again
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    // If it hasn't been long enough we return and the mainLoop function starts over
    return;
  }
  lastRenderTime = currentTime;
  console.log('Render');

//   update()
//   draw()
}

// Gets the mainLoop function running which then loops on it's own after that
window.requestAnimationFrame(mainLoop);
