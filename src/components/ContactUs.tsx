import React, { useState } from 'react';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  message: '',
};

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can implement the logic to send the form data to your server here
    console.log('Form data submitted:', formData);
    setFormData(initialFormState); // Clear the form after submission
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
