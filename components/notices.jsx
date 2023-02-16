const db = require('../components/db');

(async () => {
  try {
    const [rows, fields] = await db.execute(`
      INSERT INTO notices (title, description, date)
      VALUES
        ('Notice 1', 'This is notice 1', '2023-02-01 10:00:00'),
        ('Notice 2', 'This is notice 2', '2023-02-03 14:30:00'),
        ('Notice 3', 'This is notice 3', '2023-02-05 09:15:00')
    `);
    console.log(`Inserted ${rows.affectedRows} rows`);
  } catch (error) {
    console.log(error);
  }
})();
