import { TrainingUser } from '../training-user';

export class Team {
    id: number;
    name: string;
    started: boolean;
    members: TrainingUser[];
}
