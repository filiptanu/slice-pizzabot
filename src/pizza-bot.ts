import { Point } from './point';

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

  deliverPizza() {
    while(this.nextTarget !== null) {
      if (this.currentPosition.x === this.nextTarget!.x && this.currentPosition.y === this.nextTarget!.y) {
        this.path += 'D';
        this.setNextTarget();

        continue;
      }

      if (this.currentPosition.x < this.nextTarget!.x) {
        this.path += 'E';
        this.currentPosition.x += 1;

        continue;
      }

      if (this.currentPosition.x > this.nextTarget!.x) {
        this.path += 'W';
        this.currentPosition.x -= 1;

        continue;
      }

      if (this.currentPosition.y < this.nextTarget!.y) {
        this.path += 'N';
        this.currentPosition.y += 1;

        continue;
      }

      if (this.currentPosition.y > this.nextTarget!.y) {
        this.path += 'S';
        this.currentPosition.y -= 1;

        continue;
      }
    }
  }

  getPath() {
    return this.path;
  }

  setCurrentPosition(point: Point) {
    this.currentPosition.x = point.x;
    this.currentPosition.y = point.y;
  }

  private setNextTarget() {
    const nextTarget = this.pizzas.shift();
    this.nextTarget = nextTarget ? nextTarget : null;
  }

}
