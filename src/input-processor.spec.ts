import { InputProcessor } from './input-processor';

describe('InputProcessor', () => {
  const inputProcessor = new InputProcessor();

  describe('processInput', () => {
    test('should throw an error if the input is empty', () => {
      expect(() => inputProcessor.processInput(undefined as any)).toThrowError(/^You must provide an input argument./);
    });

    test('should throw an error if the input is not properly formatted', () => {
      expect(() => inputProcessor.processInput("not properly formatted input")).toThrowError(/Input not properly formatted: "not properly formatted input"/);
    });

    test('should throw an error if only the grid size is provided', () => {
      expect(() => inputProcessor.processInput("5x5")).toThrowError(/Input not properly formatted: "5x5"/);
    });
  
    test('should return object containing grid size and points list', () => {
      expect(inputProcessor.processInput("5x5 (1, 3) (4, 4)")).toStrictEqual({gridSize: {x: 5, y: 5}, points: [{x: 1, y: 3}, {x: 4, y: 4}]});
    });

    test('should return object containing grid size and points list for input with trailing space', () => {
      expect(inputProcessor.processInput("5x5 (1, 3) (4, 4) ")).toStrictEqual({gridSize: {x: 5, y: 5}, points: [{x: 1, y: 3}, {x: 4, y: 4}]});
    });
  });
});
