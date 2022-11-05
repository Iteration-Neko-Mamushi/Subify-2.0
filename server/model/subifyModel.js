const { Pool } = require('pg');

const PG_URI = 'postgres://uewgzhtj:gOGOykq4HNB-jf06kMMM8N4y03-TvAfh@heffalump.db.elephantsql.com/uewgzhtj';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};