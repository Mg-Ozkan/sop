import ContentSuggested from "./studentComponents/contentSuggested";
import ContentRecent from "./studentComponents/contentRecent";
import { SOP } from "../../api/BaseService"
import React from 'react';

interface StudentDashboardProps {
    data: SOP[];
}

export default function StudentDashboard({ data }: StudentDashboardProps) {
	return (
    <div className="content">
        <ContentSuggested data={data}/>
        <div className="divider" />
        <ContentRecent data={data}/>
    </div>
	)
}