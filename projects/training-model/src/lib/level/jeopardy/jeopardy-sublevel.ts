import { TrainingLevel } from 'training-model';
import { JeopardyLevelCategory } from './jeopardy-level-category';

export class JeopardySublevel {
    level: TrainingLevel;
    description: string;
    categoryId:  JeopardyLevelCategory['id'];
}
