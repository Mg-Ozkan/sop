"use client";

import React, { useEffect, useState } from 'react';
import ContentSuggested from './components/contentSuggested'
import ContentRecent from './components/contentRecent';
import "./page.scss";

export default function Dashboard(): JSX.Element {
    const [isDarkMode, setIsDarkMode] = useState(false);

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

    return (
        <div className={isDarkMode ? "dark-mode" : ""}>
            <button onClick={toggleTheme}>
                {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            </button>
            <div className={"content"}>
                <ContentSuggested />
                <div className={"divider"} />
                <ContentRecent />
            </div>
        </div>
    );
}