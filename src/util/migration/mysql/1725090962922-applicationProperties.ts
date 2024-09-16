import { MigrationInterface, QueryRunner } from "typeorm";

export class ApplicationProperties1725090962922 implements MigrationInterface {
	name = "ApplicationProperties1725090962922";

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE `applications` ADD COLUMN `guild_id` VARCHAR(255) DEFAULT NULL",
		);
		await queryRunner.query(
			"ALTER TABLE `applications` ADD COLUMN `custom_install_url` TEXT DEFAULT NULL",
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			"ALTER TABLE `applications` DROP COLUMN `guild_id`",
		);
		await queryRunner.query(
			"ALTER TABLE `applications` DROP COLUMN `custom_install_url`",
		);
	}
}
