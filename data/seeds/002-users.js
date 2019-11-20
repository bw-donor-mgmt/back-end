
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').truncate().then(() => {
        return knex('users').insert([
        {username: 'user1', password: 'pass1', organization_id: '1'},
        {username: 'user2', password: 'pass2', organization_id: '2'},
        {username: 'user3', password: 'pass3', organization_id: '1'}
      ]);
    })
};
