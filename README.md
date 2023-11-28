# Conway's Game of Life with p5.js

![Game of Life Screenshot](https://github.com/Ben-Benston/game-of-life-p5/blob/11099b63b166ed27f8c94d9c296832e8a7f7964c/Screenshot%202023-11-28%20203531.png)

## Overview

This project implements Conway's Game of Life using the p5.js library. The Game of Life is a cellular automaton devised by mathematician John Conway, where simple rules give rise to complex and fascinating patterns.

## Files

- `index.html`: The HTML file that includes the necessary scripts and sets up the webpage structure.
- `sketch.js`: The main JavaScript file where the Game of Life logic and p5.js functions are implemented.

## How to Run

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/game-of-life-p5js.git
    ```

2. Open the `index.html` file in a web browser.

## Rules of the Game

- Each cell can be in one of two states: alive or dead.
- The game evolves in turns, following these rules:
  - Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
  - Any live cell with two or three live neighbors lives on to the next generation.
  - Any live cell with more than three live neighbors dies, as if by overpopulation.
  - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

## Automatic Simulation

The simulation starts automatically when the page is loaded. To reset the grid, refresh the page.

## Dependencies

- [p5.js](https://p5js.org/): A JavaScript library that makes coding accessible for artists, designers, educators, and beginners.

## Screenshots

![Game of Life Screenshot](https://github.com/Ben-Benston/game-of-life-p5/blob/11099b63b166ed27f8c94d9c296832e8a7f7964c/Screenshot%202023-11-28%20203615.png)
![Game of Life Screenshot](https://github.com/Ben-Benston/game-of-life-p5/blob/11099b63b166ed27f8c94d9c296832e8a7f7964c/Screenshot%202023-11-28%20203531.png)
![Game of Life Screenshot](https://github.com/Ben-Benston/game-of-life-p5/blob/11099b63b166ed27f8c94d9c296832e8a7f7964c/Screenshot%202023-11-28%20203659.png)

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
