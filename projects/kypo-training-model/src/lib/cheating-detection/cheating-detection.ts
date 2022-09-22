/**
 * Class representing cheating detection on training instance
 */
import { CheatingDetectionStateEnum } from '../enums/cheating-detection-state.enum';

export class CheatingDetection {
  executedBy: number;
  executeTime: number;
  id: number;
  state: CheatingDetectionStateEnum;
  results: string;
  detections: boolean[];
}
