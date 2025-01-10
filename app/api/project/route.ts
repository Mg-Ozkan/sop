import { promises as fs } from 'fs';
import path from 'path';
import { type Project } from '../BaseService'

const projectFilePath = path.join(process.cwd(), 'public', 'projectData.json');

// Function to read the project data from projectData.json
async function getProjectData(): Promise<Project[]> {
  const fileContents = await fs.readFile(projectFilePath, 'utf8');
  return JSON.parse(fileContents);
}

// Function to handle the GET request to fetch projects by studentId (user-id from headers)
export async function GET(request: Request) {
  try {
    const studentId = parseInt(request.headers.get('user-id') || '', 10);
    const projectData = await getProjectData();
    const studentProjects = projectData.filter(project => project.studentId === studentId);

    // If no projects are found for the student
    if (studentProjects.length === 0) {
      return new Response(JSON.stringify({ message: 'No projects found for this student' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return the filtered projects
    return new Response(JSON.stringify(studentProjects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error' }),
      { status: 500 }
    );
  }
}
