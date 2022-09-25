import { DetectionEvent } from './detection-event';
import { DetectionEventParticipant } from './detection-event-participant';

/**
 * Class representing detection event of type Answer Similarity
 */
export class AnswerSimilarityDetectionEvent extends DetectionEvent {
  answer: string;
  answerOwner: string;
  participants: DetectionEventParticipant[];

  constructor() {
    super();
  }
}
