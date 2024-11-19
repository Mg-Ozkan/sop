import React, { useState, useEffect } from 'react';

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
    const [loading, setLoading] = useState<boolean>(false);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            const filtered = projects.filter((project: Project) =>
                project.title.toLowerCase().includes(filter.toLowerCase())
            );
            setFilteredProjects(filtered);
            setLoading(false);
        }, 300);
        
        return () => clearTimeout(timeout);
    }, [projects, filter]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return { filteredProjects, filter, loading, handleFilterChange };
}