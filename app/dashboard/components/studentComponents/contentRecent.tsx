import Slider from './slider';
import '../../page.scss';
import FilterComponent from '../Filter';
import { SOP } from '../../../api/flows/route';
import { useState, useEffect } from 'react';

export default function ContentRecent() {
    const [apiData, setApiData] = useState<SOP[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/api/flows");
          if (response.ok) {
            const result = await response.json();
            setApiData(result);
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    const { filteredData, filter, loading, handleFilterChange } = FilterComponent<SOP>({data: apiData, filterKey: 'title'});


    return (
        <div className="recent-projects-container">
            <div className="recent-projects-wrapper">
                <div className="searchbar-container">
                    <>{/*add magnifying glass icon*/}</>
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