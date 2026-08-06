import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// import ( Enitity, PrimaryGeneratedColumn) from 'typeorm';

@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
