// Set the size of each cell
let w = 7;

// Arrays to store the current and next state of the grid
let grid;
let nextGrid;

// Number of rows and columns in the grid
let row;
let col;

// Setup function runs once at the beginning
function setup() {
    // Create a canvas that fills the window
    createCanvas(windowWidth, windowHeight);

    // Calculate the number of rows and columns based on cell size
    row = floor(height / w) - 3;
    col = floor(width / w) - 2;

    // Resize canvas to fit the exact grid size
    resizeCanvas(col * w, row * w);

    // Initialize the current grid with Cell objects
    grid = new Array(row);
    for (let i = 0; i < row; i++) {
        grid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            grid[i][j] = new Cell(i, j);
            // Initialize cell state randomly (alive or dead)
            grid[i][j].alive = floor(random(2));
        }
    }

    // Initialize the next grid with Cell objects
    nextGrid = new Array(row);
    for (let i = 0; i < row; i++) {
        nextGrid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            nextGrid[i][j] = new Cell(i, j);
        }
    }
}

// Draw function runs continuously, updating the simulation
function draw() {
    // Set background color
    background(0);

    // Set the frame rate for the animation
    frameRate(10);

    // Loop through each cell in the grid
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // Count the number of live neighbors for each cell
            grid[i][j].countNeighbours();

            // If the current cell is alive, display it and update its state
            if (grid[i][j].alive) {
                let cell = grid[i][j];
                fill(cell.r, 100, cell.b);
                square(cell.x, cell.y, w);

                let nCount = grid[i][j].aliveNeighbourCount;

                // Apply the rules of the Game of Life
                if (nCount < 2 || nCount > 3) {
                    nextGrid[i][j].alive = false;
                } else {
                    nextGrid[i][j].alive = grid[i][j].alive;
                }
            }
            // If the current cell is dead, check if it should become alive
            else {
                if (grid[i][j].aliveNeighbourCount == 3) {
                    nextGrid[i][j].alive = true;
                } else {
                    nextGrid[i][j].alive = grid[i][j].alive;
                }
            }
        }
    }

    // Update the current grid with the next state
    grid = nextGrid;

    // Reset the next grid for the next iteration
    nextGrid = new Array(row);
    for (let i = 0; i < row; i++) {
        nextGrid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            nextGrid[i][j] = new Cell(i, j);
        }
    }
}

// Class definition for a Cell
class Cell {
    constructor(i, j) {
        this.alive = false;
        this.i = i;
        this.j = j;
        this.x = j * w;
        this.y = i * w;
        this.r = map(this.x, 0, width, 0, 255);
        this.b = map(this.y, 0, height, 0, 255);
        this.aliveNeighbourCount = 0;
    }

    // Count the number of live neighbors for the cell
    countNeighbours() {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let iIndex = this.i + i;
                let jIndex = this.j + j;

                // Wrap around the grid edges
                if (iIndex < 0) {
                    iIndex = row - 1;
                } else if (iIndex == row) {
                    iIndex = 0;
                }
                if (jIndex < 0) {
                    jIndex = col - 1;
                } else if (jIndex == col) {
                    jIndex = 0;
                }

                // Check if the neighboring cell is alive and not the current cell
                if (grid[iIndex][jIndex] != this) {
                    if (grid[iIndex][jIndex].alive) {
                        this.aliveNeighbourCount++;
                    }
                }
            }
        }
    }
}
