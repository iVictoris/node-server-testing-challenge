const db = require("../knex.config");

const table = "users";

const find = () => {
  return db(table);
};

const findById = id => {
  return db(table)
    .where({ id })
    .first();
};

const findByUsername = username => {
  return null;
};

const update = (id, changes) => {
  return db(table)
    .where({ id })
    .update(changes);
};

const add = async model => {
  const [id] = await db(table).insert(model);
  return findById(id);
};

const remove = id => {
  return db(table)
    .where({ id })
    .del();
};

module.exports = {
  find,
  findById,
  findByUsername,
  update,
  add,
  remove
};
