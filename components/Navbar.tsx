"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui-components";

export default function Navbar() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              MOSBytes
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="text" color="blue-gray">
                Blog
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="text" color="blue-gray">
                About
              </Button>
            </Link>
            {isAdmin ? (
              <Link href="/admin/posts">
                <Button variant="text" color="blue-gray">
                  Manage Posts
                </Button>
              </Link>
            ) : (
              <Link href="/admin/posts">
                <Button variant="outlined" color="blue">
                  Admin
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
