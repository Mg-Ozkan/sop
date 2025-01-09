
import {type SOP, checkRole, getData, writeData, } from '../BaseService';

// GET request - Get all items (open to everyone)
export async function GET() {
  const data = await getData();
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
 
// POST request - Create a new item (restricted to teachers)
export async function POST(request: Request) {
  const userId = parseInt(request.headers.get('user-id') || '');

  // Check if the user has the required role
  const roleCheck = await checkRole(userId, 'teacher');
  if (!roleCheck.authorized) {
    return new Response(JSON.stringify({ message: roleCheck.message }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Proceed with the creation of a new item if authorized
  const data = await getData();
  const newItem = await request.json() as SOP;

  const maxId = data.length > 0 ? Math.max(...data.map(item => item.id)) : 0;
  newItem.id = maxId + 1;

  data.push(newItem);
  await writeData(data);

  return new Response(JSON.stringify(newItem), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

