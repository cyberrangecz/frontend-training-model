/**
 * Class representing cheating detection on training instance
 */
import { CheatingDetectionStateEnum } from '../enums/cheating-detection-state.enum';
import { ForbiddenCommand } from './detection-events/forbidden-command';

export class CheatingDetection {
  trainingInstanceId: number;
  executedBy: number;
  executeTime: Date;
  proximityThreshold?: number;
  id: number;
  state: CheatingDetectionStateEnum;
  results: string;
  detectionStates: CheatingDetectionStateEnum[];
  detectionFlags: boolean[];
  forbiddenCommands?: ForbiddenCommand[];
}
