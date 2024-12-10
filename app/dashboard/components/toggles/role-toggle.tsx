import React, { useState, useEffect } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; 

interface RoleToggleProps {
  onRoleChange: () => void; 
  isTeacher: boolean;
}

export default function RoleToggle( { onRoleChange, isTeacher } : RoleToggleProps) {

  const toggleTheme = () => {
    isTeacher = !isTeacher;
    onRoleChange(); 
  };

  return (
    <Toggle
      checked={isTeacher}
      onChange={onRoleChange}
      icons={{ checked: "👨‍🏫", unchecked: "👩‍💻" }}
      aria-label="Role toggle"
      className="role-toggle"
    />
  );
};