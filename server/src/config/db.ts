import mysql from 'mysql';

const db=mysql.createConnection(JSON.parse(process.env.AUTH));
export default db;