import { useState, useEffect, useMemo } from 'react';

//reflect uml class once definitive
interface Project {
	id: number;
	title: string;
	date: string;
}

interface FilterProjectsProps {
	projects: Project[];
}

interface FilteredProjectsResult {
	loading: boolean;
	filter: string;
	filteredProjects: Project[];
	handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterProjects({ projects }: FilterProjectsProps): FilteredProjectsResult {
	const [filter, setFilter] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true); //new loading state

	const timeout = setTimeout(() => {
		setLoading(false);
	}, 500);

	const filteredProjects = useMemo(() => {
		setLoading(true);

		return projects.filter((project: Project) =>
			//change filter to designated filter on property
			project.title.toLowerCase().includes(filter.toLowerCase())
		);
	}, [projects, filter]);

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	useEffect(() => {
		return () => clearTimeout(timeout);
	}, [timeout]);

	return { filteredProjects, filter, loading, handleFilterChange };
}