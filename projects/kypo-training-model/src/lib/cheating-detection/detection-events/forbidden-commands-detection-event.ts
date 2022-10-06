import { AbstractDetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';
import { ForbiddenCommand } from './forbidden-command';

/**
 * Class representing detection event of type Forbidden Commands
 */
export class ForbiddenCommandsDetectionEvent extends AbstractDetectionEvent {
  forbiddenCommands: ForbiddenCommand[];
  participant: DetectionEventParticipant;

  constructor() {
    super();
  }
}
