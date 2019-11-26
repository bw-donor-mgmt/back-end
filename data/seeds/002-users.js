const bcrypt = require('bcryptjs'); 

exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').del().then(() => {
        return knex('users').insert([
        {username: 'user1', password: bcrypt.hashSync('pass1'), email: 'user1@email.com'},
        {username: 'user2', password: bcrypt.hashSync('pass2'), email: 'user2@email.com'},
        {username: 'user3', password: bcrypt.hashSync('pass3'), email: 'user3@email.com'}
      ]);
    })
};
