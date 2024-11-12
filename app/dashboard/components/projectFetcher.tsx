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
	const projects: Project[] = mockData as Project[];
	const loading = false;

	return { projects, loading };
}