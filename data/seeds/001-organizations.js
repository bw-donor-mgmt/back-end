
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('organizations').truncate().then(() => {
        insert([
        {name: 'Health 4 Jackson', mission: 'To provide health care to those who cannot afford it!'},
        {name: 'Cleaner Jackson', mission: 'To help clean the streets of Jackson'},
        {name: 'JRR Fans Unit', mission: 'To provide a place where J.R.R Tolkein fans can meet and have fun. '}
      ]);
    });
};
