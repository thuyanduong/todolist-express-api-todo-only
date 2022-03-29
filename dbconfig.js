const { Pool } = require('pg')

const connectionLocal = {
  user: 'postgres',
  password: '',
  host: 'localhost',
  database: 'todo',
  port: 5432
}

const connectionProduction = {
  connectionString: process.env.DATABASE_URL, 
  ssl: {rejectUnauthorized: false}
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? connectionProduction : connectionLocal)

const query = (queryText, queryParams) => {
  return pool.query(queryText, queryParams) // return that entire database promise
}

module.exports = {query}