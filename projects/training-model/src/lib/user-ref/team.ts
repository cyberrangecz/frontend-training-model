import { TrainingUser } from './training-user';

export class Team {
    id: number;
    name: string;
    members: TrainingUser['id'][];
    timeCreated: Date;
}
