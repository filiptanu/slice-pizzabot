import { Point } from './point';

/**
 * A service that validates and processes the input parameters that should be passed to the PizzaBot service.
 */
export class InputProcessor {

  /**
   * For a given input string, returns the grid size and the points on the grid containing the pizzas.
   * Throws an error if no input is provided.
   * Throws an error if the input is not properly formatted.
   * Throws an error if a point resides outside the grid size.
   * 
   * @param input The input string in the format: "5x5 (1, 3) (4, 4)". The first part is the grid size, followed by a list of (x,y) coordinates.
   */
  processInput(input: string): Point[] {
    const exampleInputMessage = 'Example: npm start "5x5 (1, 3) (4, 4)"';

    if (!input) {
      throw new Error(`You must provide an input argument. ${exampleInputMessage}`);
    }
    if (!this.isInputProperlyFormatted(input)) {
      throw new Error(`Input not properly formatted: "${input}". ${exampleInputMessage}`);
    }

    const [gridSizeString, pointsString] = this.getGridSizeAndPointsStrings(input);
    const gridSize = this.getCoordinatesFromString(gridSizeString, 'x');
    const points = this.getPointsList(pointsString);

    this.validateCoordinatesWithinGridSize(gridSize, points);

    return points;
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

  private getCoordinatesFromString(point: string, separator: string): Point {
    const [x, y] = point.split(separator);

    return { x: Number(x), y: Number(y) };
  }

  private getPointsList(points: string): Point[] {
    const regex = /(\d+),(\d+)/g;

    const match = points.match(regex);
    const result: Point[] = [];

    match?.forEach(point => result.push(this.getCoordinatesFromString(point, ',')));

    return result;
  }

  private validateCoordinatesWithinGridSize(gridSize: Point, points: Point[]) {
    points.forEach(point => {
      if (point.x > gridSize.x || point.y > gridSize.y) {
        throw new Error(`Invalid input: Point (${point.x},${point.y}) resides outside grid with size ${gridSize.x}x${gridSize.y}`);
      }
    })
  }

}
