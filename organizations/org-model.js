const knex = require('../data/db-config.js');

const findByName = name => {
    return knex('organizations').whereRaw('LOWER(name) LIKE ?', '%'+name.toLowerCase()+'%');
}

module.exports = { findByName}