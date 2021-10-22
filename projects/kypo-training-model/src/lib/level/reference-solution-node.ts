/**
 * Class representing reference solution of training level
 */
export class ReferenceSolutionNode {
  stateName: string;
  prereqState: string[];
  cmdType: string;
  cmd: string;
  cmdRegex: string;
  optional: boolean;
}
