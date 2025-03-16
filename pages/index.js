import React from 'react';
import { Helmet } from 'react-helmet';

const ResumePage = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Resume</title>
        <link rel="stylesheet" href="/styles/styles.css" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Helmet>

      <div className="announcement-bar">
        <div className="scrolling-wrapper">
          <span> * Current Status: Looking for a 2025 summer internship *</span>
          <span> * Current Status: Looking for a 2025 summer internship *</span>
          <span> * Current Status: Looking for a 2025 summer internship *</span>
          <span> * Current Status: Looking for a 2025 summer internship *</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <header>
        <nav>
          <a href="./contactme.html">Contact Me</a>
        </nav>
        <div className="resume-title">My Resume</div>
        <nav>
          <a href="./mywork.html">My Work</a>
        </nav>
      </header>

      {/* Top Background Image */}
      <div className="background-top">
        {/* <div className="name-section">Sophie Blick</div> */}
        <img src="/images/fullname.PNG" alt="Overlay" className="overlay-image" />
      </div>

      {/* Main Content */}
      <div className="content-section">
        <img src="/images/mylogopink.png" alt="logo" className="my-image" />
        <img src="/images/me.png" alt="logo" className="me" />
        <div className="resume-container">
          <table className="profile-table">
            <tr>
              <td className="profile-text">
                <h2 style={{ textAlign: 'center' }}>Welcome to My Resume</h2>
                <p>Here is where my resume content will go. Super cool right?</p>
                <ul>
                  <li>Computer Science Major at Mizzou</li>
                  <li>Mathematics Minor</li>
                  <li>May 2026 Graduation Date</li>
                  <li>Interested in front end, web app development, graphic design</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* Bottom Background Image */}
      <div className="background-bottom">
        <h2 className="section-header">My Work</h2>
        <div className="image-row">
          <img src="/images/shirt1.PNG" alt="Image 1" />
          <img src="/images/shirt2.jpg" alt="Image 2" />
          <img src="/images/shirt3.png" alt="Image 3" />
          <img src="/images/shirt4.png" alt="Image 4" />
          <img src="/images/logo.PNG" alt="Image 5" />
        </div>
      </div>

      <div className="content-section">
        <div className="resume-container-wrapper">
          <div className="resume-container2">
            <h1>Experience</h1>
            <p>
              I've worked two non-major specific jobs before. I worked at Tapawingo National Golf Course from 2019 to 2022 as a server for weddings and I left to go to college. As of June 2024, I have worked at Panera as a cashier, working opening shifts almost every weekday before class.
            </p>
          </div>
          <div className="resume-container2">
            <h1>Skills</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>C</li>
              <li>Java</li>
              <li>Unity</li>
              <li>Blender</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
