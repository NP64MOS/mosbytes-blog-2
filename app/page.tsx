"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NewsletterForm from "./components/NewsletterForm";

export default function LandingPage() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.3); // speed factor
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ transform: `translateY(${offsetY}px)` }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        fill="none"
      >
        <circle cx="400" cy="300" r="200" fill="url(#gradient)" opacity="0.2" />
        <defs>
          <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 300) scale(200)">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Hero */}
      <section className="text-center py-24 px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          MOSBytes 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Helping you start, grow, and thrive with practical <strong>tech tips</strong>, AI tools 🤖, 
          and strategies—so you can focus on <strong>building the projects you love</strong>.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition inline-block font-semibold"
        >
          Explore Blog
        </Link>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50 rounded-2xl shadow-md mx-4 md:mx-auto max-w-4xl text-center hover:shadow-lg transition cursor-pointer relative z-10">
        <h2 className="text-3xl font-semibold mb-4">Struggling to Learn AI? 🤯</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Most tutorials are scattered and hard to follow. Feeling lost is normal, <br/> 
          <strong>but there’s a smarter way.</strong>
        </p>
      </section>

      {/* Guide */}
      <section className="py-16 text-center px-4 relative z-10">
        <h2 className="text-3xl font-semibold mb-4">I Can Guide You ✨</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm Mos, sharing practical tips to help you learn faster, build projects, and grow your digital presence.  
          Let's make AI and web development <strong>fun and approachable!</strong>
        </p>
      </section>

      {/* Plan */}
      <section className="py-16 bg-gray-50 rounded-2xl shadow-md mx-4 md:mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-8">3 Steps to Start 🚀</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
            <h3 className="font-semibold mb-2">1. Learn 📚</h3>
            <p className="text-gray-600">
              Start with clear, practical guides and examples.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
            <h3 className="font-semibold mb-2">2. Apply 🛠️</h3>
            <p className="text-gray-600">
              Implement what you learn using AI prompts and real projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
            <h3 className="font-semibold mb-2">3. Grow 🌱</h3>
            <p className="text-gray-600">
              Build projects, share knowledge, and expand your skills.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Start Your Journey Today ✨</h2>
        <Link
          href="/blog"
          className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition inline-block font-semibold"
        >
          Visit Blog
        </Link>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 rounded-2xl shadow-md mx-4 md:mx-auto max-w-4xl text-center hover:shadow-lg transition cursor-pointer relative z-10">
        <h2 className="text-3xl font-semibold mb-4">What Readers Say 💬</h2>
        <p className="text-gray-600 max-w-2xl mx-auto italic">
          "MOSBytes made learning AI and web development simple, practical, and fun!"
        </p>
        <div className="mt-6 text-gray-600">
          <p className="text-gray-600 mb-8">
            Subscribe to my newsletter for insights and practical guides.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
