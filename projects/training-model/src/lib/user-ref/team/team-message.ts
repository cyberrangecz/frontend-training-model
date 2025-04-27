import { TrainingUser } from '../training-user';

export class TeamMessage {

    id: number;
    userId: TrainingUser['id'];
    time: Date;
    message: string;

}
