import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677669452243 implements MigrationInterface {
    name = 'createTables1677669452243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shedules_users_properties" ("id" SERIAL NOT NULL, "date" date NOT NULL, "hour" TIMESTAMP NOT NULL, "userId" integer, "realEstateId" integer, CONSTRAINT "PK_457a447795508f5347c3e531c23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shedules_users_properties" ADD CONSTRAINT "FK_e3143fc030278a738eef4ebb9d6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shedules_users_properties" ADD CONSTRAINT "FK_3ffdf969781b335000d487caec1" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shedules_users_properties" DROP CONSTRAINT "FK_3ffdf969781b335000d487caec1"`);
        await queryRunner.query(`ALTER TABLE "shedules_users_properties" DROP CONSTRAINT "FK_e3143fc030278a738eef4ebb9d6"`);
        await queryRunner.query(`DROP TABLE "shedules_users_properties"`);
    }

}
