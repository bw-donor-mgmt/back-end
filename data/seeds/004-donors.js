
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('donors').del().then(() => {
        return knex('donors').insert([
        {name: 'John Smith', phone: '(602) 000-0000', email: 'Dajohnnie0987@email.com', contacted_on: '12/23/2018', method: 'email'},
        {name: 'Apple Johnson', phone: '(769) 555-5555', email: 'ApplePie_gg@none.com', contacted_on: '05/06/2019', method: 'phone'},
        {name: 'Chazzy Henson', phone: '(433) 444-4444', email: 'ChazzJazz24@noya.com', contacted_on: '01/15/2018', method: 'email' }
      ]);
    })   
};
