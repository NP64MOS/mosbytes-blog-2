"use client";

import { useState, useEffect } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  published_at?: string;
  created_at?: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  count: number;
}

interface BlogSearchProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogSearch({ posts, categories }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "all" || 
                             (selectedCategory === "ai" && post.title.toLowerCase().includes("ai")) ||
                             (selectedCategory === "web" && (post.title.toLowerCase().includes("web") || post.title.toLowerCase().includes("react") || post.title.toLowerCase().includes("next"))) ||
                             (selectedCategory === "tips" && (post.title.toLowerCase().includes("tip") || post.title.toLowerCase().includes("trick")));
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  return (
    <>
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          placeholder="ค้นหาบทความ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 pl-12 bg-white border border-neutral-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
          🔍
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200"
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
            <span className="text-xs bg-neutral-800/80 text-white px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-center animate-fade-in-up stagger-3">
        <p className="text-neutral-600">
          พบ {filteredPosts.length} บทความ
          {searchTerm && ` สำหรับ "${searchTerm}"`}
          {selectedCategory !== "all" && ` ในหมวดหมู่ ${categories.find(c => c.id === selectedCategory)?.label}`}
        </p>
      </div>
    </>
  );
}
