import Listview from "./teacherComponents/listview";

export default function TeacherDashboard() {
	return (
    <div className="content">
      <div className="currentSOP-container">
        <div className="currentSOP-wrapper">
          <h1 className="currentSOP-title">
            Software ontwikkel processen
          </h1>
          <div className="SOP-container">
            <Listview />
            <div className="create-new-button">
              <h3 className="create-new-title">
                Nieuwe SOP aanmaken
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}