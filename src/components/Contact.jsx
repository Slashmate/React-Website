import React, { useState } from "react";
import axios from "axios";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      console.log("Email sent successfully");

      // Show toast
      setShowToast(true);

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Wait before closing popup (so toast has time to show)
      setTimeout(() => {
        setShowToast(false);
        onClose();
      }, 2000);

    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Toast Notification - Always render it */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded shadow">
          Mail sent successfully ✅
        </div>
      )}

      {/* Contact Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 border rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-3 py-2 border rounded"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
