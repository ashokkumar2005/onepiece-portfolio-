import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ✅ YOUR EMAILJS CREDENTIALS — fill these in after signing up at emailjs.com
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'aBcDeFgHiJkLmNoP'

const MY_EMAIL = 'aa7651391@gmail.com'

function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  return (
    <div className="contact">
      <h1 className="page-title">Send a Message 📧</h1>
      <p className="contact-intro">
        Want to join my crew? Have a project idea? Or just want to talk about One Piece?
        Reach out — I respond to all messages! 🏴‍☠️
      </p>

      <div className="contact-layout">
        {/* Form */}
        <div className="form-section">
          <h2 className="form-title">Send a Pigeon 🐦</h2>

          {status === 'success' && (
            <div className="alert alert-success">
              🎉 Message sent to {MY_EMAIL}! I'll reply soon! 🌊
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error">
              ☠️ Something went wrong! Check your EmailJS setup or try again.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name (Pirate Name OK too!) 🏴‍☠️</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g. Captain Coder"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email 📬</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="yourname@pirates.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message 💬</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me your dream... or just say hi!"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? '⏳ Sending...' : '⚓ Set Sail (Send Message)!'}
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h2 className="form-title">Find Me On 🗺️</h2>

          <div className="social-links">
            <a href={`mailto:${MY_EMAIL}`} className="social-card email">
              <span className="social-icon">✉️</span>
              <div>
                <div className="social-name">Email Me</div>
                <div className="social-handle">{MY_EMAIL}</div>
              </div>
            </a>

            <a href="#" className="social-card twitter">
              <span className="social-icon">🐦</span>
              <div>
                <div className="social-name">Twitter / X</div>
                <div className="social-handle">@pirateDev99</div>
              </div>
            </a>

            <a href="#" className="social-card linkedin">
              <span className="social-icon">💼</span>
              <div>
                <div className="social-name">LinkedIn</div>
                <div className="social-handle">Monkey D. Dev</div>
              </div>
            </a>

            <a href="#" className="social-card discord">
              <span className="social-icon">🎮</span>
              <div>
                <div className="social-name">Discord</div>
                <div className="social-handle">MonkeyDev#1234</div>
              </div>
            </a>
          </div>

          <div className="availability-box">
            <h3>🟢 Currently Available!</h3>
            <p>Open to internships, freelance projects, or just pair-coding sessions!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
