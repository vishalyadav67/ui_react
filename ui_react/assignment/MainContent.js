import React from 'react';
import VideoSection from './VideoSection';
import CourseDetails from './CourseDetails';
import '../MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <VideoSection />
      <CourseDetails />
    </div>
  );
}

export default MainContent;
