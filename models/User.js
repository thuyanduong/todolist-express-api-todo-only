const db = require('../db/config')

class User {
  static getUsers(){
    const queryText = "SELECT * FROM users ORDER BY id";
    return db.query(queryText).then(results => results.rows);
  }

  static getUser(id){
    const queryText = "SELECT * FROM users WHERE id = $1";
    return db.query(queryText, [id]).then(results => results.rows[0]);
  }

  static getUsersTask(id){
    const queryText = "SELECT * FROM tasks WHERE user_id = $1";
    return db.query(queryText, [id]).then(results => results.rows);
  }
}

module.exports = User;