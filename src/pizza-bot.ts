import { Point } from './point';

/**
 * A service that delivers pizza to given coordinates in a Cartesian plane.
 * The delivery always starts at the origin point.
 */
export class PizzaBot {

  private currentPosition: Point;
  private nextTarget: Point | null;
  private path: string;

  constructor(private x: number, private y: number, private pizzas: Point[]) {
    this.currentPosition = { x: 0, y: 0 };
    this.nextTarget = null;
    this.path = '';

    this.setNextTarget();
  }

  /**
   * Delivers pizzas to the points contained in the `pizzas` array.
   * While delivering pizzas, it populates the `path` string with the directions taken at each particular step.
   * Returns the `path` string as a result.
   */
  deliverPizza() {
    while(this.nextTarget) {
      if (this.currentPosition.x === this.nextTarget.x && this.currentPosition.y === this.nextTarget.y) {
        this.path += 'D';
        this.setNextTarget();

        continue;
      }

      if (this.currentPosition.x < this.nextTarget.x) {
        this.path += 'E';
        this.currentPosition.x += 1;

        continue;
      }

      if (this.currentPosition.x > this.nextTarget.x) {
        this.path += 'W';
        this.currentPosition.x -= 1;

        continue;
      }

      if (this.currentPosition.y < this.nextTarget.y) {
        this.path += 'N';
        this.currentPosition.y += 1;

        continue;
      }

      if (this.currentPosition.y > this.nextTarget.y) {
        this.path += 'S';
        this.currentPosition.y -= 1;

        continue;
      }
    }

    return this.path;
  }

  /**
   * Sets the current position of the Pizza bot.
   * Used in tests, to set the initial position to be other than the origin point.
   * 
   * @param point The position the Pizza bot needs to be set to.
   */
  setCurrentPosition(point: Point) {
    this.currentPosition.x = point.x;
    this.currentPosition.y = point.y;
  }

  private setNextTarget() {
    const nextTarget = this.pizzas.shift();
    this.nextTarget = nextTarget ? nextTarget : null;
  }

}
