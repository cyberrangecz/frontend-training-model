import { DetectionEvent } from './detection-event';

/**
 * Class representing detection event of type Time Proximity
 */
export class TimeProximityDetectionEvent extends DetectionEvent {
  proximityThreshold: number;
  participants: string[];

  constructor() {
    super();
  }
}
