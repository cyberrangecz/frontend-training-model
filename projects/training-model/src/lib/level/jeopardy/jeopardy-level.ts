import { Level } from '../level';
import { JeopardyCategory } from './jeopardy-category';
import { AbstractLevelTypeEnum } from '../../enums/abstract-level-type.enum';

export class JeopardyLevel extends Level {

    categories: JeopardyCategory[];

    public constructor() {
        super();
        this.categories = [];
        this.type = AbstractLevelTypeEnum.Jeopardy
    }
}

