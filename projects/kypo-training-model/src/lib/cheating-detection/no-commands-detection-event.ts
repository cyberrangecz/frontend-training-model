import { DetectionEvent} from "./detection-event";

/**
 * Class representing detection event of type No Commands
 */
export class NoCommandsDetectionEvent extends DetectionEvent {
  participant: string;

  constructor() {
    super();
  }
}
