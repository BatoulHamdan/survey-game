import React from "react";

const LanguageSelector = ({ language, handleLanguageChange }) => {
  return (
    <div className="language-selector-container mb-4 text-right">
      <select
        id="language-select"
        className="language-select px-2 py-1 border rounded"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="English">English</option>
        <option value="French">Français</option>
        <option value="Italian">Italiano</option>
        <option value="Arabic">العربية</option>
        <option value="Farsi">فارسی</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
