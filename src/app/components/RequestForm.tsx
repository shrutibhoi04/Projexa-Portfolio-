
import { Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { useState, useRef } from 'react';

export function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    deadline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsvfask",
        "template_ztmbtta",
        formRef.current!,
        "AXzWdS5a7A0o_-Yt4"
      )
      .then(
        () => {
          alert("Request sent successfully 🚀");
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send request ❌");
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="request-form" className="relative py-24 px-6 bg-[#0B1220]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Request Your Work
          </h2>
          <p className="text-xl text-gray-400">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </div>

        <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#2196F3]/20 to-[#FF8008]/20 rounded-3xl blur-xl opacity-50" />

          <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-semibold">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/50 transition-all"
                placeholder="Enter your full name"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-white mb-2 font-semibold">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 1234567890"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#2196F3]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-semibold">
                Email Address (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-white mb-2 font-semibold">
                Service Type *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/50 transition-all"
              >
                <option value="" className="bg-[#0B1220]">Select a service</option>
                <option value="software" className="bg-[#0B1220]">Software Project</option>
                <option value="resume" className="bg-[#0B1220]">ATS-Friendly Resume</option>
                <option value="presentation" className="bg-[#0B1220]">PowerPoint Presentation</option>
                <option value="report" className="bg-[#0B1220]">Project Report</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label htmlFor="deadline" className="block text-white mb-2 font-semibold">
                Deadline *
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/50 transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-white mb-2 font-semibold">
                Project Description *
              </label>
              <textarea
                id="description"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/50 transition-all resize-none"
                placeholder="Describe your requirements, specific features, technologies, or any other details..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#FF8008] to-[#ff9933] text-white font-bold rounded-xl shadow-lg hover:shadow-[#FF8008]/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Request Submitted!
                </>
              ) : (
                <>
                  Submit Request
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {isSubmitted && (
              <div className="text-center text-green-400 font-semibold">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
