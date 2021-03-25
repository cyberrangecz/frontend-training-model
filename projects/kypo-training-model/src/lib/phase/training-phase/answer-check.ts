/**
 * Class representing a answer check in task
 */

export class AnswerCheck {
  isCorrect: boolean;
  remainingAttempts: number;
  solution: string;

  hasRemainingAttempts(): boolean {
    return this.remainingAttempts > 0;
  }
}
