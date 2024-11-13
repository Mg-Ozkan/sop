import Slider from './slider';
import FilterProjects from './projectFilter';
import ProjectFetcher from './projectFetcher';
import styles from '../page.module.scss';

export default function ContentRecent() {
    const fetchReturn = ProjectFetcher({ userId: 1, fetchMostRecent: false});
    const { filteredProjects, filter, handleFilterChange } = FilterProjects({projects: fetchReturn.projects});

    return (
        <div className={styles["recent-projects-container"]}>
            <div className={styles["recent-projects-wrapper"]}>
                <div className={styles["searchbar-container"]}>
                    <>{/*add magnifying glass icon*/}</>
                    <div className={styles["recent-projects-search-icon"]}>
                    </div>

                    <input
                        className={styles["searchbar-input"]}
                        type="text"
                        value={filter}
                        onChange={handleFilterChange}
                        placeholder="Zoeken"
                    />
                </div>
                <div className={styles["slider-title"]}>
                    <h1>
                        Recente projecten
                    </h1>
                </div>
                <div className={styles["slider-container"]}>
                    {filteredProjects.length > 0
                        ? <Slider projects={filteredProjects} />
                        : <h1 className={styles["not-found-title"]}>
                            Geen recente projecten gevonden
                          </h1>
                    }
                </div>
            </div>
        </div>
    )
}