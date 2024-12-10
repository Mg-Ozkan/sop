import mockDataStudent from './mockDataStudent.json';
import mockDataTeacher from './mockDataTeacher.json';

//reflect uml class once definitive
export interface Project {
	id: number;
	title: string;
	date: string;
}

export interface Sop {
	id: number;
	semester: number;
	title: string;
	date: string;
	active: boolean;
}

interface FetcherResult<T> {
	data: T[];
	loading: boolean;
}

export default function Fetcher<T extends Project | Sop>(student: boolean) : FetcherResult<T> {
	if (student) {
		const projects: Project[] = mockDataStudent as Project[];
		const loading = false;
	
		return { data: projects as T[], loading };
	}
	const sops: Sop[] = mockDataTeacher as Sop[];
	const loading = false;

	return { data: sops as T[], loading };
}