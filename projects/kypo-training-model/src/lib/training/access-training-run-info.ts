import { Level } from '../level/level';
import { Phase } from '../phase/phase';

/**
 * Class containing info about accessed training run
 */
export class AccessTrainingRunInfo {
  trainingRunId: number;
  sandboxInstanceId?: string;
  sandboxDefinitionId?: number;
  currentLevel: Level | Phase;
  levels: Level[] | Phase[];
  isPreview: boolean;
  startTime: Date;
  localEnvironment: boolean;
  backwardMode: boolean;
  isLevelAnswered: boolean;
}
