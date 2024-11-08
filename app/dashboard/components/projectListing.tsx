import styles from "../page.module.scss";

//temporary interface, must change to exact class once decided upon
interface ProjectListingProps {
	project: {
		id: number;
		title: string;
		date: string;
	}
}

export default function ProjectListing({ project }: ProjectListingProps) {
	return (
		<div className={styles["project-container"]}>
			<div className={styles["project-wrapper"]}>
				<div className={styles["project-image-wrapper"]}>
				</div>
				<div className={styles["project-description-wrapper"]}>
					<h1 className={styles["project-title"]}>
						{project.title}
					</h1>
					<p className={styles["project-date"]}>
						{project.date}
					</p>
				</div>
			</div>
		</div>
	)
}