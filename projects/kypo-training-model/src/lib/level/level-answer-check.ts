/**
 * Class representing a answer check in game level
 */

export class LevelAnswerCheck {
  isCorrect: boolean;
  remainingAttempts: number;
  solution: string;

  hasRemainingAttempts(): boolean {
    return this.remainingAttempts > 0;
  }
}
