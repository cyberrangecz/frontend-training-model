import { DetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type Location Similarity
 */
export class LocationSimilarityDetectionEvent extends DetectionEvent {
  ip_address: string;
  dns_name: string;
  isIpAddressOfDeployed: boolean;
  participants: DetectionEventParticipant[];

  constructor() {
    super();
  }
}
