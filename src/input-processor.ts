import { Point } from './point';

/**
 * A service that validates and processes the input parameters that should be passed to PizzaBot.
 */
export class InputProcessor {

  /**
   * For a given input string, returns the grid size and the points on the grid containing the pizzas.
   * Throws an error if no input is provided.
   * Throws an error if the input is not properly formatted.
   * 
   * @param input The input string in the format: "5x5 (1, 3) (4, 4)". The first part is the grid size, followed by a list of (x,y) coordinates.
   */
  processInput(input: string): { gridSize: {x: number, y: number}, points: { x: number, y: number }[] } {
    const exampleInputMessage = '\nExample input: "5x5 (1, 3) (4, 4)"';

    if (!input) {
      throw new Error(`You must provide an input argument. ${exampleInputMessage}`);
    }
    if (!this.isInputProperlyFormatted(input)) {
      throw new Error(`Input not properly formatted: "${input}" ${exampleInputMessage}`);
    }

    const [gridSizeString, pointsString] = this.getGridSizeAndPointsStrings(input);

    return { gridSize: this.getCoordinatesFromString(gridSizeString, 'x'), points: this.getPointsList(pointsString) };
  }

  private isInputProperlyFormatted(input: string): boolean {
    const regex = /^\d+x\d+(?:\s\(\d+\,\s\d+\))+?$/;

    return regex.test(input.trim());
  }

  private getGridSizeAndPointsStrings(input: string) {
    const inputParts = input.trim().split(' ');
    const gridSizeString = inputParts[0];
    const pointsString = inputParts.slice(1).join(' ').replace(/,\s/g, ',').trim();

    return [gridSizeString, pointsString];
  }

  private getPointsList(points: string): Point[] {
    const regex = /(\d+),(\d+)/g;

    const match = points.match(regex);
    const result: Point[] = [];

    match?.forEach(point => result.push(this.getCoordinatesFromString(point, ',')));

    return result;
  }

  private getCoordinatesFromString(point: string, separator: string): Point {
    const [x, y] = point.split(separator);

    return { x: Number(x), y: Number(y) };
  }

}
