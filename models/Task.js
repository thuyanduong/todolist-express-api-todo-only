const db = require('../db/config')

class Task {
  static getTask(id){
    const queryText = "SELECT * FROM users JOIN tasks ON tasks.user_id = users.id WHERE tasks.id = $1";
    return db.query(queryText, [id]).then(results => {return results.rows[0]});
  }

  static getTasks(){
    const queryText = "SELECT * FROM tasks ORDER BY id;";
    return db.query(queryText).then(results => {return results.rows});
  }
}

module.exports = Task