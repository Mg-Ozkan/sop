import "../page.scss";

//temporary interface, must change to exact class once decided upon
interface ProjectListingProps {
		id: number;
		title: string;
		date: string;
}

export default function ProjectListing({ id, title, date }: ProjectListingProps) {
	return (
		<div className="project-container">
			<div className="project-wrapper">
				<div className="project-image-wrapper">
				</div>
				<div className="project-description-wrapper">
					<h1 className="project-title">
						{title}
					</h1>
					<p className="project-date">
						{date}
					</p>
				</div>
			</div>
		</div>
	)
}