import React from "react";

import './Trailer.css';

export default function Trailer() {
  return (
    <div className="trailer-container">
      <div className="trailer-tight-container">
        <div className="trailer-embed-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/0Zbt4jhmgQU`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Forest of Frequencies Trailer"
          />
        </div>
      </div>
    </div>
  )
}