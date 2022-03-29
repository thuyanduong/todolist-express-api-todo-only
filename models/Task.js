const db = require('../db/config')

class Task {
  static updateTask(id, title, description){
    const queryText = "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING id, title, description, completed";
    return db.query(queryText, [title, description, id]).then(results => {return results.rows[0]});
  }

  static markComplete(id){
    const queryText = "UPDATE tasks SET completed = true WHERE id = $1 RETURNING id, title, description, completed";
    return db.query(queryText, [id]).then(results => {return results.rows[0]});
  }

  static createTask(title, description){
    const queryText = "INSERT INTO tasks (title, description, completed) VALUES ($1, $2, false) RETURNING id, title, description, completed" ;
    return db.query(queryText, [title, description]).then(results => {return results.rows[0]})
  }

  static deleteTask(id){
    const queryText = "DELETE FROM tasks WHERE id = $1  RETURNING id";
    return db.query(queryText, [id]).then(results => {return results.rows[0]})
  }

  static getTask(id){
    const queryText = "SELECT * FROM tasks WHERE id = $1";
    return db.query(queryText, [id]).then(results => {return results.rows[0]});
  }

  static getTasks(){
    const queryText = "SELECT * FROM tasks ORDER BY id;";
    return db.query(queryText).then(results => {return results.rows});
  }
}

module.exports = Task