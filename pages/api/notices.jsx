import db from '../../components/db';

export default async function handler(req, res) {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM notices');
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error retrieving notices' });
  }
}
