
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users-orgs').del()
    .then(function () {
      // Inserts seed entries
      return knex('users-orgs').insert([
        {user_id: 1, organization_id: 1},
        {user_id: 2, organization_id: 3},
        {user_id: 3, organization_id: 2}, 
        {user_id: 3, organization_id: 1}, 
        {user_id: 2, organization_id: 1},
        {user_id: 2, organization_id: 2}
      ]);
    });
};
