import ContentSuggested from "./studentComponents/contentSuggested";
import ContentRecent from "./studentComponents/contentRecent";
import {SOP} from "../../../server/src/services/sopService"
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { Api } from "@mui/icons-material";

interface StudentDashboardProps {
    data: SOP[];
}

export default function Dashboard() {
    const [data, setData] = useState<SOP[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:6000/api/sop");
            if (!response.ok) {
              throw new Error("Failed to fetch SOPs");
            }
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error("Error fetching SOPs:", error);
            setError(error instanceof Error ? error.message : "An unknown error occurred");
          }
        };
    
        fetchData();
      }, []);

    /*
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await fetch(Api/getAll); // Haal data van de backend API
          setData(result);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Unknown error");
        } finally {
          setLoading(false);
        }
      };
   */
  
    if (loading) return <Spinner />;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          {data.map((sop) => (
            <li key={sop.id}>
              {sop.titel} - Semester {sop.semester} - {new Date(sop.datum).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    );
  }

/*
export default function StudentDashboard({ data }: StudentDashboardProps) {
	return (
    <div className="content">
        <ContentSuggested data={data}/>
        <div className="divider" />
        <ContentRecent data={data}/>
    </div>
	)
    
    }
    */