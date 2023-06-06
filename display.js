function printGrid(grid) {
  for (const row of grid) {
    const rowString = row.map((cell) => (cell === 1 ? "🟩" : "⬜️")).join(" ");
    console.log(rowString);
  }
}

module.exports = {
  printGrid,
};
