import { getData, writeData, checkRole } from '../../BaseService';

// PUT request - Update an existing item (restricted to teachers)
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const userId = parseInt(request.headers.get('user-id') || '');

  // Check if the user has the required role
  const roleCheck = await checkRole(userId, 'teacher');
  if (!roleCheck.authorized) {
    return new Response(JSON.stringify({ message: roleCheck.message }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data = await getData();
  const id = parseInt(params.id);

  const itemIndex = data.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return new Response(JSON.stringify({ message: 'Item not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const updatedItem = await request.json();
  data[itemIndex] = { ...data[itemIndex], ...updatedItem };

  await writeData(data);

  return new Response(JSON.stringify(data[itemIndex]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// DELETE request - Delete an item (restricted to teachers)
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const userId = parseInt(request.headers.get('user-id') || '');

  // Check if the user has the required role
  const roleCheck = await checkRole(userId, 'teacher');
  if (!roleCheck.authorized) {
    return new Response(JSON.stringify({ message: roleCheck.message }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const data = await getData();
  const id = parseInt(params.id);

  const itemIndex = data.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return new Response(JSON.stringify({ message: 'Item not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const deletedItem = data.splice(itemIndex, 1)[0];
  await writeData(data);

  return new Response(JSON.stringify(deletedItem), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
