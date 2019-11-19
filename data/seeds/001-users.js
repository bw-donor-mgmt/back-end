
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'user1', password: 'pass1', organization: '1'},
        {id: 2, username: 'user2', password: 'pass2', organization: '2'},
        {id: 3, username: 'user3', password: 'pass3', organization: '1'}
      ]);
    });
};
