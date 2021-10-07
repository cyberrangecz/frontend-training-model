/**
 * Class representing reference solution of training level
 */
export class ReferenceSolution {
  stateName: string;
  prereqState: string[];
  cmdType: string;
  cmd: string;
  cmdRegex: string;
  optional: boolean;
}
