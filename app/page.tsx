
import Link from "next/link";
import NewsletterForm from "./components/NewsletterForm";

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-6 gradient-text">
          MOSBytes
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Helping you start, grow, and thrive with practical tech tips, AI tools, 
          and strategies—so you can focus on <strong>building the business you love.</strong>
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 bg-gray-200 text-white rounded-xl shadow hover-lift inline-block font-semibold"
        >
          Explore Blog
        </Link>
      </section>

      {/* Problem */}
      <section className="py-16 bg-gray-50 rounded-2xl shadow-sm mx-4 md:mx-auto max-w-4xl text-center hover-lift transition">
        <h2 className="text-3xl font-semibold mb-4">
          Struggling to Learn AI?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Most tutorials are scattered and hard to follow. Feeling lost is
          normal <br/> <strong>but there’s a better way.</strong>
        </p>
      </section>

      {/* Guide */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">I Can Guide You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm Mos, sharing practical tips to help you learn faster, build
          projects, and grow your digital presence.
        </p>
      </section>

      {/* Plan */}
      <section className="py-16 bg-gray-50 rounded-2xl shadow-sm mx-4 md:mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-8">3 Steps to Start</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover-lift transition cursor-pointer">
            <h3 className="font-semibold mb-2">1. Learn</h3>
            <p className="text-gray-600">
              Start with clear, practical guides and examples.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover-lift transition cursor-pointer">
            <h3 className="font-semibold mb-2">2. Apply</h3>
            <p className="text-gray-600">
              Implement what you learn using AI prompts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover-lift transition cursor-pointer">
            <h3 className="font-semibold mb-2">3. Grow</h3>
            <p className="text-gray-600">
              Build projects, and expand your knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Start Your Journey Today
        </h2>
        <Link
          href="/blog"
          className="px-6 py-3 bg-gray-200 text-white rounded-xl shadow hover-lift inline-block font-semibold"
        >
          Visit Blog
        </Link>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 rounded-2xl shadow-sm mx-4 md:mx-auto max-w-4xl text-center hover-lift transition">
        <h2 className="text-3xl font-semibold mb-4">What Readers Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto italic">
          "MOSBytes made learning AI and web development simple, practical, and
          fun!"
        </p>
        <div className="mt-6 text-gray-600">
          <p className="text-gray-600 mb-8">
            Subscribe to my newsletter for insights and practical guides.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
