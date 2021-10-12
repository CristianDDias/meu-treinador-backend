import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CustomerEntity } from '../../domain/customer-entity';
import { Customer } from '../../domain/customer-interface';

@Entity('customer')
export class CustomerOrm {
  @PrimaryColumn({ type: 'varchar' })
  id: CustomerEntity['id'];

  @Column({ type: 'jsonb' })
  data: Customer;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  static fromDomain(customer: CustomerEntity): CustomerOrm {
    const orm = new CustomerOrm();
    orm.id = customer.id;
    orm.data = {
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      favoriteTrainerIds: customer.favoriteTrainerIds,
    };
    return orm;
  }

  toDomain(): CustomerEntity {
    return CustomerEntity.create(
      {
        name: this.data.name,
        email: this.data.email,
        phone: this.data.phone,
        favoriteTrainerIds: this.data.favoriteTrainerIds,
      },
      this.id
    );
  }
}
