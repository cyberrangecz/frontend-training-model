import { AbstractDetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type Minimal Solve Time
 */
export class MinimalSolveTimeDetectionEvent extends AbstractDetectionEvent {
  minimalSolveTime: number;
  participants: DetectionEventParticipant[];

  constructor() {
    super();
  }
}
