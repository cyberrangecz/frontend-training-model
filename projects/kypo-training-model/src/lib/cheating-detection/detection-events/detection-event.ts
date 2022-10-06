/**
 * Parent class of all detection events
 */
import { AbstractDetectionEventTypeEnum } from '../../enums/abstract-detection-event-type.enum';

export class AbstractDetectionEvent {
  trainingInstanceId: number;
  cheatingDetectionId: number;
  detectionEventType: AbstractDetectionEventTypeEnum;
  detectedAt: number;
  levelTitle: string;
  levelId: number;
  participantCount: number;
}
