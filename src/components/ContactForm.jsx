import React, { useState } from 'react'
import './ContactForm.css'

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    yearLevel: '',
    subjects: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Phone Number *</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="yearLevel">Year Level *</label>
            <select
              id="yearLevel"
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select year level</option>
              <option value="Year 7-10">Years 7-10</option>
              <option value="VCE">VCE</option>
              <option value="University 1st Year">University 1st Year</option>
              <option value="University 2nd Year">University 2nd Year</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subjects">Subjects of Interest *</label>
            <textarea
              id="subjects"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              required
              placeholder="e.g., Maths, Physics, Chemistry"
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
