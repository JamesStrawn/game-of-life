const { createGrid, applyRules } = require("./game");
const { printGrid } = require("./display");

// Define size of grid
const rows = 10;
const cols = 10;

// Create the initial grid
let grid = createGrid(rows, cols);

// Run the game for a specified number of generations
const numGenerations = 10;

for (let generation = 0; generation < numGenerations; generation++) {
  console.log(`Generation: ${generation + 1}:`);
  printGrid(grid);
  grid = applyRules(grid);
}
