const { printGrid } = require("../display");

test("Print Grid", () => {
  const grid = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ];

  const logSpy = jest.spyOn(console, "log");
  const expectedOutput = ["⬜️ 🟩 ⬜️", "🟩 ⬜️ 🟩", "⬜️ 🟩 ⬜️"];

  console.log("Generation: ");
  printGrid(grid);

  expect(logSpy.mock.calls[0][0]).toBe("Generation: ");
  expect(logSpy.mock.calls.slice(1).flat()).toEqual(expectedOutput);

  logSpy.mockRestore();
});
