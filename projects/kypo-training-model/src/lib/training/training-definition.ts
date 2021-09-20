import { formatDate } from '@angular/common';
import { TrainingDefinitionStateEnum } from '../enums/training-definition-state.enum';
import { Level } from '../level/level';
import { Phase } from '../phase/phase';

/**
 * Class representing training definition in a system.
 */
export class TrainingDefinition {
  get lastEditTime(): Date {
    return this._lastEditTime;
  }

  set lastEditTime(value: Date) {
    this._lastEditTime = value;
    this.lastEditTimeFormatted = formatDate(value, 'd MMM yyyy H:mm', 'en-US');
  }

  id: number;
  estimatedDuration: number;
  showStepperBar: boolean;
  title: string;
  description: string;
  prerequisites: string[];
  outcomes: string[];
  state: TrainingDefinitionStateEnum;
  levels: Level[] | Phase[];
  variantSandboxes: boolean;
  defaultContent: boolean;
  lastEditBy: string;

  lastEditTimeFormatted: string;
  private _lastEditTime: Date;

  constructor() {
    this.showStepperBar = true;
    this.outcomes = [];
    this.prerequisites = [];
    this.levels = [];
    this.defaultContent = false;
  }

  toString(): number {
    return this.id;
  }
}
