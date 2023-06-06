const { createGrid, applyRules, countLiveNeighbors } = require("../game");

test("Example Test", () => {
  expect(2 + 2).toBe(4);
});

test("Create Grid", () => {
  const rows = 3;
  const cols = 3;
  const grid = createGrid(rows, cols);
  expect(grid.length).toBe(rows);
  expect(grid[0].length).toBe(cols);
  expect(grid.every((row) => row.every((cell) => cell === 0))).toBe(true);
});

// Test all the boundary conditions for countLiveNeighbors
test("Count Live Neighbors - NW", () => {
  const grid = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];
  const liveNeighbors = countLiveNeighbors(grid, 0, 0);
  expect(liveNeighbors).toBe(3);
});

test("Count Live Neighbors - NE", () => {
  const grid = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];
  const liveNeighbors = countLiveNeighbors(grid, 0, 2);
  expect(liveNeighbors).toBe(2);
});

test("Count Live Neighbors - SW", () => {
  const grid = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];
  const liveNeighbors = countLiveNeighbors(grid, 2, 0);
  expect(liveNeighbors).toBe(2);
});

test("Count Live Neighbors - SE", () => {
  const grid = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];
  const liveNeighbors = countLiveNeighbors(grid, 2, 2);
  expect(liveNeighbors).toBe(1);
});

test("Apply Rules", () => {
  // Blinker pattern
  const grid = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];
  const newGrid = applyRules(grid);
  expect(newGrid).toEqual([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ]);
});
