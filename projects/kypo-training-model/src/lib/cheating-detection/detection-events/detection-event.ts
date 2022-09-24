/**
 * Parent class of all detection events
 */
import { AbstractDetectionEventTypeEnum } from '../../enums/abstract-detection-event-type.enum';

export class DetectionEvent {
  trainingInstanceId: number;
  cheatingDetectionId: number;
  detectionType: AbstractDetectionEventTypeEnum;
  occurredAt: number;
  detectedAt: number;
  levelName: string;
  levelId: number;
  participantCount: number;
}
