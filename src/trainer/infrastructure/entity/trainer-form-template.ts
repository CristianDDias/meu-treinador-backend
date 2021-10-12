import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TrainerFormTemplateEntity } from '../../domain/trainer-form-template-entity';

@Entity('trainer_form_template')
export class TrainerFormTemplateOrm {
  @PrimaryColumn({ type: 'varchar' })
  id: TrainerFormTemplateEntity['id'];

  @Column({ type: 'varchar', name: 'trainer_id' })
  trainerId: TrainerFormTemplateEntity['trainerId'];

  @Column({ type: 'varchar' })
  name: TrainerFormTemplateEntity['name'];

  @Column({ type: 'jsonb' })
  form: TrainerFormTemplateEntity['form'];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static fromDomain(formTemplate: TrainerFormTemplateEntity): TrainerFormTemplateOrm {
    const orm = new TrainerFormTemplateOrm();
    orm.id = formTemplate.id;
    orm.trainerId = formTemplate.trainerId;
    orm.name = formTemplate.name;
    orm.form = formTemplate.form;
    return orm;
  }

  toDomain(): TrainerFormTemplateEntity {
    return TrainerFormTemplateEntity.create(
      {
        trainerId: this.trainerId,
        name: this.name,
        form: this.form,
      },
      this.id
    );
  }
}
