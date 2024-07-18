import React from 'react';
import '../VideoSection.css';

function VideoSection() {
  return (
    <div className="video-section">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/SMKPKGW083c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoSection;
