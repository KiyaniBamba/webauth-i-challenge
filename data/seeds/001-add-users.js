exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    {username: 'Kiyani', password: '1111'},
    {username: 'Bamba', password: '2222'}
  ]);
};