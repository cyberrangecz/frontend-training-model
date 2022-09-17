import { CheatTypeEnum } from '../enums/cheatType.enum';

/**
 * Class representing detection event on training instance
 */
export class DetectionEvent {
  trainingInstanceId: number;
  cheatingType: CheatTypeEnum;
  startTime: number;
}
