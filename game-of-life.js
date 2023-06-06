const { createGrid, createRandomizedGrid, applyRules } = require("./game");
const { printGrid } = require("./display");

// Define size of grid
const rows = 35;
const cols = 33;

// Create the initial grid
let grid = createRandomizedGrid(rows, cols);

// Run the game for a specified number of generations
const numGenerations = 400;

for (let generation = 0; generation < numGenerations; generation++) {
  console.log(`Generation: ${generation + 1}:`);
  printGrid(grid);
  grid = applyRules(grid);
}
