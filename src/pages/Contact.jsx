
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })
  const [status, setStatus] = useState({ submitted: false, error: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.date || !form.time) {
      setStatus({ submitted: false, error: 'Please complete all required fields.' })
      return
    }

    // Save to localStorage
    const existingReservations = JSON.parse(localStorage.getItem('velouraReservations') || '[]')
    const newReservation = {
      id: Date.now(),
      ...form,
      submittedAt: new Date().toISOString()
    }
    existingReservations.push(newReservation)
    localStorage.setItem('velouraReservations', JSON.stringify(existingReservations))

    setStatus({ submitted: true, error: '' })
    setForm({ name: '', email: '', date: '', time: '', guests: '2', message: '' }) // Reset form
  }

  return (
    <section className="page contact-page">
      <div className="contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Book your experience</span>
          <h1>Reserve a table at Veloura.</h1>
          <p>
            Use the form below to request a reservation. Our team will confirm your preferred date and time quickly.
          </p>

          <div className="contact-details">
            <div>
              <p className="footer-title">Location</p>
              <p>1524 Rosewood Ave, Beverly Hills</p>
            </div>
            <div>
              <p className="footer-title">Hours</p>
              <p>Tue – Sun · 12PM – 11PM</p>
            </div>
            <div>
              <p className="footer-title">Phone</p>
              <p>+1 (310) 555-0198</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <div className="field-row">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />
          </div>
          <input
            type="number"
            min="1"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            placeholder="Guests"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Special requests or message"
          />

          {status.error && <p className="form-error">{status.error}</p>}
          {status.submitted && (
            <p className="form-success">
              Reservation request sent successfully. We will reach out by email soon.
            </p>
          )}

          <button type="submit">Send Reservation</button>
        </form>
      </div>
    </section>
  )
}
