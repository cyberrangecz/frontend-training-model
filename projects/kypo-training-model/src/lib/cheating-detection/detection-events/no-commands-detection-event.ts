import { DetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type No Commands
 */
export class NoCommandsDetectionEvent extends DetectionEvent {
  participants: DetectionEventParticipant[];

  constructor() {
    super();
  }
}
