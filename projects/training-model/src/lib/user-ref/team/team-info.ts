import { TrainingUser } from '../training-user';
import { AbstractLevelTypeEnum } from '../../enums/abstract-level-type.enum';

export class TeamInfo {
    teamId: number;
    activity: { [key: TrainingUser['id']]: AbstractLevelTypeEnum | null };
}
