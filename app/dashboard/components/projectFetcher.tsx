import { useState, useEffect } from 'react';
import mockData from './mockData.json';

//reflect uml class once definitive
interface Project {
	id: number;
	title: string;
	date: string;
}

interface ProjectFetcherProps {
	userId: number;
	fetchMostRecent?: boolean;
}

interface ProjectFetcherResult {
	projects: Project[];
	loading: boolean;
}

export default function ProjectFetcher({ userId = 0, fetchMostRecent = false }: ProjectFetcherProps): ProjectFetcherResult {
	{/*const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState<boolean>(true); // New loading state*/}

	{/*useEffect(() => {
		const fetchProjects = async () => {
			setLoading(true);

			const apiUrl = fetchMostRecent
				? `/api/projects?userId=${userId}&_limit=1&_sort=date&_order=desc`
				: `/api/projects?userId=${userId}&_sort=date&_order=desc`;

			try {
				const res = await fetch(apiUrl);
				const data: Project[] = await res.json();
				setProjects(data);
			} catch (error) {
				console.log('Error fetching data', error)
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, [userId, fetchMostRecent]);*/}

	const projects: Project[] = mockData as Project[];
	const loading = false;

	return { projects, loading };
}