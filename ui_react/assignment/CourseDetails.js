import React from 'react';
import '../CourseDetails.css';

function CourseDetails() {
  return (
    <div className="bottom">
      <div className="cards">
        <div className="leftCard">
          <h1 className="card-title">INSTRUCTOR</h1>
          <div className="divider">
            <img className="circleImg" src="https://st2.depositphotos.com/12982378/44285/i/1600/depositphotos_442859096-stock-photo-happy-architect-smiling-crossed-arms.jpg" alt="Instructor" />
            <div className="instructor-details">
              <h2>Rodrigo Diaz</h2>
              <p>Solution Architect, Lorem, Ipsum, Engineer</p>
              <p>Analyst, Programmer, Worker</p>
            </div>
          </div>
        </div>
        <div className="leftCard related-course">
          <h1 className="card-title">RELATED TO COURSE</h1>
          <div className="related-items">
            <div className="related-item">
              <svg className="MuiSvgIcon-root" style={{ width: '20px', height: '20px' }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
              </svg>
              <h2>Classroom</h2>
              <span>show all</span>
            </div>
            <div className="related-item">
              <svg className="MuiSvgIcon-root" style={{ width: '20px', height: '20px' }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z"></path>
              </svg>
              <h2>Class Files</h2>
              <span>show all</span>
            </div>
            <div className="related-item">
              <svg className="MuiSvgIcon-root" style={{ width: '20px', height: '20px' }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
              </svg>
              <h2>Certificates</h2>
              <span>show all</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
