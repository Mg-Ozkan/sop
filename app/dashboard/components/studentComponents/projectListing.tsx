import "../../page.scss";
import { useRouter } from 'next/navigation';
import React from 'react';

//temporary interface, must change to exact class once decided upon
interface ProjectListingProps {
		id: number;
		title: string;
		editDate: Date;
}

export default function ProjectListing({ id, title, editDate }: ProjectListingProps) {
	const router = useRouter();

	const navigateToProject = () => {
		router.push('/competenties')
	}

	return (
		<div className="project-container" onClick={() => navigateToProject()}>
			<div className="project-wrapper">
				<div className="project-image-wrapper">
				</div>
				<div className="project-description-wrapper">
					<h1 className="project-title">
						{title}
					</h1>
					<p className="project-date">
						{editDate ? editDate.toString() : "Geen datum opgegeven."}
					</p>
				</div>
			</div>
		</div>
	)
}