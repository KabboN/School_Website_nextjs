export {} // This is an empty export to allow adding the experiment
export const __experimentalTopLevelAwait = true

const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '/components/my_database2.sql'
});

module.exports = connection;
