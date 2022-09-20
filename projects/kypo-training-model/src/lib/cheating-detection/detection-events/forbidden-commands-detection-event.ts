import { DetectionEvent} from "./detection-event";

/**
 * Class representing detection event of type Forbidden Commands
 */
export class ForbiddenCommandsDetectionEvent extends DetectionEvent {
  forbiddenCommands: [{ commands : string, type: boolean }];
  participant: string;

  constructor() {
    super();
  }
}
