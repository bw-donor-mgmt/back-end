
exports.seed = function(knex) {
      return knex('donations').insert([
        {id: 1, amount: 55.32 , date: '09/26/2018', campaign_id: 1, donor_id: 1},
        {id: 2, amount: 102.39, date: '07/05/2019', campaign_id: 2, donor_id: 1},
        {id: 3, amount: 0.98, date: '05/05/2019', campaign_id: 3, donor_id: 2},
        {id: 4, amount: 5, date: '09/24/2019', campaign_id: 1,  donor_id: 3}
      ]);

};
