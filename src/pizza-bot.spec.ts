import { PizzaBot } from './pizza-bot';

describe('PizzaBot', () => {
  describe('deliverPizza', () => {
    describe('basic movements', () => {
      test('should drop pizza at origin', () => {
        const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }]);

        expect(pizzaBot.deliverPizza()).toBe('D');
      });
  
      test('should move east and drop pizza', () => {
        const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }]);
  
        expect(pizzaBot.deliverPizza()).toBe('EED');
      });
  
      test('should move west and drop pizza', () => {
        const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }]);
        pizzaBot.setCurrentPosition({x: 2, y: 0});
  
        expect(pizzaBot.deliverPizza()).toBe('WWD');
      });
  
      test('should move north and drop pizza', () => {
        const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }]);
  
        expect(pizzaBot.deliverPizza()).toBe('NND');
      });
  
      test('should move south and drop pizza', () => {
        const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }]);
        pizzaBot.setCurrentPosition({x: 0, y: 2});
  
        expect(pizzaBot.deliverPizza()).toBe('SSD');
      });
    });
    
    describe('should deliver 2 pizzas', () => {
      describe('horizontal and vertical movements', () => {
        test('move east, move north', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }, {x: 2, y: 2}]);
    
          expect(pizzaBot.deliverPizza()).toBe('EEDNND');
        });
  
        test('move east, move south', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 2, y: 0}]);
          pizzaBot.setCurrentPosition({x: 0, y: 2});
    
          expect(pizzaBot.deliverPizza()).toBe('EEDSSD');
        });
  
        test('move west, move north', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }, {x: 0, y: 2}]);
          pizzaBot.setCurrentPosition({x: 2, y: 0});
    
          expect(pizzaBot.deliverPizza()).toBe('WWDNND');
        });
  
        test('move west, move south', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }, {x: 0, y: 0}]);
          pizzaBot.setCurrentPosition({x: 2, y: 2});
    
          expect(pizzaBot.deliverPizza()).toBe('WWDSSD');
        });
  
        test('move north, move east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }, {x: 2, y: 2}]);
    
          expect(pizzaBot.deliverPizza()).toBe('NNDEED');
        });
  
        test('move north, move west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 0, y: 2}]);
          pizzaBot.setCurrentPosition({x: 2, y: 0});
    
          expect(pizzaBot.deliverPizza()).toBe('NNDWWD');
        });
  
        test('move south, move east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }, {x: 2, y: 0}]);
          pizzaBot.setCurrentPosition({x: 0, y: 2});
    
          expect(pizzaBot.deliverPizza()).toBe('SSDEED');
        });
  
        test('move south, move west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }, {x: 0, y: 0}]);
          pizzaBot.setCurrentPosition({x: 2, y: 2});
    
          expect(pizzaBot.deliverPizza()).toBe('SSDWWD');
        });
      });
      
      describe('diagonal movements', () => {
        test('move north-east, move north-west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 0, y: 4}]);
    
          expect(pizzaBot.deliverPizza()).toBe('EENNDWWNND');
        });

        test('move north-east, move south-east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 4, y: 0}]);
    
          expect(pizzaBot.deliverPizza()).toBe('EENNDEESSD');
        });

        test('move north-west, move north-east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }, {x: 2, y: 4}]);
          pizzaBot.setCurrentPosition({x: 2, y: 0});
    
          expect(pizzaBot.deliverPizza()).toBe('WWNNDEENND');
        });

        test('move north-west, move south-west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 0, y: 0}]);
          pizzaBot.setCurrentPosition({x: 4, y: 0});
    
          expect(pizzaBot.deliverPizza()).toBe('WWNNDWWSSD');
        });

        test('move south-west, move north-west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }, {x: 0, y: 2}]);
          pizzaBot.setCurrentPosition({x: 4, y: 2});
    
          expect(pizzaBot.deliverPizza()).toBe('WWSSDWWNND');
        });

        test('move south-west, move south-east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }, {x: 2, y: 0}]);
          pizzaBot.setCurrentPosition({x: 2, y: 4});
    
          expect(pizzaBot.deliverPizza()).toBe('WWSSDEESSD');
        });

        test('move south-east, move north-east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }, {x: 4, y: 2}]);
          pizzaBot.setCurrentPosition({x: 0, y: 2});
    
          expect(pizzaBot.deliverPizza()).toBe('EESSDEENND');
        });

        test('move south-east, move south-west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 0, y: 0}]);
          pizzaBot.setCurrentPosition({x: 0, y: 4});
    
          expect(pizzaBot.deliverPizza()).toBe('EESSDWWSSD');
        });
      });
    });
  });
});
