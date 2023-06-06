import { createRandomizedGrid, applyRules } from "./game";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Define the size of the grid and cells
const rows = 50;
const cols = 50;
const cellSize = 10;

// Calculate the canvas size based on the grid and cell dimensions
canvas.width = cols * cellSize;
canvas.height = rows * cellSize;

// Create the initial grid
let grid = createRandomizedGrid(rows, cols);

// Run the game for a specified number of generations
const numGenerations = 100;

for (let generation = 0; generation < numGenerations; generation++) {
  drawGrid();
  grid = applyRules(grid);
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = grid[i][j];

      ctx.fillStyle = cell === 1 ? "black" : "white";
      ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      ctx.strokeStyle = "gray";
      ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }
}
