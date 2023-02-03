/**
 * Parent class of all detection events
 */
import { AbstractDetectionEventTypeEnum } from '../../enums/abstract-detection-event-type.enum';
import { DetectionEventParticipant } from './detection-event-participant';

export class AbstractDetectionEvent {
  id: number;
  trainingInstanceId: number;
  cheatingDetectionId: number;
  detectionEventType: AbstractDetectionEventTypeEnum;
  detectedAt: Date;
  levelTitle: string;
  levelId: number;
  participantCount: number;
}
