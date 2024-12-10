import Fetcher from "../Fetcher";
import FilterComponent from "../Filter";
import ListviewItem from "./listviewItem";
import { Sop } from "../Fetcher";
import useSort from "../Sorter";


export default function Listview() {
  const fetchReturn = Fetcher<Sop>(false);
  const { filteredData, filter, loading, handleFilterChange } = FilterComponent<Sop>({
    data: fetchReturn.data, 
    filterKey: 'title'
  });
  const { sortedData, onSort, getSortIcon } = useSort<Sop>(filteredData);

	return (
    <div>
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
      <div className="current-content">
      <div className="listview-container">
        <div className="listview-header">
          <h3 className="headers semester" onClick={() => onSort("semester")}>
            Semester
            <span className="sort-icon">{getSortIcon("semester")}</span>
          </h3>
          <h3 className="headers title" onClick={() => onSort("title")}>
            Titel 
            <span className="sort-icon">{getSortIcon("title")}</span>
          </h3>
          <h3 className="headers date" onClick={() => onSort("date")}>
            Laatst aangepast
            <span className="sort-icon">{getSortIcon("date")}</span>
          </h3>
          <h3 className="headers state" onClick={() => onSort("active")}>
            Actief? 
            <span className="sort-icon">{getSortIcon("active")}</span>
          </h3>
          <h3 className="edit">
          </h3>
        </div>

        {filteredData.length > 0 ? (
          <ul className="listview">
            {sortedData.map((item, index) => (
              <li key={index} className="listview-item">
                <ListviewItem 
                  semester={item.semester} 
                  title={item.title} 
                  date={item.date} 
                  active={item.active} 
                />
              </li>
            ))}
          </ul>
      ) : (
          <h1 className="not-found-title">Geen sops gevonden</h1>
      )}
    </div>
    </div>
  </div>
	)
}