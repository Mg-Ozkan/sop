import React, { useState, useEffect } from 'react';

interface FilterProps<T> {
    data: T[];
    filterKey: keyof T;
}

interface FilterResult<T> {
    filter: string;
    filteredData: T[];
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterComponent<T extends Record<string, any>>({ 
    data, 
    filterKey 
}: FilterProps<T>): FilterResult<T> {
    const [filter, setFilter] = useState<string>('');
    const [filteredData, setFilterData] = useState<T[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const filtered = data.filter((item) =>
                String(item[filterKey]).toLowerCase().includes(filter.toLowerCase())
            );
            setFilterData(filtered);
        }, 300);
        
        return () => clearTimeout(timeout);
    }, [data, filter, filterKey]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    return { filteredData, filter, handleFilterChange };
}