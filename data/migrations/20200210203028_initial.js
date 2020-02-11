exports.up = async function(knex) {
  await knex.schema.createTable("users", table => {
    table.increments("id"); // primary key
    table.string(`username`).notNullable();
    table.string(`password`).notNullable();
    table.string(`email`).notNullable();
    table.string(`first`).notNullable();
    table.string(`last`).notNullable();

    table.unique(["username", "email"]);
  });
};

exports.down = async function(knex) {};
