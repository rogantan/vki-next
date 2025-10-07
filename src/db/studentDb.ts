import sqlite3 from 'sqlite3';

import type ChildrenType from '@/types/ChildrenType';
import StudentInterface from '@/types/ChildrenType';

sqlite3.verbose();

export const getStudentsDb = async (): Promise<StudentInterface[]> => {
    const url = process.env.DB;
  const db = new sqlite3.Database(url || "");

  const groups = await new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM students';
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

  return groups as StudentInterface[];
};


export const deleteStudentDb = async (studentId: number): Promise<number> => {
  const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');

  await new Promise((resolve, reject) => {
    db.run('DELETE FROM students WHERE id=?', [studentId], (err) => {
      if (err) {
        reject(err);
        db.close();
        return;
      }
      resolve(studentId);
      db.close();
    });
  });

  return studentId;
};

// export const addStudentDb = async(): Promise<number> => {
//   const db = new sqlite3.Database(process.env.DB ?? './db/vki-web.db');
//   await new Promise((resolve, reject) => {
//     db.run('DELETE FROM students WHERE id=?', [studentId], (err) => {
//       if (err) {
//         reject(err);
//         db.close();
//         return;
//       }
//       resolve(studentId);
//       db.close();
//     });
//   });

//   return studentId;
// }