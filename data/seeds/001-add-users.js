exports.seed = function(knex) {
  // Inserts seed entries
  return knex('users').insert([
    {username: 'Peter', password: '1111'},
    {username: 'Hassan', password: '2222'}
  ]);
};