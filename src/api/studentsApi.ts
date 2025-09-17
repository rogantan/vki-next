import ChildrenType from '@/types/ChildrenType';
import type GroupInterface from '@/types/GroupInterface';

export const getStudentsApi = async (): Promise<ChildrenType[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}students`);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}${response.statusText}`);
    }
    const students = await response.json() as ChildrenType[];
    return students;
  }
  catch (err) {
    console.log('>>> getStudentsApi', err);
    return [] as ChildrenType[];
  }
};
