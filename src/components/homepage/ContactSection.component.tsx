// src/components/homepage/ContactSection.component.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Send, Mail, User, MessageSquare, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

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

    // Ideally, move these to environment variables (e.g., import.meta.env.VITE_SERVICE_ID)
    const SERVICE_ID = "service_sqt4irk";
    const TEMPLATE_ID = "template_mjo6t4q";
    const USER_ID = "rGZmJBPKYvnn2S67Q";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID).then(
      (_result) => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: "TRANSMISSION SUCCESSFUL. MESSAGE RECEIVED.",
        });
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setLoading(false);
        setStatusMessage({
          type: "error",
          text: "TRANSMISSION FAILED. PLEASE RETRY.",
        });
        console.error(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#f4f3ef] relative overflow-hidden font-mono"
    >
      {/* Consistent Background Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
        }}
      ></div>

      <motion.div
        className="relative z-10 max-w-2xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Window Header */}
        <div className="bg-blue-700 border-b-4 border-black p-3 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="font-bold tracking-widest uppercase text-sm">
                    MAIL_CLIENT_V1.0
                </span>
            </div>
            <div className="flex gap-2">
                <div className="w-3 h-3 bg-white border border-black hover:bg-zinc-200"></div>
                <div className="w-3 h-3 bg-white border border-black hover:bg-zinc-200"></div>
            </div>
        </div>

        <div className="p-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-black mb-2 text-center">
                Get In Touch
            </h2>
            <p className="text-center text-zinc-500 text-sm font-bold mb-8 uppercase tracking-wider">
                // Send me a signal
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="relative group">
                <label
                    className="block text-xs font-bold uppercase mb-1 ml-1"
                    htmlFor="name"
                >
                    <span className="bg-black text-white px-1">User_Name</span>
                </label>
                <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-zinc-400">
                        <User size={18} />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name..."
                        className="w-full bg-zinc-50 border-2 border-black pl-10 pr-4 py-3 font-bold text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Email Input */}
            <div className="relative group">
                <label
                    className="block text-xs font-bold uppercase mb-1 ml-1"
                    htmlFor="email"
                >
                    <span className="bg-black text-white px-1">Email_Address</span>
                </label>
                <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-zinc-400">
                        <Mail size={18} />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="name@example.com"
                        className="w-full bg-zinc-50 border-2 border-black pl-10 pr-4 py-3 font-bold text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Message Input */}
            <div className="relative group">
                <label
                    className="block text-xs font-bold uppercase mb-1 ml-1"
                    htmlFor="message"
                >
                    <span className="bg-black text-white px-1">Message_Data</span>
                </label>
                <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-zinc-400">
                        <MessageSquare size={18} />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Type your message here..."
                        className="w-full bg-zinc-50 border-2 border-black pl-10 pr-4 py-3 font-bold text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all resize-none"
                        disabled={loading}
                    />
                </div>
            </div>

            {/* Status Message (Styled as a System Alert) */}
            {statusMessage && (
                <div
                className={`flex items-center gap-2 p-3 border-2 border-black text-sm font-bold uppercase ${
                    statusMessage.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
                >
                {statusMessage.type === "success" ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}
                {statusMessage.text}
                </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
                <button
                type="submit"
                disabled={loading}
                className="w-full group relative bg-black text-white border-2 border-black py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <span className="flex items-center justify-center gap-3">
                        {loading ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Processing...
                        </>
                        ) : (
                        <>
                            Send_Transmission <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </>
                        )}
                    </span>
                </button>
            </div>
            </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;