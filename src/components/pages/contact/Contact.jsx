import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import BlurText from "@/components/UI/BlurText";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === "success") {
        setSuccess(result.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="flex justify-center text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            <BlurText text="Get In Touch" animateBy="words" />
          </h2>
          {/* Decorative Dash */}
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto mb-4 rounded"></div>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Drop me a message.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
              </div>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white
                           placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white
                           transition-all hover:bg-white/10"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white
                           placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white
                           transition-all hover:bg-white/10"
              />
            </div>
          </div>

          {/* Message */}
          <div className="relative group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <div className="relative">
              <div className="absolute top-4 left-4 pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/5 border border-white/10 text-white
                           placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-white
                           transition-all resize-none hover:bg-white/10"
              ></textarea>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-red-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                {error}
              </p>
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 animate-in fade-in duration-500">
              <p className="text-green-400 text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {success}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white/10 text-white font-semibold px-6 py-4 rounded-lg
                       hover:bg-white/20 hover:shadow-lg transition-all duration-200
                       disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Your information is safe and will never be shared.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
