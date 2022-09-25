import { DetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type Time Proximity
 */
export class TimeProximityDetectionEvent extends DetectionEvent {
  threshold: number;
  participants: DetectionEventParticipant[];

  constructor() {
    super();
  }
}
