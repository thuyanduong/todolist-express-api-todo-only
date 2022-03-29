/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, title: 'wake up', description: 'good morning', completed: true},
    {id: 2, title: 'eat', description: 'om nom', completed: false},
    {id: 3, title: 'sleep', description: 'catch some zzzs', completed: false}
  ]);
};
