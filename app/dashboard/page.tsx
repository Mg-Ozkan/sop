"use client";

import React, { useEffect, useState } from 'react';
import TeacherDashboard from './components/teacherDashboard';
import StudentDashboard from './components/studentDashboard';
import "./page.scss";
import RoleToggle from './components/toggles/role-toggle';
import ThemeToggle from './components/toggles/theme-toggle';

export default function Dashboard(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            setIsDarkMode(mediaQuery.matches);

            const handleChange = () => setIsDarkMode(mediaQuery.matches);
            mediaQuery.addEventListener("change", handleChange);

            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    const toggleTheme = () => setIsDarkMode((prev) => !prev);
    const toggleRole = () => setIsTeacher((prev) => !prev);


    return (
        <div className={isDarkMode ? "dark-mode" : ""}>
            <div className="toggles-container">
                <RoleToggle onRoleChange={toggleRole} isTeacher={isTeacher} />
                <ThemeToggle onThemeChange={toggleTheme} isDarkMode={isDarkMode} />
            </div>
            {isTeacher ? (
                <TeacherDashboard />
            ) : (
                <StudentDashboard />
            )}
        </div>
    )
}