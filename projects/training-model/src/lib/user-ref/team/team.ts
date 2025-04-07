import { TrainingUser } from '../training-user';

export class Team {
    id: number;
    name: string;
    locked: boolean;
    members: TrainingUser[];
}
