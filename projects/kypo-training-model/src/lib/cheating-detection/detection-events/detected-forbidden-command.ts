/**
 * This class represents a forbidden command
 * used in a forbidden command detection event
 */

export class DetectedForbiddenCommand {
  command: string;
  type: string;
  detectionEventId: number;
  hostname: string;
  occurredAt: Date;
}
