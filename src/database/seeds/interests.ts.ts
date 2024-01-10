import { Knex } from "knex";

const TABLE_NAME = "interests";

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
          interest: "walking",
        },
        {
          interest: "k-pop",
        },
        {
          interest: "cooking",
        },
        {
          interest: "reading",
        },
        {
          interest: "sports",
        },
        {
          interest: "instagram",
        },
        {
          interest: "travel",
        },
        {
          interest: "photography",
        },
        {
          interest: "bollywood",
        },
        {
          interest: "DIY",
        },
        {
          interest: "food",
        },
        {
          interest: "dogs",
        },
        {
          interest: "music",
        },
        {
          interest: "hiking",
        },
        {
          interest: "motorbike",
        },
        {
          interest: "potterhead",
        },
        {
          interest: "clubbing",
        },
        {
          interest: "anime",
        },
        {
          interest: "mythology",
        },
        {
          interest: "tiktok",
        },
        {
          interest: "sci-fi",
        },
        {
          interest: "drama",
        },
        {
          interest: "gym",
        },
        {
          interest: "shopping",
        },
        {
          interest: "language exchange",
        },
        {
          interest: "movies",
        },
        {
          interest: "series",
        },
        {
          interest: "tattoos",
        },
        {
          interest: "astrology",
        },
        {
          interest: "coffee",
        },
      ]);
    });
}
