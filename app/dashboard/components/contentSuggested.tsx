import ProjectFetcher from './projectFetcher';
import ProjectListing from './projectListing';
import styles from "../page.module.scss";
import { useRouter } from 'next/navigation';




export default function ContentSuggested() {
	const fetchReturn = ProjectFetcher({userId: 1, fetchMostRecent: true});
	const router = useRouter();

	const navigateToProject = () => {
		router.push('/flows')
	}

	return (
		<div className={styles["suggested-container"]}>
			<h1 className={styles["suggested-title"]}>
				Aanbevolen voor u
			</h1>
			<div className={styles["suggested-wrapper"]}>
				<div className={styles["suggested-actions"]}>
					<div className={styles["new-project-container"]} onClick={navigateToProject}>
						<div className={styles["horizontal-plus"]} />
						<div className={styles["vertical-plus"]} />
						<p className={styles["new-project-title"]}>
							Nieuw project
						</p>
					</div>
					<div className={styles["action-recent"]}>
						<ProjectListing id={fetchReturn.projects[0].id} title={fetchReturn.projects[0].title} date={fetchReturn.projects[0].date} />
					</div>
				</div>
			</div>
		</div>
	)
}