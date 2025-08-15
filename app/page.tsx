import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-secondary-900">
              Welcome to MOSBytes
            </h1>
            <p className="text-xl text-secondary-700 mb-8">
              Exploring modern web development through clear, practical insights
            </p>
            <Link
              href="/blog"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 hover:translate-y-[-2px] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4 text-secondary-800">Modern Development</h3>
              <p className="text-secondary-700">
                Stay up-to-date with the latest web development trends and best practices
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4 text-secondary-800">Clear Insights</h3>
              <p className="text-secondary-700">
                Complex concepts explained in a clear, easy-to-understand way
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200">
              <h3 className="text-xl font-semibold mb-4 text-secondary-800">Practical Examples</h3>
              <p className="text-secondary-700">
                Real-world examples and code snippets you can use in your projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Get the latest articles and updates delivered to your inbox</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
