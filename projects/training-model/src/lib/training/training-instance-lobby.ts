import { TrainingUser } from '../user-ref/training-user';
import { Team } from '../user-ref/team/team';

export class TrainingInstanceLobby {
    usersQueue: TrainingUser[];
    teams: Team[];
}
