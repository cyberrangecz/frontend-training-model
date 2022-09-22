/**
 * Class representing cheating detection creation on training instance
 */
export class CheatingDetectionCreate {
  detectionMethods: boolean[];
  timeThreshold?: number;
  executedBy: string;
  executeTime: number;
  forbiddenCommands?: [{ command: string; type: string }];
}
