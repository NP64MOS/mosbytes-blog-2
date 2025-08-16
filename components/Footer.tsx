import { NewsletterForm } from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">MOSBytes</h2>
            <p className="text-gray-600 mb-4">
              A modern blog focused on AI, web development, and best practices.
              Built with Next.js, MDX, and Material Tailwind.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MOSBytes. All rights reserved.
            </p>
          </div>
          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
