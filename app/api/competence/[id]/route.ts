import { NextResponse } from 'next/server';
import sopData from '../../../../public/sopData.json';
import projectData from '../../../../public/projectData.json';
import userData from '../../../../public/user.json';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { params } = context;
    const id = parseInt(params.id); // Extract ID from params
    const userId = parseInt(request.headers.get('user-id') || '');
    if (isNaN(userId)) {
      return NextResponse.json(
        { message: 'User ID is required in the request headers.' },
        { status: 400 }
      );
    }

    // Fetch user details
    const user = userData.find((user) => user.id === userId);
    if (!user) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    if (user.role === 'teacher') {
      // Teacher: Fetch competencies by sopId
      const sop = sopData.find((s) => parseInt(s.id.toString()) === id);
      if (!sop) {
        return NextResponse.json(
          { message: `No SOP found with ID ${id}.` },
          { status: 404 }
        );
      }

      return NextResponse.json(sop.competenties, { status: 200 });
    } else if (user.role === 'student') {
      // Student: Fetch competencies by projectId
      const project = projectData.find((p) => parseInt(p.id.toString()) === id);
      if (!project) {
        return NextResponse.json(
          { message: `No project found with ID ${id} for the student.` },
          { status: 404 }
        );
      }

      return NextResponse.json(project.competenties, { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'Role not authorized to access this endpoint.' },
        { status: 403 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
    //   { message: 'Internal server error.', error: error.message },
      { status: 500 }
    );
  }
}