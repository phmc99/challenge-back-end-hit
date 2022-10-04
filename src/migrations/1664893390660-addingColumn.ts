import { MigrationInterface, QueryRunner } from "typeorm";

export class addingColumn1664893390660 implements MigrationInterface {
  name = "addingColumn1664893390660";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "planet" ADD "starWarsMovies" integer NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "planet" DROP COLUMN "starWarsMovies"`
    );
  }
}
