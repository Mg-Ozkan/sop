import {type Project, type SOP, getData, checkRole } from '../../BaseService'
import { promises as fs } from 'fs';
import path from 'path';

/// Define the path for project data
const projectFilePath = path.join(process.cwd(), 'public', 'projectData.json');

// Function to read the project data from projectData.json
async function getProjectData(): Promise<Project[]> {
  const fileContents = await fs.readFile(projectFilePath, 'utf8');
  return JSON.parse(fileContents);
}

// Function to write the project data to projectData.json
async function writeProjectData(data: Project[]) {
  await fs.writeFile(projectFilePath, JSON.stringify(data, null, 2));
}

export async function POST(request: Request, context: { params: { id: string } }) { 
  const sopId = parseInt(context.params.id); // Directly access context.params.id
  const userId = parseInt(request.headers.get('user-id') || '');

  // Check if the user has the required role (student)
  const roleCheck = await checkRole(userId, 'student');
  if (!roleCheck.authorized) {
    return new Response(JSON.stringify({ message: roleCheck.message }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Fetch SOP data
  const sopData: SOP[] = await getData();
  const sop = sopData.find((item) => Number(item.id) === Number(sopId));
  if (!sop) {
    return new Response(JSON.stringify({ message: 'SOP not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Fetch project data and generate a new project ID
  const projectData = await getProjectData();
  const newId = projectData.length > 0 ? Math.max(...projectData.map(item => item.id)) + 1 : 1;

  const newProject: Project = {
    ...sop,
    sopId,
    id: newId,
    studentId: userId,
  };

  // Add the new project to project data and save
  projectData.push(newProject);
  await writeProjectData(projectData);

  // Return the newly created project
  return new Response(JSON.stringify(newProject), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}