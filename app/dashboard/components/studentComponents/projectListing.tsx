import "../../page.scss";
import { useRouter } from 'next/navigation';
import React from 'react';

//temporary interface, must change to exact class once decided upon
interface ProjectListingProps {
		id: number;
		titel: string;
		datum: Date;
}

export default function ProjectListing({ id, titel, datum }: ProjectListingProps) {
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
					<h1 className="project-titel">
						{titel}
					</h1>
					<p className="project-date">
						{datum ? datum.toString() : "Geen datum opgegeven."}
					</p>
				</div>
			</div>
		</div>
	)
}