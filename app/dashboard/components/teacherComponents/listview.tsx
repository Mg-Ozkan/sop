import FilterComponent from "../Filter";
import ListviewItem from "./listviewItem";
import { SOP } from "../../../api/flows/route";
import useSort from "../Sorter";

interface ListViewProps {
  data: SOP[];
}

export default function Listview({ data }: ListViewProps) {
  const { filteredData, filter, handleFilterChange } = FilterComponent<SOP>({
    data: data, 
    filterKey: 'title'
  });
  const { sortedData, onSort, getSortIcon } = useSort<SOP>(filteredData);

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
          <h3 className="headers date" onClick={() => onSort("editDate")}>
            Laatst aangepast
            <span className="sort-icon">{getSortIcon("editDate")}</span>
          </h3>
          <h3 className="headers state" onClick={() => onSort("isActive")}>
            Actief? 
            <span className="sort-icon">{getSortIcon("isActive")}</span>
          </h3>
          <h3 className="edit">
          </h3>
        </div>
      
        {filteredData.length > 0 ? (
          <ul className="listview">
            {sortedData.map((item, index) => (
              <li key={index} className="listview-item">
                <ListviewItem 
                  id={item.id}
                  semester={item.semester} 
                  title={item.title} 
                  editDate={item.editDate} 
                  isActive={item.isActive} 
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