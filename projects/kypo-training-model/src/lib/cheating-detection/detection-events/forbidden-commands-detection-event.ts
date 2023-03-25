import { AbstractDetectionEvent } from './detection-event';

/**
 * Class representing detection event of type Forbidden Commands
 */
export class ForbiddenCommandsDetectionEvent extends AbstractDetectionEvent {
  forbiddenCommands: string[];
  constructor() {
    super();
  }
}
