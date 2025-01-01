
import React, { useState } from 'react';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>Email: support@irkush.com</p>
                <p>Phone: (+252) 616843925</p>
                <p>Address: 123 Jewelry Lane, Mog City, State, ZIP</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Us a Message</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <div className="social-media">
                <h2>Follow Us</h2>
                <p>Facebook | Instagram | Twitter</p>
            </div>
        </div>
    );
}

export default Contact;