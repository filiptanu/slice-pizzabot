import { InputProcessor } from './input-processor';

const inputProcessor = new InputProcessor();

try {
    console.log(inputProcessor.processInput(process.argv[2]));
} catch (error) {
    console.log(error.message);
}
