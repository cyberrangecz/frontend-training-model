import { Hint } from './hint';
import { Level } from './level';

/**
 * Class representing level in a training of type Game
 */
export class GameLevel extends Level {
  answer: string;
  hints: Hint[];
  content: string;
  solution: string;
  incorrectAnswerLimit = 5;
  solutionPenalized = true;

  constructor() {
    super();
    this.hints = [];
  }

  hasSolution(): boolean {
    return this.solution !== null && this.solution !== undefined;
  }
}
