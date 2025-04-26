import { Hint } from '../../level/hint';
import { ScoreboardTeam } from './scoreboard-team';

export class TeamRunInfo {

    currentLevels: {[memberId: number]: number};

    usedHints: {[memberId: number]: Hint};

    scoreboard: {[teamId: number]: ScoreboardTeam};
}
