/**
 * Class representing participant of a detection event
 */
export class DetectionEventParticipant {
  ipAddress?: string;
  occurredAt: Date;
  solvedInTime?: number;
  userId: number;
}
