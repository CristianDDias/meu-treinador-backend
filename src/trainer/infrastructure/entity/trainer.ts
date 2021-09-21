import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Trainer } from '../../domain/trainer-interface';
import { TrainerEntity } from '../../domain/trainer-entity';

@Entity('trainer')
export class TrainerOrm {
  @PrimaryColumn()
  id: string;

  @Column('jsonb')
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
      rating: trainer.rating,
      qualifications: trainer.qualifications,
      specialties: trainer.specialties,
      contacts: trainer.contacts,
      locations: trainer.locations,
      schedules: trainer.schedules,
    };
    return orm;
  }

  toDomain(): TrainerEntity {
    return TrainerEntity.create(
      {
        name: this.data.name,
        description: this.data.description,
        image: this.data.image,
        rating: this.data.rating,
        qualifications: this.data.qualifications,
        specialties: this.data.specialties,
        contacts: this.data.contacts,
        locations: this.data.locations,
        schedules: this.data.schedules,
      },
      this.id
    );
  }
}
