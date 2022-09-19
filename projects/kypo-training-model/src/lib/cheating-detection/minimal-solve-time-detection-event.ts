import { DetectionEvent} from "./detection-event";

/**
 * Class representing detection event of type Minimal Solve Time
 */
export class MinimalSolveTimeDetectionEvent extends DetectionEvent {
  minimalSolveTime: number;
  solvedInTime: number;
  participant: string;

  constructor() {
    super();
  }
}
