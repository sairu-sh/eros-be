import { Knex } from "knex";

const TABLE_NAME = "user_details";

/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();

    table.integer("uid").notNullable().unique();

    table.date("dob").notNullable();

    table.string("bio").notNullable().defaultTo("");

    table
      .integer("location")
      .notNullable()
      .defaultTo(1)
      .references("id")
      .inTable("locations")
      .onDelete("cascade");

    table
      .integer("gender")
      .notNullable()
      .references("id")
      .inTable("genders")
      .onDelete("cascade");

    table
      .integer("prefered_gender")
      .notNullable()
      .references("id")
      .inTable("genders")
      .onDelete("cascade");

    table.integer("prefered_age").notNullable().defaultTo(18);

    table.string("college").nullable();

    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));

    table.timestamp("updated_at").nullable();
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
