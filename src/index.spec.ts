import { InputProcessor } from './input-processor';
import { PizzaBot } from './pizza-bot';

describe('integration test with input-processor and pizza-bot', () => {
  describe('test challenge input', () => {
    test('challenge input with 9 pizzas', () => {
      const inputProcessor = new InputProcessor();
      const { gridSize, points } = inputProcessor.processInput('5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)');
      const pizzaBot = new PizzaBot(gridSize.x, gridSize.y, points);
      
      expect(pizzaBot.deliverPizza()).toBe('DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD');
    })
  });
})
