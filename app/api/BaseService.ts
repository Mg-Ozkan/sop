import path from 'path';
import { promises as fs } from 'fs';
import { type Edge } from "@xyflow/react";
import { type ShapeNode } from "../../components/portal/flow/components/shape/types/page";

export interface SOP {
    id: number;
    title: string;
    semester: number;
    editDate: Date;
    isActive: boolean;
    competenties: Competentie[];
} 

export interface Competentie{
  id: number;
  title: string;
  skills: ShapeNode[];
  edges: Edge[];
}
 
export interface Project extends SOP {
  sopId: number;
  studentId: number;
}
 
const jsonFilePath = path.join(process.cwd(), 'public', 'sopData.json');
const usersFilePath = path.join(process.cwd(), 'public', 'user.json');
 
export async function getData() : Promise<SOP[]> {
  const fileContents = await fs.readFile(jsonFilePath, 'utf8');
  return JSON.parse(fileContents) as SOP[];
}
 
export async function writeData(data: any) {
  await fs.writeFile(jsonFilePath, JSON.stringify(data, null, 2));
}
 
async function getUsers() {
  const fileContents = await fs.readFile(usersFilePath, 'utf8');
  return JSON.parse(fileContents);
}
 
// Helper function to check if a user has the required role for an action
export async function checkRole(userId: number, requiredRole: 'teacher' | 'student') {
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