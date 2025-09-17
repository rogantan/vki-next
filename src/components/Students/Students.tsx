'use client';

import useStudents from '@/hooks/useStudents';
import styles from './Groups.module.scss';
import StudentInterface from '@/types/StudentInterface';

const Students = (): React.ReactElement => {
  const { students } = useStudents();

  return (
    <div className={styles.Groups}>
      {students.map((student: ChildrenType) => (
        <h2 key={student.id}>
          {student.first_name}
        </h2>
      ))}
    </div>
  );
};

export default Students;
