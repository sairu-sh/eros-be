import { Knex } from "knex";

const TABLE_NAME = "user_interests";

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
        { uid: 1, interest: 6 },
        { uid: 1, interest: 27 },
        { uid: 1, interest: 17 },
        { uid: 2, interest: 30 },
        { uid: 2, interest: 5 },
        { uid: 2, interest: 3 },
        { uid: 2, interest: 28 },
        { uid: 3, interest: 9 },
        { uid: 3, interest: 3 },
        { uid: 3, interest: 8 },
        { uid: 4, interest: 6 },
        { uid: 4, interest: 29 },
        { uid: 4, interest: 16 },
        { uid: 4, interest: 28 },
        { uid: 5, interest: 1 },
        { uid: 5, interest: 9 },
        { uid: 6, interest: 6 },
        { uid: 6, interest: 24 },
        { uid: 6, interest: 17 },
        { uid: 6, interest: 7 },
        { uid: 6, interest: 23 },
        { uid: 7, interest: 17 },
        { uid: 7, interest: 19 },
        { uid: 7, interest: 25 },
        { uid: 7, interest: 21 },
        { uid: 8, interest: 12 },
        { uid: 8, interest: 5 },
        { uid: 8, interest: 1 },
        { uid: 8, interest: 25 },
        { uid: 8, interest: 21 },
        { uid: 9, interest: 19 },
        { uid: 9, interest: 20 },
        { uid: 10, interest: 1 },
        { uid: 10, interest: 25 },
        { uid: 10, interest: 9 },
        { uid: 10, interest: 17 },
        { uid: 11, interest: 16 },
        { uid: 11, interest: 20 },
        { uid: 11, interest: 1 },
        { uid: 11, interest: 14 },
        { uid: 12, interest: 26 },
        { uid: 12, interest: 25 },
        { uid: 13, interest: 16 },
        { uid: 13, interest: 29 },
        { uid: 14, interest: 28 },
        { uid: 14, interest: 27 },
        { uid: 14, interest: 18 },
        { uid: 14, interest: 6 },
        { uid: 14, interest: 14 },
        { uid: 15, interest: 17 },
        { uid: 15, interest: 24 },
        { uid: 15, interest: 9 },
        { uid: 15, interest: 3 },
        { uid: 15, interest: 7 },
        { uid: 16, interest: 24 },
        { uid: 16, interest: 19 },
        { uid: 17, interest: 10 },
        { uid: 17, interest: 19 },
        { uid: 18, interest: 23 },
        { uid: 18, interest: 18 },
        { uid: 18, interest: 30 },
        { uid: 19, interest: 2 },
        { uid: 19, interest: 4 },
        { uid: 19, interest: 30 },
        { uid: 19, interest: 25 },
        { uid: 20, interest: 1 },
        { uid: 20, interest: 19 },
        { uid: 21, interest: 25 },
        { uid: 21, interest: 8 },
        { uid: 21, interest: 22 },
        { uid: 21, interest: 10 },
        { uid: 21, interest: 26 },
        { uid: 22, interest: 20 },
        { uid: 22, interest: 18 },
        { uid: 22, interest: 23 },
        { uid: 23, interest: 4 },
        { uid: 23, interest: 1 },
        { uid: 23, interest: 23 },
        { uid: 23, interest: 3 },
        { uid: 23, interest: 11 },
        { uid: 24, interest: 30 },
        { uid: 24, interest: 22 },
        { uid: 24, interest: 20 },
        { uid: 24, interest: 19 },
        { uid: 25, interest: 21 },
        { uid: 25, interest: 28 },
        { uid: 25, interest: 7 },
        { uid: 26, interest: 1 },
        { uid: 26, interest: 18 },
        { uid: 26, interest: 6 },
        { uid: 27, interest: 27 },
        { uid: 27, interest: 15 },
        { uid: 27, interest: 11 },
        { uid: 27, interest: 4 },
        { uid: 27, interest: 8 },
        { uid: 28, interest: 11 },
        { uid: 28, interest: 5 },
        { uid: 29, interest: 28 },
        { uid: 29, interest: 10 },
        { uid: 29, interest: 27 },
        { uid: 30, interest: 6 },
        { uid: 30, interest: 28 },
        { uid: 30, interest: 25 },
        { uid: 30, interest: 4 },
      ]);
    });
}