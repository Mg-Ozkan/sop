import ProjectFetcher from './projectFetcher';
import ProjectListing from './projectListing';
import styles from "../page.module.scss";

//reflect uml class once definitive
interface Project {
	id: number;
	title: string;
	date: string;
}

export default function ContentSuggested() {
	const fetchReturn = ProjectFetcher({userId: 1, fetchMostRecent: true});

	return (
		<div className={styles["suggested-container"]}>
			<h1 className={styles["suggested-title"]}>
				Aanbevolen voor u
			</h1>
			<div className={styles["suggested-wrapper"]}>
				<div className={styles["suggested-actions"]}>
					<div className={styles["new-project-container"]}>
						<div className={styles["horizontal-plus"]} />
						<div className={styles["vertical-plus"]} />
						<p className={styles["new-project-title"]}>
							Nieuw project
						</p>
					</div>
					<div className={styles["action-recent"]}>
						<ProjectListing project={fetchReturn.projects[0]} />
					</div>
				</div>
			</div>
		</div>
	)
}