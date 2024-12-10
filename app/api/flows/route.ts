
import path from 'path';
import { promises as fs } from 'fs';
import { type Edge } from "@xyflow/react";
import { type ShapeNode } from "../../../components/portal/flow/components/shape/types/page";

interface SOP {
    id: number;
    title: string;
    semester: number;
    editDate: Date;
    isActive: boolean;
    competenties: Competentie[];
} 

interface Competentie{
  id: number;
  title: string;
  skills: ShapeNode[];
  edges: Edge[];
}
 
 
const jsonFilePath = path.join(process.cwd(), 'public', 'JsonData.json');
const usersFilePath = path.join(process.cwd(), 'public', 'user.json');
 
async function getData() : Promise<SOP[]> {
  const fileContents = await fs.readFile(jsonFilePath, 'utf8');
  return JSON.parse(fileContents) as SOP[];
}
 
async function writeData(data: any) {
  await fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2));
}
 
async function getUsers() {
  const fileContents = await fs.readFile(usersFilePath, 'utf8');
  return JSON.parse(fileContents);
}
 
// Helper function to check if a user has the required role for an action
async function checkRole(userId: number, requiredRole: 'teacher' | 'student') {
  const users = await getUsers();
  const user = users.find((u: { id: number }) => u.id === userId);
 
  if (!user) {
    return { authorized: false, message: 'User not found' };
  }
 
  if (requiredRole === 'teacher' && user.role !== 'teacher') {
    return { authorized: false, message: 'Access denied. Only teachers can perform this action' };
  }
 
  return { authorized: true, user };
}
 
// GET request - Get all items (open to everyone)
export async function GET() {
  const data = await getData();
  return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
 
// POST request - Create a new item (restricted to teachers)
export async function POST(request: Request) {

  const data = await getData();
  const newItem = await request.json() as SOP;
 
  const maxId = data.length > 0 ? Math.max(...data.map(item => item.id)) : 0;
  newItem.id = maxId + 1;
  
  data.push(newItem);
  await writeData(data);
 
  return new Response(JSON.stringify(newItem), { status: 201, headers: { 'Content-Type': 'application/json' } });
}
 
