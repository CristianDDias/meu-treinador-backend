import { v4 as uuid } from 'uuid';
import { TrainerRequest, QuestionType, questionTypeOptions } from './trainer-interface';
import { Guard } from '../../shared/guard';

export class TrainerRequestEntity implements TrainerRequest {
  id: string;
  trainerId: TrainerRequest['trainerId'];
  customerId: TrainerRequest['customerId'];
  status: TrainerRequest['status'];
  form: TrainerRequest['form'];

  private constructor(props: TrainerRequest, id?: string) {
    this.id = id ?? uuid();
    this.trainerId = props.trainerId;
    this.customerId = props.customerId;
    this.status = props.status;
    this.form = props.form;
  }

  static create(props: TrainerRequest, id?: string): TrainerRequestEntity {
    const guardResult = Guard.againstEmptyBulk([
      { value: props.trainerId, key: 'trainerId' },
      { value: props.customerId, key: 'customerId' },
      { value: props.status, key: 'status' },
      { value: props.form, key: 'form' },
    ]);
    if (guardResult.error) {
      throw new Error(`Trainer request validation failed: ${guardResult.message}`);
    }
    for (const question of props.form) {
      const guardResult = Guard.againstEmptyBulk([
        { value: question.type, key: 'question.type' },
        { value: question.question, key: 'question.question' },
        { value: question.answer, key: 'question.answer' },
      ]);
      if (guardResult.error) {
        throw new Error(`Trainer request validation failed: ${guardResult.message}`);
      }
      if (!questionTypeOptions.includes(question.type)) {
        throw new Error(`Trainer request validation failed: question type ${question.type} is not allowed`);
      }
      if (question.type === QuestionType.MultipleChoice || question.type === QuestionType.SingleChoice) {
        if (!question.options?.length) {
          throw new Error('Trainer request validation failed: question should have options');
        }
      }
      if (question.type === QuestionType.MultipleChoice) {
        for (const answer of question.answer) {
          if (!question.options.includes(answer)) {
            throw new Error('Trainer request validation failed: answer should be one of the options');
          }
        }
      }
      if (question.type === QuestionType.SingleChoice) {
        if (!question.options.includes(question.answer)) {
          throw new Error('Trainer request validation failed: answer should be one of the options');
        }
      }
    }
    return new TrainerRequestEntity(props, id);
  }
}
