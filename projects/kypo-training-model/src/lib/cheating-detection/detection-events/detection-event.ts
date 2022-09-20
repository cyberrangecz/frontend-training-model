/**
 * Parent class of all detection events
 */
import {AbstractDetectionEventTypeEnum} from "../../enums/abstract-detection-event-type.enum";

export class DetectionEvent {
  trainingInstanceId: number;
  cheatingDetectionId: number;
  type: AbstractDetectionEventTypeEnum;
  occuredAt: number;
  levelId: number;
}
