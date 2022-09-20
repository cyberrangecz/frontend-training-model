import { DetectionEvent} from "./detection-event";

/**
 * Class representing detection event of type Location Similarity
 */
export class LocationSimilarityDetectionEvent extends DetectionEvent {
  ip_address: string;
  isIpAddressOfDeployed: boolean;
  participants: string[];

  constructor() {
    super();
  }
}
