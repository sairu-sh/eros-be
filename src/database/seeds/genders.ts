import { Knex } from "knex";

const TABLE_NAME = "genders";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          gender: "male",
        },
        {
          gender: "female",
        },
        {
          gender: "non-binary",
        },
        {
          gender: "other",
        },
      ]);
    });
}
