### What to do next


### Maybe do later
* make the expansion rate, speed, and score persist until the user refreshes
    * this will involve changing the way the user starts a new game
* make a blackout mode
    * the snake can run into itself but walls still end the game
        * it's difficult because you can't see where you are once the snake is crazy long
            * the game ends when there is no spot to put the food that isn't on the snake
* think of other features a snake game could have
* refactor code

### Bugs


### Done
* get the food to not be placed on top of the snake
* end the game when a wall is hit or the snake runs into itself
* allow the user to restart a game quickly after they get a game over
* when you get a game over the snake moves another frame. if it hits another game over on that frame you get the game over alert again. This can cause the alert to pop up dozens of times potentially.
    * need to somehow make the snake stop moving when the game over happens
* allow the user to set the speed
* allow the user to set the expansion rate
* make it so the speed and expansion can only be set before the game starts
    * once it starts they are greyed out.
* Display the score
    * food eaten
        * display the speed the game was set to and the expansion rate