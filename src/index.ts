import { InputProcessor } from './input-processor';
import { PizzaBot } from './pizza-bot';

try {
    const inputProcessor = new InputProcessor();
    const { gridSize, points } = inputProcessor.processInput(process.argv[2]);
    const pizzaBot = new PizzaBot(gridSize.x, gridSize.y, points);
    pizzaBot.deliverPizza();
    console.log(pizzaBot.getPath());
} catch (error) {
    console.log(error.message);
}
