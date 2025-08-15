import Link from "next/link";

export default function Navbar() {
  return (
    // <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
    //   <nav className="border-b bg-white">
    //     <div className="container mx-auto flex justify-between items-center px-4 py-4">
    //       <Link href="/" className="text-xl font-bold">
    //         MyBlog
    //       </Link>
    //       <div className="space-x-4">
    //         <Link href="/" className="hover:text-blue-600">
    //           Home
    //         </Link>
    //         <Link href="/blog" className="hover:text-blue-600">
    //           Blog
    //         </Link>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          MOSBytes
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 hidden md:block">Home</Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-600 hidden md:block">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
