import { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

interface SortConfig<T> {
  key: keyof T;
  ascending: boolean;
}

export default function useSort<T>(data: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  const onSort = (key: keyof T) => {
    let ascending = true;
    if (sortConfig && sortConfig.key === key && sortConfig.ascending) {
      ascending = false;
    }
    setSortConfig({ key, ascending });
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.ascending ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.ascending ? 1 : -1;
    return 0;
  });

  const getSortIcon = (key: keyof T) => {
    if (sortConfig && sortConfig.key === key) {
      return sortConfig.ascending ? <FaSortUp /> : <FaSortDown />;
    }
    return <FaSort />;
  }

  return { sortedData, onSort, getSortIcon };
}