import React from "react";
import "../css/TitleSection.css";

export default function TitleSection({ label }) {
  return (
    <div>
      <div className="white-space-label">{label}</div>
      <hr className="ruler" />
    </div>
  );
}
