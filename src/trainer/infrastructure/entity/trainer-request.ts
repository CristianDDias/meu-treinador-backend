import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TrainerRequestEntity } from '../../domain/trainer-request-entity';

@Entity('trainer_request')
export class TrainerRequestOrm {
  @PrimaryColumn({ type: 'varchar' })
  id: TrainerRequestEntity['id'];

  @Column({ type: 'varchar', name: 'trainer_id' })
  trainerId: TrainerRequestEntity['trainerId'];

  @Column({ type: 'varchar', name: 'customer_id' })
  customerId: TrainerRequestEntity['customerId'];

  @Column({ type: 'varchar' })
  status: TrainerRequestEntity['status'];

  @Column({ type: 'jsonb' })
  form: TrainerRequestEntity['form'];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static fromDomain(request: TrainerRequestEntity): TrainerRequestOrm {
    const orm = new TrainerRequestOrm();
    orm.id = request.id;
    orm.trainerId = request.trainerId;
    orm.customerId = request.customerId;
    orm.status = request.status;
    orm.form = request.form;
    return orm;
  }

  toDomain(): TrainerRequestEntity {
    return TrainerRequestEntity.create(
      {
        trainerId: this.trainerId,
        customerId: this.customerId,
        status: this.status,
        form: this.form,
      },
      this.id
    );
  }
}
