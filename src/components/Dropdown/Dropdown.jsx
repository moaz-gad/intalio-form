
import React from "react";
import styles from "./dropdown.module.css";

const Dropdown = ({ selectedPurpose, onPurposeChange }) => {
 
  const purposes = [
    { label: "Not Selected", value: "not-selected" },
    { label: "Meeting", value: "meeting" },
    { label: "Project Update", value: "project-update" },
    { label: "General Inquiry", value: "general-inquiry" },
    
  ];

  return (
    <div className={styles.dropdown}>
      <label htmlFor="purpose-dropdown">Purpose</label>
      <select
        id="purpose-dropdown"
        value={selectedPurpose}
        onChange={(e) => onPurposeChange(e.target.value)}
        className={styles.select}
      >
        {purposes.map((purpose, index) => (
          <option key={index} value={purpose.value}>
            {purpose.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
