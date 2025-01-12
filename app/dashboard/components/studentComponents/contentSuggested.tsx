import ProjectListing from './projectListing';
import "../../page.scss";
import { SOP } from '../../../api/BaseService'
import { useRouter } from 'next/navigation';

interface ContentSuggestedProps {
	data: SOP[];
}


export default function ContentSuggested({ data }: ContentSuggestedProps) {
	const router = useRouter();

	const navigateToProject = () => {
		router.push('/competenties')
	}

	return (
		<div className="suggested-container">
			<h1 className="suggested-title">
				Aanbevolen voor u
			</h1>
			<div className="suggested-wrapper">
				<div className="suggested-actions">
					<div className="new-project-container" onClick={() => navigateToProject()} >
						<div className="horizontal-plus" />
						<div className="vertical-plus" />
						<p className="new-project-title">
							Nieuw project
						</p>
					</div>
					<div className="action-recent">
						{data ? (
								<ProjectListing id={data[data.length-1].id} title={data[data.length-1].title} editDate={data[data.length-1].editDate} />
						) : ""}
					</div>
				</div>
			</div>
		</div>
	)
}