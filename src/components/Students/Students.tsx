'use client';

import useGroups from '@/hooks/useGroups';
import useStudents from '@/hooks/useStudents';

import StudentInterface from '@/types/StudentInterface';

const Students = (): React.ReactElement => {
  const { students } = useStudents();
  const {groups} = useGroups();
  return (
    <div>
      {students.map((student: StudentInterface) => (
        <h2 key={student.id}>
          {student.first_name}
          <div>{groups.find(x => x.id === student.groupId)?.name}</div>
        </h2>
      ))}
    </div>
  );
};

export default Students;
