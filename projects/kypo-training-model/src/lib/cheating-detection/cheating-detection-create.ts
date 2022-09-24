/**
 * Class representing cheating detection creation on training instance
 */
export class CheatingDetectionCreate {
  answerSimilarityDetection: boolean;
  locationSimilarityDetection: boolean;
  timeProximityDetection: boolean;
  minimalSolveTimeDetection: boolean;
  noCommandsDetection: boolean;
  forbiddenCommandsDetection: boolean;
  timeThreshold?: number;
  executedBy: string;
  executeTime: number;
  forbiddenCommands?: [{ command: string; type: string }];
}
