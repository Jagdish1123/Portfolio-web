import { motion } from "framer-motion";
import { Github, Linkedin,  Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
                Message sent successfully!
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through social media or send me an email.
                I'm always open to discussing new projects or opportunities.
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <motion.a 
                  href="https://github.com/Jagdish1123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/jagdishbainade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <Linkedin size={24} />
                </motion.a>
              
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}