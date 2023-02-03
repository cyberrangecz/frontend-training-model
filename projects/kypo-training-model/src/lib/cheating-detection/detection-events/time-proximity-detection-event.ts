import { AbstractDetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type Time Proximity
 */
export class TimeProximityDetectionEvent extends AbstractDetectionEvent {
  threshold: number;

  constructor() {
    super();
  }
}
