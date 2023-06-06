function createGrid(rows, cols) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
}

function createRandomizedGrid(rows, cols) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.round(Math.random()));
    }
    grid.push(row);
  }
  return grid;
}

/*
function countLiveNeighbors(grid, row, col) {
  let liveNeighbors = 0;

  if (grid[row - 1] && grid[row - 1][col - 1] === 1) liveNeighbors++;
  if (grid[row - 1] && grid[row - 1][col] === 1) liveNeighbors++;
  if (grid[row - 1] && grid[row - 1][col + 1] === 1) liveNeighbors++;
  if (grid[row][col - 1] === 1) liveNeighbors++;
  if (grid[row][col + 1] === 1) liveNeighbors++;
  if (grid[row + 1] && grid[row + 1][col - 1] === 1) liveNeighbors++;
  if (grid[row + 1] && grid[row + 1][col] === 1) liveNeighbors++;
  if (grid[row + 1] && grid[row + 1][col + 1] === 1) liveNeighbors++;

  return liveNeighbors;
}
*/

function countLiveNeighbors(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // Define the neighboring cell offsets
  const offsets = [
    [-1, -1] /* NW */,
    [-1, 0] /* N */,
    [-1, 1] /* NE */,
    [0, -1] /* W */,
    [0, 1] /* E */,
    [1, -1] /* SW */,
    [1, 0] /* S */,
    [1, 1] /* SE */,
  ];

  // Loop over the neighbors
  for (const [offsetRow, offsetCol] of offsets) {
    const neighborRow = row + offsetRow;
    const neighborCol = col + offsetCol;

    // Check if the neighbor cell is within the grid boundaries
    if (
      neighborRow >= 0 &&
      neighborRow < rows &&
      neighborCol >= 0 &&
      neighborCol < cols
    ) {
      // Add the neighbor's value to the count
      count += grid[neighborRow][neighborCol];
    }
  }

  return count;
}

function applyRules(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const newGrid = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      const cell = grid[i][j];
      const liveNeighbors = countLiveNeighbors(grid, i, j);
      let newCell;

      if (cell === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          newCell = 0; // Cell dies due to under- or over-population
        } else {
          newCell = 1; // Cell lives on to next generation
        }
      } else {
        if (liveNeighbors === 3) {
          newCell = 1; // Cell is born - reproduction
        } else {
          newCell = 0; // Cell remains dead
        }
      }

      newRow.push(newCell);
    }
    newGrid.push(newRow);
  }

  return newGrid;
}

module.exports = {
  createGrid,
  createRandomizedGrid,
  applyRules,
  countLiveNeighbors,
};
