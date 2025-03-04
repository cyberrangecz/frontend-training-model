import { JeopardyLevelCategory } from './jeopardy-level-category';
import { Level } from '../level';
import { JeopardySublevel } from './jeopardy-sublevel';

export class JeopardyLevel extends Level {
    subLevels: JeopardySublevel[]
    categories?: JeopardyLevelCategory[];
}

