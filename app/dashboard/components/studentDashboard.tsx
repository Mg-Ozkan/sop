import ContentSuggested from "./studentComponents/contentSuggested";
import ContentRecent from "./studentComponents/contentRecent";

export default function StudentDashboard() {
	return (
    <div className="content">
        <ContentSuggested />
        <div className="divider" />
        <ContentRecent />
    </div>
	)
}