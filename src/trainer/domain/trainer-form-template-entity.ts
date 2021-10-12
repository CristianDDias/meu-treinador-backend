import { v4 as uuid } from 'uuid';
import { TrainerFormTemplate, QuestionType, questionTypeOptions } from './trainer-interface';
import { Guard } from '../../shared/guard';

export class TrainerFormTemplateEntity implements TrainerFormTemplate {
  id: string;
  trainerId: TrainerFormTemplate['trainerId'];
  name: TrainerFormTemplate['name'];
  form: TrainerFormTemplate['form'];

  private constructor(props: TrainerFormTemplate, id?: string) {
    this.id = id ?? uuid();
    this.trainerId = props.trainerId;
    this.name = props.name;
    this.form = props.form;
  }

  static create(props: TrainerFormTemplate, id?: string): TrainerFormTemplateEntity {
    const guardResult = Guard.againstEmptyBulk([
      { value: props.trainerId, key: 'trainerId' },
      { value: props.name, key: 'name' },
      { value: props.form, key: 'form' },
    ]);
    if (guardResult.error) {
      throw new Error(`Trainer form template validation failed: ${guardResult.message}`);
    }
    for (const question of props.form) {
      if (!questionTypeOptions.includes(question.type)) {
        throw new Error(`Trainer form template validation failed: question of type ${question.type} is not allowed`);
      }
      const guardResult = Guard.againstEmptyBulk([
        { value: question.type, key: 'question.type' },
        { value: question.question, key: 'question.question' },
      ]);
      if (guardResult.error) {
        throw new Error(`Trainer form template validation failed: ${guardResult.message}`);
      }
      if (question.type === QuestionType.MultipleChoice || question.type === QuestionType.SingleChoice) {
        if (!question.options?.length) {
          throw new Error(
            `Trainer form template validation failed: question of type ${question.type} should have options`
          );
        }
      } else {
        if (question.options?.length) {
          throw new Error(
            `Trainer form template validation failed: question of type ${question.type} should not have options`
          );
        }
      }
    }
    return new TrainerFormTemplateEntity(props, id);
  }
}
