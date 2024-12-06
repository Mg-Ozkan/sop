interface ListviewItemProps {
  semester: number,
  title: string,
  date: string,
  active: boolean,
}

export default function ListviewItem({semester, title, date, active} : ListviewItemProps) {
  return (
    <div className="item-container">
      <div className="item-wrapper">
        <p className="semester">
          {semester}
        </p>
        <p className="title">
          {title}
        </p>
        <p className="date">
            {date}
        </p>
        <p className="state">
          {active ? "ja" : "nee"}
        </p>
        <p className="edit">
          Bewerken
        </p>
      </div>
    </div>
  )
}