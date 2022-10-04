import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("planet")
export default class Planet {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  climate!: string;

  @Column()
  terrain!: string;

  @Column()
  starWarsMovies!: number;

  @CreateDateColumn()
  created_at!: Date;
}
