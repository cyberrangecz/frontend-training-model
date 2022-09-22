import { DetectionEvent } from './detection-event';

/**
 * Class representing detection event of type Answer Similarity
 */
export class AnswerSimilarityDetectionEvent extends DetectionEvent {
  answer: string;
  answerOwner: string;
  participants: string[];

  constructor() {
    super();
  }
}
