"use client";

import React, { useEffect, useState } from 'react';
import TeacherDashboard from './components/teacherDashboard';
import StudentDashboard from './components/studentDashboard';
import "./page.scss";
import RoleToggle from './components/toggles/role-toggle';
import ThemeToggle from './components/toggles/theme-toggle';
import Spinner from './components/Spinner';
import { SOP } from "../api/flows/route";

export default function Dashboard(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [apiData, setApiData] = useState<SOP[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            setIsDarkMode(mediaQuery.matches);

            const handleChange = () => setIsDarkMode(mediaQuery.matches);
            mediaQuery.addEventListener("change", handleChange);

            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/flows");
                if (response.ok) {
                    const result: SOP[] = await response.json();
                    setApiData(result);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const toggleRole = () => setIsTeacher((prev) => !prev);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className={isDarkMode ? "dark-mode" : ""}>
            <div className="toggles-container">
                <RoleToggle onRoleChange={toggleRole} isTeacher={isTeacher} />
                <ThemeToggle onThemeChange={toggleTheme} isDarkMode={isDarkMode} />
            </div>
            {isTeacher ? (
                <TeacherDashboard data={apiData}/>
            ) : (
                <StudentDashboard data={apiData}/>
            )}
        </div>
    )
}