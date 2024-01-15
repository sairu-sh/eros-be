import { Knex } from "knex";

const TABLE_NAME = "matches";

/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();

    table
      .integer("primary_user")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade");

    table
      .integer("secondary_user")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade");

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
