import { MigrationInterface, QueryRunner } from "typeorm";

export class CodeCleanup21660257795259 implements MigrationInterface {
    name = 'CodeCleanup21660257795259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "temporary_guilds" (
                "id" varchar PRIMARY KEY NOT NULL,
                "afk_channel_id" varchar,
                "afk_timeout" integer,
                "banner" varchar,
                "default_message_notifications" integer,
                "description" varchar,
                "discovery_splash" varchar,
                "explicit_content_filter" integer,
                "features" text NOT NULL,
                "primary_category_id" integer,
                "icon" varchar,
                "large" boolean,
                "max_members" integer,
                "max_presences" integer,
                "max_video_channel_users" integer,
                "member_count" integer,
                "presence_count" integer,
                "template_id" varchar,
                "mfa_level" integer,
                "name" varchar NOT NULL,
                "owner_id" varchar,
                "preferred_locale" varchar,
                "premium_subscription_count" integer,
                "premium_tier" integer,
                "public_updates_channel_id" varchar,
                "rules_channel_id" varchar,
                "region" varchar,
                "splash" varchar,
                "system_channel_id" varchar,
                "system_channel_flags" integer,
                "unavailable" boolean,
                "verification_level" integer,
                "welcome_screen" text NOT NULL,
                "widget_channel_id" varchar,
                "widget_enabled" boolean,
                "nsfw_level" integer,
                "nsfw" boolean,
                "parent" varchar,
                "premium_progress_bar_enabled" boolean NOT NULL,
                CONSTRAINT "FK_f591a66b8019d87b0fe6c12dad6" FOREIGN KEY ("afk_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_e2a2f873a64a5cf62526de42325" FOREIGN KEY ("template_id") REFERENCES "templates" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_fc1a451727e3643ca572a3bb394" FOREIGN KEY ("owner_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_8d450b016dc8bec35f36729e4b0" FOREIGN KEY ("public_updates_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_95828668aa333460582e0ca6396" FOREIGN KEY ("rules_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_cfc3d3ad260f8121c95b31a1fce" FOREIGN KEY ("system_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_9d1d665379eefde7876a17afa99" FOREIGN KEY ("widget_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_guilds"(
                    "id",
                    "afk_channel_id",
                    "afk_timeout",
                    "banner",
                    "default_message_notifications",
                    "description",
                    "discovery_splash",
                    "explicit_content_filter",
                    "features",
                    "primary_category_id",
                    "icon",
                    "large",
                    "max_members",
                    "max_presences",
                    "max_video_channel_users",
                    "member_count",
                    "presence_count",
                    "template_id",
                    "mfa_level",
                    "name",
                    "owner_id",
                    "preferred_locale",
                    "premium_subscription_count",
                    "premium_tier",
                    "public_updates_channel_id",
                    "rules_channel_id",
                    "region",
                    "splash",
                    "system_channel_id",
                    "system_channel_flags",
                    "unavailable",
                    "verification_level",
                    "welcome_screen",
                    "widget_channel_id",
                    "widget_enabled",
                    "nsfw_level",
                    "nsfw",
                    "parent",
                    "premium_progress_bar_enabled"
                )
            SELECT "id",
                "afk_channel_id",
                "afk_timeout",
                "banner",
                "default_message_notifications",
                "description",
                "discovery_splash",
                "explicit_content_filter",
                "features",
                "primary_category_id",
                "icon",
                "large",
                "max_members",
                "max_presences",
                "max_video_channel_users",
                "member_count",
                "presence_count",
                "template_id",
                "mfa_level",
                "name",
                "owner_id",
                "preferred_locale",
                "premium_subscription_count",
                "premium_tier",
                "public_updates_channel_id",
                "rules_channel_id",
                "region",
                "splash",
                "system_channel_id",
                "system_channel_flags",
                "unavailable",
                "verification_level",
                "welcome_screen",
                "widget_channel_id",
                "widget_enabled",
                "nsfw_level",
                "nsfw",
                "parent",
                "premium_progress_bar_enabled"
            FROM "guilds"
        `);
        await queryRunner.query(`
            DROP TABLE "guilds"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_guilds"
                RENAME TO "guilds"
        `);
        await queryRunner.query(`
            CREATE TABLE "temporary_guilds" (
                "id" varchar PRIMARY KEY NOT NULL,
                "afk_channel_id" varchar,
                "afk_timeout" integer,
                "banner" varchar,
                "default_message_notifications" integer,
                "description" varchar,
                "discovery_splash" varchar,
                "explicit_content_filter" integer,
                "features" text NOT NULL,
                "primary_category_id" integer,
                "icon" varchar,
                "large" boolean,
                "max_members" integer,
                "max_presences" integer,
                "max_video_channel_users" integer,
                "member_count" integer,
                "presence_count" integer,
                "template_id" varchar,
                "mfa_level" integer,
                "name" varchar NOT NULL,
                "owner_id" varchar,
                "preferred_locale" varchar,
                "premium_subscription_count" integer,
                "premium_tier" integer,
                "public_updates_channel_id" varchar,
                "rules_channel_id" varchar,
                "region" varchar,
                "splash" varchar,
                "system_channel_id" varchar,
                "system_channel_flags" integer,
                "unavailable" boolean,
                "verification_level" integer,
                "welcome_screen" text NOT NULL,
                "widget_channel_id" varchar,
                "widget_enabled" boolean,
                "nsfw_level" integer,
                "nsfw" boolean,
                "parent" varchar,
                "premium_progress_bar_enabled" boolean,
                CONSTRAINT "FK_f591a66b8019d87b0fe6c12dad6" FOREIGN KEY ("afk_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_e2a2f873a64a5cf62526de42325" FOREIGN KEY ("template_id") REFERENCES "templates" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_fc1a451727e3643ca572a3bb394" FOREIGN KEY ("owner_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_8d450b016dc8bec35f36729e4b0" FOREIGN KEY ("public_updates_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_95828668aa333460582e0ca6396" FOREIGN KEY ("rules_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_cfc3d3ad260f8121c95b31a1fce" FOREIGN KEY ("system_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_9d1d665379eefde7876a17afa99" FOREIGN KEY ("widget_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "temporary_guilds"(
                    "id",
                    "afk_channel_id",
                    "afk_timeout",
                    "banner",
                    "default_message_notifications",
                    "description",
                    "discovery_splash",
                    "explicit_content_filter",
                    "features",
                    "primary_category_id",
                    "icon",
                    "large",
                    "max_members",
                    "max_presences",
                    "max_video_channel_users",
                    "member_count",
                    "presence_count",
                    "template_id",
                    "mfa_level",
                    "name",
                    "owner_id",
                    "preferred_locale",
                    "premium_subscription_count",
                    "premium_tier",
                    "public_updates_channel_id",
                    "rules_channel_id",
                    "region",
                    "splash",
                    "system_channel_id",
                    "system_channel_flags",
                    "unavailable",
                    "verification_level",
                    "welcome_screen",
                    "widget_channel_id",
                    "widget_enabled",
                    "nsfw_level",
                    "nsfw",
                    "parent",
                    "premium_progress_bar_enabled"
                )
            SELECT "id",
                "afk_channel_id",
                "afk_timeout",
                "banner",
                "default_message_notifications",
                "description",
                "discovery_splash",
                "explicit_content_filter",
                "features",
                "primary_category_id",
                "icon",
                "large",
                "max_members",
                "max_presences",
                "max_video_channel_users",
                "member_count",
                "presence_count",
                "template_id",
                "mfa_level",
                "name",
                "owner_id",
                "preferred_locale",
                "premium_subscription_count",
                "premium_tier",
                "public_updates_channel_id",
                "rules_channel_id",
                "region",
                "splash",
                "system_channel_id",
                "system_channel_flags",
                "unavailable",
                "verification_level",
                "welcome_screen",
                "widget_channel_id",
                "widget_enabled",
                "nsfw_level",
                "nsfw",
                "parent",
                "premium_progress_bar_enabled"
            FROM "guilds"
        `);
        await queryRunner.query(`
            DROP TABLE "guilds"
        `);
        await queryRunner.query(`
            ALTER TABLE "temporary_guilds"
                RENAME TO "guilds"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "guilds"
                RENAME TO "temporary_guilds"
        `);
        await queryRunner.query(`
            CREATE TABLE "guilds" (
                "id" varchar PRIMARY KEY NOT NULL,
                "afk_channel_id" varchar,
                "afk_timeout" integer,
                "banner" varchar,
                "default_message_notifications" integer,
                "description" varchar,
                "discovery_splash" varchar,
                "explicit_content_filter" integer,
                "features" text NOT NULL,
                "primary_category_id" integer,
                "icon" varchar,
                "large" boolean,
                "max_members" integer,
                "max_presences" integer,
                "max_video_channel_users" integer,
                "member_count" integer,
                "presence_count" integer,
                "template_id" varchar,
                "mfa_level" integer,
                "name" varchar NOT NULL,
                "owner_id" varchar,
                "preferred_locale" varchar,
                "premium_subscription_count" integer,
                "premium_tier" integer,
                "public_updates_channel_id" varchar,
                "rules_channel_id" varchar,
                "region" varchar,
                "splash" varchar,
                "system_channel_id" varchar,
                "system_channel_flags" integer,
                "unavailable" boolean,
                "verification_level" integer,
                "welcome_screen" text NOT NULL,
                "widget_channel_id" varchar,
                "widget_enabled" boolean,
                "nsfw_level" integer,
                "nsfw" boolean,
                "parent" varchar,
                "premium_progress_bar_enabled" boolean NOT NULL,
                CONSTRAINT "FK_f591a66b8019d87b0fe6c12dad6" FOREIGN KEY ("afk_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_e2a2f873a64a5cf62526de42325" FOREIGN KEY ("template_id") REFERENCES "templates" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_fc1a451727e3643ca572a3bb394" FOREIGN KEY ("owner_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_8d450b016dc8bec35f36729e4b0" FOREIGN KEY ("public_updates_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_95828668aa333460582e0ca6396" FOREIGN KEY ("rules_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_cfc3d3ad260f8121c95b31a1fce" FOREIGN KEY ("system_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_9d1d665379eefde7876a17afa99" FOREIGN KEY ("widget_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "guilds"(
                    "id",
                    "afk_channel_id",
                    "afk_timeout",
                    "banner",
                    "default_message_notifications",
                    "description",
                    "discovery_splash",
                    "explicit_content_filter",
                    "features",
                    "primary_category_id",
                    "icon",
                    "large",
                    "max_members",
                    "max_presences",
                    "max_video_channel_users",
                    "member_count",
                    "presence_count",
                    "template_id",
                    "mfa_level",
                    "name",
                    "owner_id",
                    "preferred_locale",
                    "premium_subscription_count",
                    "premium_tier",
                    "public_updates_channel_id",
                    "rules_channel_id",
                    "region",
                    "splash",
                    "system_channel_id",
                    "system_channel_flags",
                    "unavailable",
                    "verification_level",
                    "welcome_screen",
                    "widget_channel_id",
                    "widget_enabled",
                    "nsfw_level",
                    "nsfw",
                    "parent",
                    "premium_progress_bar_enabled"
                )
            SELECT "id",
                "afk_channel_id",
                "afk_timeout",
                "banner",
                "default_message_notifications",
                "description",
                "discovery_splash",
                "explicit_content_filter",
                "features",
                "primary_category_id",
                "icon",
                "large",
                "max_members",
                "max_presences",
                "max_video_channel_users",
                "member_count",
                "presence_count",
                "template_id",
                "mfa_level",
                "name",
                "owner_id",
                "preferred_locale",
                "premium_subscription_count",
                "premium_tier",
                "public_updates_channel_id",
                "rules_channel_id",
                "region",
                "splash",
                "system_channel_id",
                "system_channel_flags",
                "unavailable",
                "verification_level",
                "welcome_screen",
                "widget_channel_id",
                "widget_enabled",
                "nsfw_level",
                "nsfw",
                "parent",
                "premium_progress_bar_enabled"
            FROM "temporary_guilds"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_guilds"
        `);
        await queryRunner.query(`
            ALTER TABLE "guilds"
                RENAME TO "temporary_guilds"
        `);
        await queryRunner.query(`
            CREATE TABLE "guilds" (
                "id" varchar PRIMARY KEY NOT NULL,
                "afk_channel_id" varchar,
                "afk_timeout" integer,
                "banner" varchar,
                "default_message_notifications" integer,
                "description" varchar,
                "discovery_splash" varchar,
                "explicit_content_filter" integer,
                "features" text NOT NULL,
                "primary_category_id" integer,
                "icon" varchar,
                "large" boolean,
                "max_members" integer,
                "max_presences" integer,
                "max_video_channel_users" integer,
                "member_count" integer,
                "presence_count" integer,
                "template_id" varchar,
                "mfa_level" integer,
                "name" varchar NOT NULL,
                "owner_id" varchar,
                "preferred_locale" varchar,
                "premium_subscription_count" integer,
                "premium_tier" integer,
                "public_updates_channel_id" varchar,
                "rules_channel_id" varchar,
                "region" varchar,
                "splash" varchar,
                "system_channel_id" varchar,
                "system_channel_flags" integer,
                "unavailable" boolean,
                "verification_level" integer,
                "welcome_screen" text NOT NULL,
                "widget_channel_id" varchar,
                "widget_enabled" boolean,
                "nsfw_level" integer,
                "nsfw" boolean,
                "parent" varchar,
                "premium_progress_bar_enabled" boolean NOT NULL,
                CONSTRAINT "FK_f591a66b8019d87b0fe6c12dad6" FOREIGN KEY ("afk_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_e2a2f873a64a5cf62526de42325" FOREIGN KEY ("template_id") REFERENCES "templates" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_fc1a451727e3643ca572a3bb394" FOREIGN KEY ("owner_id") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_8d450b016dc8bec35f36729e4b0" FOREIGN KEY ("public_updates_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_95828668aa333460582e0ca6396" FOREIGN KEY ("rules_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_cfc3d3ad260f8121c95b31a1fce" FOREIGN KEY ("system_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
                CONSTRAINT "FK_9d1d665379eefde7876a17afa99" FOREIGN KEY ("widget_channel_id") REFERENCES "channels" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
            )
        `);
        await queryRunner.query(`
            INSERT INTO "guilds"(
                    "id",
                    "afk_channel_id",
                    "afk_timeout",
                    "banner",
                    "default_message_notifications",
                    "description",
                    "discovery_splash",
                    "explicit_content_filter",
                    "features",
                    "primary_category_id",
                    "icon",
                    "large",
                    "max_members",
                    "max_presences",
                    "max_video_channel_users",
                    "member_count",
                    "presence_count",
                    "template_id",
                    "mfa_level",
                    "name",
                    "owner_id",
                    "preferred_locale",
                    "premium_subscription_count",
                    "premium_tier",
                    "public_updates_channel_id",
                    "rules_channel_id",
                    "region",
                    "splash",
                    "system_channel_id",
                    "system_channel_flags",
                    "unavailable",
                    "verification_level",
                    "welcome_screen",
                    "widget_channel_id",
                    "widget_enabled",
                    "nsfw_level",
                    "nsfw",
                    "parent",
                    "premium_progress_bar_enabled"
                )
            SELECT "id",
                "afk_channel_id",
                "afk_timeout",
                "banner",
                "default_message_notifications",
                "description",
                "discovery_splash",
                "explicit_content_filter",
                "features",
                "primary_category_id",
                "icon",
                "large",
                "max_members",
                "max_presences",
                "max_video_channel_users",
                "member_count",
                "presence_count",
                "template_id",
                "mfa_level",
                "name",
                "owner_id",
                "preferred_locale",
                "premium_subscription_count",
                "premium_tier",
                "public_updates_channel_id",
                "rules_channel_id",
                "region",
                "splash",
                "system_channel_id",
                "system_channel_flags",
                "unavailable",
                "verification_level",
                "welcome_screen",
                "widget_channel_id",
                "widget_enabled",
                "nsfw_level",
                "nsfw",
                "parent",
                "premium_progress_bar_enabled"
            FROM "temporary_guilds"
        `);
        await queryRunner.query(`
            DROP TABLE "temporary_guilds"
        `);
    }

}