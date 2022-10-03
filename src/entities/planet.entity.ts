import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("planet")
export default class Survey {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  climate!: string;

  @Column()
  terrain!: string;

  @CreateDateColumn()
  created_at!: Date;
}
