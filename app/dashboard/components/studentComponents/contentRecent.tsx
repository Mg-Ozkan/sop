import Slider from './slider';
import '../../page.scss';
import FilterComponent from '../Filter';
import { SOP } from '../../../api/BaseService';
import React from 'react';

interface ContentRecentProps {
    data: SOP[];
}

export default function ContentRecent({ data }: ContentRecentProps) {
    const { filteredData, filter, handleFilterChange } = FilterComponent<SOP>({data: data, filterKey: 'title'});


    return (
        <div className="recent-projects-container">
            <div className="recent-projects-wrapper">
                <div className="searchbar-container">
                    <>{/*add magnifying glass icon*/ }</>
                    <div className="recent-projects-search-icon">
                    </div>

                    <input
                        className="searchbar-input"
                        type="text"
                        value={filter}
                        onChange={handleFilterChange}
                        placeholder="Zoeken"
                    />
                </div>
                <div className="slider-title">
                    <h1>
                        Recente projecten
                    </h1>
                </div>
                <div className="slider-container">
                    {filteredData.length > 0 ? (
                        <Slider projects={filteredData} />
                    ) : (
                        <h1 className="not-found-title">Geen recente projecten gevonden</h1>
                    )}
                </div>
            </div>
        </div>
    )
}
