import { JeopardyLevelCategory } from './jeopardy-level-category';
import { Level } from '../level';
import { TrainingLevel } from '../training-level';

export class JeopardyLevel extends Level {
    subLevels: TrainingLevel[]
    categories?: JeopardyLevelCategory[];
}

