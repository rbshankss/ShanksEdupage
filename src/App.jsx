import React, { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <div className="app">
      <button
        className="contact-button"
        onClick={() => setShowContactForm(true)}
      >
        Contact
      </button>

      <div className="container">
        {/* Header Section */}
        <header className="header">
          <div className="logo-section">
            <div className="logo">
              <span className="logo-shanks">SHANKS</span>
              <span className="logo-education">EDUCATION</span>
            </div>
            <p className="tagline">Hard Work Determines Results</p>
          </div>
          <div className="tutor-image-container">
            <img
              src="/images/tutor.jpg"
              alt="Tutor"
              className="tutor-image"
              onError={(e) => {
                e.target.src = '/images/tutor.png';
                e.target.onerror = () => {
                  e.target.style.display = 'none';
                };
              }}
            />
          </div>
        </header>

        {/* Diagonal Overlay Section */}
        <div className="diagonal-section">
          <div className="diagonal-overlay"></div>

          {/* Services Header */}
          <div className="services-header">
            <div className="services-header-box">SERVICES INCLUDE</div>
          </div>

          {/* Main Content Grid */}
          <div className="main-content">
            <div className="left-column">
              <div className="subjects-section">
                <h3 className="subjects-title">Subjects Taught:</h3>
                <ul className="subjects-list">
                  <li>Uni 1st and 2nd Year Maths</li>
                  <li>VCE Methods, Spec, Physics</li>
                  <li>Years 7-10 Maths and Science</li>
                </ul>
              </div>
            </div>

            <div className="right-column">
              <div className="services-list">
                <div className="service-item">TAILORED LESSONS</div>
                <div className="service-item">CONCEPT MASTERY</div>
                <div className="service-item">LEARNING STRATEGIES</div>
              </div>
            </div>
          </div>

          {/* Motivational Text */}
          <div className="motivational">
            <div className="motivational-text">Effort over Excuses</div>
            <div className="motivational-text">Discipline over Talent</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <div className="mission-section">
            <h2 className="section-title">My Mission</h2>
            <p className="mission-text">
              Every student learns differently — there's no one-size-fits-all approach.
              I tailor lessons to the student, not just the subject. Whether it's algebra,
              chemistry, or time pressure, I'll overcome those challenges with you and build
              confidence and skill. Understanding leads to appreciation — appreciation leads
              to improved performance. Many students dislike mathematics and science simply
              because they were not taught well enough. My mission is to not only remove those
              fears, but spark a genuine interest — maybe even a love — for learning.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-title">About Me</h2>
            <ul className="about-list">
              <li>Biomedical Engineering Student at Monash</li>
              <li>Distinction WAM</li>
              <li>High Distinction in Advanced Engineering Maths</li>
              <li>Aerostructures engineer at Monash High Powered Rocketry</li>
              <li>John Monash Science School Graduate</li>
              <li>97+ ATAR</li>
              <li>3+ years tutoring experience</li>
            </ul>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="cta-section">
          <button
            className="cta-button"
            onClick={() => setShowContactForm(true)}
          >
            Start Your learning journey At Shanks Education
          </button>
        </div>

        {/* Contact Footer */}
        <footer className="contact-footer">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>0435 626 232</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>rbarathshankar@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Glen Waverley, VIC</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  )
}

export default App
