import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formId = "1cHdFHYMuuBWz_KWvJO_amwGrnX2rIOvlJjfCoPkTuB0";
    const entryName = "entry.1452060743";
    const entryEmail = "entry.502302252";
    const formData = new FormData();
    formData.append(entryName, name);
    formData.append(entryEmail, email);

    try {
      await fetch(`https://docs.google.com/forms/d/${formId}/formResponse`, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-300 font-mono text-sm";

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-8 text-center"
          >
            <div className="text-4xl mb-4">🎉</div>
            <p className="text-emerald-400 font-semibold text-lg">Message received!</p>
            <p className="text-slate-400 mt-2 text-sm">I'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label className="block text-sm text-slate-400 mb-2 font-mono" htmlFor="name">
                // your name
              </label>
              <input
                type="text"
                id="name"
                className={inputClass}
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-2 font-mono" htmlFor="email">
                // your email
              </label>
              <input
                type="email"
                id="email"
                className={inputClass}
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message →"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
