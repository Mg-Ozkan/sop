import ProjectFetcher from './projectFetcher';
import ProjectListing from './projectListing';
import "../page.scss";
import { useRouter } from 'next/navigation';




export default function ContentSuggested() {
	const fetchReturn = ProjectFetcher({userId: 1, fetchMostRecent: true});
	const router = useRouter();

	const navigateToProject = () => {
		router.push('/flows')
	}

	return (
		<div className="suggested-container">
			<h1 className="suggested-title">
				Aanbevolen voor u
			</h1>
			<div className="suggested-wrapper">
				<div className="suggested-actions">
					<div className="new-project-container" onClick={navigateToProject}>
						<div className="horizontal-plus" />
						<div className="vertical-plus" />
						<p className="new-project-title">
							Nieuw project
						</p>
					</div>
					<div className="action-recent">
						<ProjectListing id={fetchReturn.projects[0].id} title={fetchReturn.projects[0].title} date={fetchReturn.projects[0].date} />
					</div>
				</div>
			</div>
		</div>
	)
}