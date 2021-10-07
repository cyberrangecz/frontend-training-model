import { Hint } from './hint';
import { Level } from './level';
import { ReferenceSolution } from './reference-solution';

/**
 * Class representing level in a training of type Training
 */
export class TrainingLevel extends Level {
  answer: string;
  answerVariableName: string;
  hints: Hint[];
  content: string;
  solution: string;
  incorrectAnswerLimit = 5;
  solutionPenalized = true;
  referenceSolution: ReferenceSolution;

  constructor() {
    super();
    this.hints = [];
  }

  hasSolution(): boolean {
    return this.solution !== null && this.solution !== undefined;
  }
}
