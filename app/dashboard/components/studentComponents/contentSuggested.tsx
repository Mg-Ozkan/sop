import ProjectListing from './projectListing';
import "../../page.scss";
import { SOP } from '../../../api/flows/route'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';




export default function ContentSuggested() {
	const [apiData, setApiData] = useState<SOP[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/flows");
				if (response.ok) {
					const result = await response.json();
					setApiData(result);
				} else {
					console.error("Failed to fetch data");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

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
						{apiData && apiData[0] ? (
								<ProjectListing id={apiData[0].id} title={apiData[0].title} editDate={apiData[0].editDate} />
						) : ""}
					</div>
				</div>
			</div>
		</div>
	)
}