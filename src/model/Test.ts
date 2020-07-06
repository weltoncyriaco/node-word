import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'test'
})
export class Test {
    @PrimaryGeneratedColumn({
      name: 'id'
    })
    id!: number;

    @Column({
      name: 'name'
    })
    name!: string;

    @Column({
      name: 'surname'
    })
    surname!: string;
}
