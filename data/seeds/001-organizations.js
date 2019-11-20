
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('organizations').truncate().then(() => {
        return knex('organizations').insert([
        {id: 1, name: 'Health 4 Jackson', mission: 'To provide health care to those who cannot afford it!'},
        {id: 2, name: 'Cleaner Jackson', mission: 'To help clean the streets of Jackson'},
        {id: 3, name: 'JRR Fans Unit', mission: 'To provide a place where J.R.R Tolkein fans can meet and have fun. '}
      ]);
    });
};
