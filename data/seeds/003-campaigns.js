
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('campaigns').truncate().then(() =>  {
        return knex('campaigns').insert([
        {name: 'Buy Supplies for Downtown Clinic', description: 'The Downtown Clinic provides healthcare to thousands of citizens each year. The clinic needs your help to expand their services by buying more supplies including medicine and beds. ', goal: 50000, raised: 0 , organization_id: 1},
        {name: 'Clean Downtown Jackson', description: 'Please help us clean up our city so visitors can know that Jackson is the best city in the state', goal: 1000, raised: 0 , organization_id: 2},
        {name: 'Introduce Murrah Middle School Students to JRR', description: 'Help us supply the library of Murrah Junior High with JRR Tolkien books so they can develop a new passion for dwarves, elves, and hobbits! ', goal: 5000, raised: 0 , organization_id: 3}
      ]);

    })
    
};
