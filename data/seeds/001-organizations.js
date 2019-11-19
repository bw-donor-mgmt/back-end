
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Organization1', mission: 'Remember, a Jedi can feel the Force flowing through him. You mean it controls your actions? Partially. But it also obeys your commands. Hokey religions and ancient weapons are no match for a good blaster at your side, kid. You don\'t believe in the Force, do you?'},
        {id: 2, name: 'Organization2', mission: 'General Kenobi, years ago you served my father in the Clone Wars. Now he begs you to help him in his struggle against the Empire. I regret that I am unable to present my father\'s request to you in person, but my ship has fallen under attack and I\'m afraid my mission to bring you to Alderaan has failed.'},
        {id: 3, name: 'Organization3', mission: 'Oh, come on. How could you know my father? You don\'t even know who I am. Oh, I don\'t even know what I\'m doing here. We\'re wasting our time. I cannot teach him. The boy has no patience. He will learn patience. Hmmm. Much anger in him, like his father. Was I any different when you taught me? Hah. He is not ready. Yoda! '}
      ]);
    });
};
