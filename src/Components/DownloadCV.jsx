import React from "react";
import "../CSS/DownloadCV.css";

/**
 * Props:
 * - file: URL/path to the CV PDF (required)
 * - label: optional text shown on the button ("Download CV" by default)
 */
const DownloadCVButton = ({ file = "/resume.pdf", label = "Download CV" }) => {
  return (
    <a
      className="cv-download-wrap"
      href={file}
      download
      aria-label="Download Jaideep's CV"
      title="Download CV"
    >
      <div className="cv-btn" tabIndex="0">
        <span className="cv-icon" aria-hidden="true">
          {/* simple download SVG icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>

        <span className="cv-text">{label}</span>

        <span className="cv-sub">PDF</span>
      </div>
    </a>
  );
};

export default DownloadCVButton;
