import { PizzaBot } from './pizza-bot';

describe('PizzaBot', () => {
  describe('deliverPizza', () => {
    describe('basic movements', () => {
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
    
    describe('should deliver 2 pizzas', () => {
      describe('horizontal and vertical movements', () => {
        test('move east, move north', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }, {x: 2, y: 2}]);
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('EEDNND');
        });
  
        test('move east, move south', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 2, y: 0}]);
          pizzaBot.setCurrentPosition({x: 0, y: 2});
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('EEDSSD');
        });
  
        test('move west, move north', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }, {x: 0, y: 2}]);
          pizzaBot.setCurrentPosition({x: 2, y: 0});
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('WWDNND');
        });
  
        test('move west, move south', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }, {x: 0, y: 0}]);
          pizzaBot.setCurrentPosition({x: 2, y: 2});
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('WWDSSD');
        });
  
        test('move north, move east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 2 }, {x: 2, y: 2}]);
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('NNDEED');
        });
  
        test('move north, move west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 2 }, {x: 0, y: 2}]);
          pizzaBot.setCurrentPosition({x: 2, y: 0});
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('NNDWWD');
        });
  
        test('move south, move east', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 0, y: 0 }, {x: 2, y: 0}]);
          pizzaBot.setCurrentPosition({x: 0, y: 2});
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('SSDEED');
        });
  
        test('move south, move west', () => {
          const pizzaBot = new PizzaBot(3, 4, [{ x: 2, y: 0 }, {x: 0, y: 0}]);
          pizzaBot.setCurrentPosition({x: 2, y: 2});
      
          pizzaBot.deliverPizza();
    
          expect(pizzaBot.getPath()).toBe('SSDWWD');
        });
      });
    });
  });
});
