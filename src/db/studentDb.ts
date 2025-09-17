import sqlite3 from 'sqlite3';

import type ChildrenType from '@/types/ChildrenType';

sqlite3.verbose();

export const getStudentsDb = async (): Promise<ChildrenType[]> => {
    const url = process.env.DB;
  const db = new sqlite3.Database(url || "");

  const groups = await new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM student';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        db.close();
        return;
      }
      resolve(rows);
      db.close();
    });
  });

  return groups as ChildrenType[];
};
