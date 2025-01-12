import Listview from "./teacherComponents/listview";
import { SOP } from "../../api/BaseService"
import React from 'react';

interface TeacherDashboardProps {
  data: SOP[];
}

export default function TeacherDashboard({ data }: TeacherDashboardProps) {
	return (
    <div className="content">
      <div className="currentSOP-container">
        <div className="currentSOP-wrapper">
          <h1 className="currentSOP-title">
            Software ontwikkel processen
          </h1>
          <div className="SOP-container">
            <Listview data={data}/>
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