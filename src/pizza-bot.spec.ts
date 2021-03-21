import { PizzaBot } from './pizza-bot';

describe('PizzaBot', () => {
  describe('deliverPizza', () => {
    test('should drop pizza at origin', () => {
      const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }]);

      pizzaBot.deliverPizza();

      expect(pizzaBot.getPath()).toBe('D');
    });

    test('should move east and drop pizza', () => {
      const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }]);

      pizzaBot.deliverPizza();

      expect(pizzaBot.getPath()).toBe('EED');
    });

    test('should move west and drop pizza', () => {
      const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }]);
      pizzaBot.setCurrentPosition({x: 2, y: 0});

      pizzaBot.deliverPizza();

      expect(pizzaBot.getPath()).toBe('WWD');
    });

    test('should move north and drop pizza', () => {
      const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }]);

      pizzaBot.deliverPizza();

      expect(pizzaBot.getPath()).toBe('NND');
    });

    test('should move south and drop pizza', () => {
      const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }]);
      pizzaBot.setCurrentPosition({x: 0, y: 2});

      pizzaBot.deliverPizza();

      expect(pizzaBot.getPath()).toBe('SSD');
    });
  });
});