
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'user1', password: 'pass1', organization: '1'},
        {id: 2, username: 'user2', password: 'pass2', organization: '2'},
        {id: 3, username: 'user3', password: 'pass3', organization: '1'}
      ]);
  
};
