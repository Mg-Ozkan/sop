import Slider from './slider';
import FilterProjects from './projectFilter';
import ProjectFetcher from './projectFetcher';
import '../page.scss';

export default function ContentRecent() {
    const fetchReturn = ProjectFetcher({ userId: 1, fetchMostRecent: false});
    const { filteredProjects, filter, handleFilterChange } = FilterProjects({projects: fetchReturn.projects});


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
                    {filteredProjects.length > 0 ? (
                        <Slider projects={filteredProjects} />
                    ) : (
                        <h1 className="not-found-title">Geen recente projecten gevonden</h1>
                    )}
                </div>
            </div>
        </div>
    )
}