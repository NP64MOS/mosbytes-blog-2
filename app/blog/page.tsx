import Link from "next/link";
import { Card, Typography } from "@/components/ui-components";
import { getPosts } from "@/lib/getPosts";
import { format } from "date-fns";
import BlogSearch from "./BlogSearch";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogListPage() {
  const posts = await getPosts({ published: true });

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const getRandomGradient = (title: string) => {
    const gradients = [
      "from-blue-500 to-purple-600",
      "from-purple-500 to-pink-600",
      "from-emerald-500 to-blue-600",
      "from-orange-500 to-red-600",
      "from-pink-500 to-purple-600",
      "from-indigo-500 to-purple-600",
    ];
    const index = title.length % gradients.length;
    return gradients[index];
  };

  const categories = [
    { id: "all", label: "ทั้งหมด", icon: "📚", count: posts.length },
    { id: "ai", label: "AI", icon: "🤖", count: posts.filter(p => p.title.toLowerCase().includes("ai")).length },
    { id: "web", label: "Web Dev", icon: "🌐", count: posts.filter(p => p.title.toLowerCase().includes("web") || p.title.toLowerCase().includes("react") || p.title.toLowerCase().includes("next")).length },
    { id: "tips", label: "เทคนิค", icon: "💡", count: posts.filter(p => p.title.toLowerCase().includes("tip") || p.title.toLowerCase().includes("trick")).length },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in-up">
          บล็อก MOSBytes 📝
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
          ค้นพบความรู้ เทคนิค และแนวทางใหม่ๆ ในการพัฒนาเว็บไซต์และ AI
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6 animate-fade-in-up stagger-2">
        <BlogSearch posts={posts} categories={categories} />
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group h-full hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Featured Image Placeholder */}
              <div className={`w-full h-48 bg-gradient-to-br ${getRandomGradient(post.title)} rounded-t-xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    📝 บทความ
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    ⏱️ {getReadingTime(post.excerpt || post.title)} นาที
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Title */}
                <Typography variant="h4" className="mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </Typography>

                {/* Excerpt */}
                {post.excerpt && (
                  <Typography variant="paragraph" className="mb-4 text-neutral-600 line-clamp-3">
                    {post.excerpt}
                  </Typography>
                )}

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <time className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{format(new Date(post.published_at || post.created_at || new Date()), 'MMM d, yyyy')}</span>
                  </time>
                  <div className="flex items-center space-x-1">
                    <span>👁️</span>
                    <span>อ่านเพิ่มเติม</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-16 animate-fade-in-up">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold mb-2 text-neutral-800">
            ไม่พบบทความที่ค้นหา
          </h3>
          <p className="text-neutral-600 mb-6">
            ลองเปลี่ยนคำค้นหาหรือหมวดหมู่ดูครับ
          </p>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mt-20 text-center">
        <div className="card p-12 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            อย่าพลาดบทความใหม่! 🚀
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            สมัครรับข่าวสารเพื่อรับบทความและเทคนิคล่าสุดจาก MOSBytes
          </p>
          <Link href="/" className="btn btn-primary text-lg px-8 py-4 hover-lift">
            สมัครรับข่าวสาร
          </Link>
        </div>
      </div>
    </div>
  );
}
