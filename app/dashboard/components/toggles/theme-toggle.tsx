import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; 

interface ThemeToggleProps {
  onThemeChange: () => void; 
  isDarkMode: boolean;
}

export default function ThemeToggle( { onThemeChange, isDarkMode } : ThemeToggleProps) {
  const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    onThemeChange(); 
  };

  return (
    <Toggle
      checked={isDarkMode}
      onChange={toggleTheme}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
      className="theme-toggle"
    />
  )
};