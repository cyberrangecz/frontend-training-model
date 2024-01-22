import { AbstractDetectionEvent } from './detection-event';
import { ForbiddenCommand } from './forbidden-command';

/**
 * Class representing detection event of type Forbidden Commands
 */
export class ForbiddenCommandsDetectionEvent extends AbstractDetectionEvent {
  commandCount: number;

  constructor() {
    super();
  }
}
