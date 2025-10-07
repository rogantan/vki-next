import { getStudentsDb } from '@/db/studentDb';
import { NextRequest } from 'next/server';

export async function GET(): Promise<Response> {
  const groups = await getStudentsDb();

  return new Response(JSON.stringify(groups), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// export async function POST(request: NextRequest): Promise<Response> {
//   const body = request.json();
//   const NewStudent = 

//   return new Response(JSON.stringify(NewStudent), {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };
