const Cell = require("../src/models/Cell");
const { ALIVE, DEAD } = require("../src/states");

describe("Test in cell Class", () => {
  test("Any dead cell with exactly three live neighbours becomes a live cell", () => {
    const cell = new Cell(DEAD);
    cell.neighborsAlive = [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)];
    cell.calculateNextState();
    expect(cell.nextState).toBe(ALIVE);
  });

  
});

// const { sum, mul, sub, div } = require('../src/models/Board')

// test('Adding 1 + 1 equals 2', () => {
//   expect(sum(1, 1)).toBe(2)
// })
// test('Multiplying 1 * 1 equals 1', () => {
//   expect(mul(1, 1)).toBe(1)
// })
// test('Subtracting 1 - 1 equals 0', () => {
//   expect(sub(1, 1)).toBe(0)
// })
// test('Dividing 1 / 1 equals 1', () => {
//   expect(div(1, 1)).toBe(1)
// })