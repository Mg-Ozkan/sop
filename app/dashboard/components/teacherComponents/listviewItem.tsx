import { useRouter } from 'next/navigation'

interface ListViewItemProps {
  id: number;
  semester: number;
  title: string;
  editDate: Date;
  isActive: boolean;
}

export default function ListviewItem({id, semester, title, editDate, isActive} : ListViewItemProps) {
  const router = useRouter();

	const navigateToProject = () => {
		router.push('/competenties')
	}
  return (
    <div className="item-container" onClick={() => navigateToProject()}>
      <div className="item-wrapper">
        <p className="semester">
          {semester}
        </p>
        <p className="title">
          {title}
        </p>
        <p className="date">
          {editDate ? new Date(editDate).toLocaleDateString() : "No date given."}
        </p>
        <p className="state">
          {isActive ? "ja" : "nee"}
        </p>
        <p className="edit">
          Bewerken
        </p>
      </div>
    </div>
  )
}