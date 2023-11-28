let w = 7;
let grid;
let col;
let row;
let nextGrid;

function setup() {
    createCanvas(windowWidth, windowHeight);
    row = floor(height / w)-3;
    col = floor(width / w)-2;
    resizeCanvas(col * w, row * w)

    // Initialize the 2D array with Cell objects
    grid = new Array(row);
    for (let i = 0; i < row; i++) {
        grid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            grid[i][j] = new Cell(i, j);
            grid[i][j].alive = floor(random(2));
        }
    }

    nextGrid = new Array(row);
    for (let i = 0; i < row; i++) {
        nextGrid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            nextGrid[i][j] = new Cell(i, j);
        }
    }
}

function draw() {
    background(0)
    frameRate(10)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            grid[i][j].countNeighbours()
            if (grid[i][j].alive) {
                let cell = grid[i][j];
                fill(cell.r, 100, cell.b);
                square(cell.x, cell.y, w);
                let nCount = grid[i][j].aliveNeighbourCount;

                if (nCount < 2 || nCount > 3) {
                    nextGrid[i][j].alive = false;
                } else {
                    nextGrid[i][j].alive = grid[i][j].alive;
                }
            }
            else {
                if (grid[i][j].aliveNeighbourCount == 3) {
                    nextGrid[i][j].alive = true;
                } else {
                    nextGrid[i][j].alive = grid[i][j].alive
                }
            }
        }
    }

    grid = nextGrid;
    nextGrid = new Array(row);
    for (let i = 0; i < row; i++) {
        nextGrid[i] = new Array(col);
        for (let j = 0; j < col; j++) {
            nextGrid[i][j] = new Cell(i, j);
        }
    }
}


class Cell {
    constructor(i, j) {
        this.alive = false;
        this.i = i;
        this.j = j;
        this.x = j * w;
        this.y = i * w;
        this.r = map(this.x, 0, width, 0, 255)
        this.b = map(this.y, 0, height, 0, 255)
        this.aliveNeighbourCount = 0;
    }

    countNeighbours() {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let iIndex = this.i + i;
                let jIndex = this.j + j;

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
                if (grid[iIndex][jIndex] != this) {
                    if (grid[iIndex][jIndex].alive) {
                        this.aliveNeighbourCount++;
                    }
                }
            }
        }
    }

}
