import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Define template parameters for EmailJS
    const templateParams = {
      name,        // User's name from the form
      email,       // User's email from the form
      message,     // User's message from the form
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_slkbh7l',    // Replace with your EmailJS service ID
        'template_mdvalo8',   // Replace with your EmailJS template ID
        templateParams,
        'F7Up33vnoC4ECkJVq'  // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          setEmailStatus('Email sent successfully!');
        },
        (error) => {
          setEmailStatus('Failed to send email.');
        }
      );

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Contact Me</h1>
        <p>
          I'd love to hear from you! Whether you have questions about my artwork,
          commissions, or just want to say hello, feel free to reach out.
        </p>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                height: '60px',
              }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </form>
        {/* Status message for email send success/failure */}
        {emailStatus && <p>{emailStatus}</p>}
        <div>
          <h3>Other Ways to Reach Me:</h3>
          <p>Email: <a href="mailto:artist@example.com">artist@example.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>Follow me on social media:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
            <a
              href="https://www.facebook.com/steve.fisher.7374480"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#808080', fontSize: '5vh', margin: '.8vh' }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/stevefisherarts/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#808080', fontSize: '5vh', margin: '.8vh' }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;