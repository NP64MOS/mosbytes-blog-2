export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 text-center py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} MyBlog. All rights reserved.
    </footer>
  );
}
