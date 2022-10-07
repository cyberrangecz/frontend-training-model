import { AbstractDetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type Location Similarity
 */
export class LocationSimilarityDetectionEvent extends AbstractDetectionEvent {
  ipAddress: string;
  dns: string;
  isAddressDeploy: boolean;
  participants: DetectionEventParticipant[];

  constructor() {
    super();
  }
}
