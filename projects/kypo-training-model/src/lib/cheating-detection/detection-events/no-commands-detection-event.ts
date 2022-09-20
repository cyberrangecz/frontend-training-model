import { DetectionEvent} from "./detection-event";

/**
 * Class representing detection event of type No Commands
 */
export class NoCommandsDetectionEvent extends DetectionEvent {
  participants: string[];

  constructor() {
    super();
  }
}
