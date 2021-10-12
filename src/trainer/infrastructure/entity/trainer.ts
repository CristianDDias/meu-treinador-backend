import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TrainerEntity } from '../../domain/trainer-entity';
import { Trainer } from '../../domain/trainer-interface';

@Entity('trainer')
export class TrainerOrm {
  @PrimaryColumn({ type: 'varchar' })
  id: TrainerEntity['id'];

  @Column({ type: 'jsonb' })
  data: Trainer;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static fromDomain(trainer: TrainerEntity): TrainerOrm {
    const orm = new TrainerOrm();
    orm.id = trainer.id;
    orm.data = {
      name: trainer.name,
      description: trainer.description,
      image: trainer.image,
      gender: trainer.gender,
      ethnicity: trainer.ethnicity,
      price: trainer.price,
      rating: trainer.rating,
      qualifications: trainer.qualifications,
      specialties: trainer.specialties,
      contacts: trainer.contacts,
      locations: trainer.locations,
      schedules: trainer.schedules,
      paymentMethods: trainer.paymentMethods,
      hiringFormTemplateId: trainer.hiringFormTemplateId,
    };
    return orm;
  }

  toDomain(): TrainerEntity {
    return TrainerEntity.create(
      {
        name: this.data.name,
        description: this.data.description,
        image: this.data.image,
        gender: this.data.gender,
        ethnicity: this.data.ethnicity,
        price: this.data.price,
        rating: this.data.rating,
        qualifications: this.data.qualifications,
        specialties: this.data.specialties,
        contacts: this.data.contacts,
        locations: this.data.locations,
        schedules: this.data.schedules,
        paymentMethods: this.data.paymentMethods,
        hiringFormTemplateId: this.data.hiringFormTemplateId,
      },
      this.id
    );
  }
}
