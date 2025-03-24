import { TrainingLevel } from '../training-level';
import { AbstractLevelTypeEnum } from '../../enums/abstract-level-type.enum';

export class JeopardySublevel extends TrainingLevel{
    description: string;

    public constructor() {
        super();
        this.type = AbstractLevelTypeEnum.JeopardySublevel
    }
}
