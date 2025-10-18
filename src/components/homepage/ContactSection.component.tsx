import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const SERVICE_ID = "service_sqt4irk";
    const TEMPLATE_ID = "template_mjo6t4q";
    const USER_ID = "rGZmJBPKYvnn2S67Q";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (_result) => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setLoading(false);
        setStatusMessage({
          type: "error",
          text: "Failed to send message. Please try again later.",
        });
        console.error(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md border-l-4 border-blue-400 rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text ">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition"
              disabled={loading}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition"
              disabled={loading}
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition"
              disabled={loading}
            />
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p
              className={`text-center font-medium ${
                statusMessage.type === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {statusMessage.text}
            </p>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
