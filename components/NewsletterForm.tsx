"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage(""); // Clear previous messages

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      // Try to parse JSON regardless of status, as error details might be in the body
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "🎉 Subscribed! Welcome aboard.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form 
        onSubmit={handleSubscribe} 
        className="flex items-center bg-white rounded-xl shadow-md p-2 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 transition-all duration-300"
      >
        <div className="relative flex-1">
          <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 pl-10 bg-transparent focus:outline-none text-gray-700 disabled:text-gray-400"
            required
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-sm hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 disabled:bg-purple-400 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[130px]"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <SpinnerIcon className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
              <span>Subscribing...</span>
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
      <div className="h-6 mt-2 text-center">
        <AnimatePresence>
          {message && (
            <motion.p
              key={status}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`font-semibold text-sm ${
                status === "success" ? "text-green-600" : "text-red-500"
              }`}
            >
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function SpinnerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}
