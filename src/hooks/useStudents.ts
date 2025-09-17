import { useQuery } from '@tanstack/react-query';
import { getGroupsApi } from '@/api/groupsApi';
import {getStudentsApi } from '@/api/studentsApi'
import type GroupInterface from '@/types/GroupInterface';
import ChildrenType from '@/types/ChildrenType';

interface ChildrenTypeHook {
  students: ChildrenType[];
}

const useStudents = (): ChildrenTypeHook => {
  // const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['students'],
    queryFn: () => getStudentsApi(),
    enabled: false,
  });

  return {
    students: data ?? [],
  };
};

export default useStudents;
