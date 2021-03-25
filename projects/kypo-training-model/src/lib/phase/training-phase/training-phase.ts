import { Phase } from '../phase';
import { Task } from './task';
import { DecisionMatrixRow } from './decision-matrix-row';

export class TrainingPhase extends Phase {
  allowedWrongAnswers: number;
  allowedCommands: number;
  estimatedDuration: number;
  tasks: Task[];
  decisionMatrix: DecisionMatrixRow[];
  currentTask?: Task;

  constructor() {
    super();
  }
}
