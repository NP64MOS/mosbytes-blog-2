import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Typography } from "@/components/ui-components";
import { getPostBySlug } from "@/lib/getPosts";
import BlogPostContent from "./BlogPostContent";
import Link from "next/link";

export const revalidate = 3600; // Revalidate every hour

async function generateParams(params: Promise<{ slug: string }>) {
  return await params;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await generateParams(params);
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Hero Section */}
      <div className={`w-full h-64 md:h-96 bg-gradient-to-br ${getRandomGradient(post.title)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              📝 บทความ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <span>📅</span>
                <time>{format(new Date(post.published_at || post.created_at || new Date()), 'MMMM d, yyyy')}</time>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏱️</span>
                <span>{getReadingTime(post.content)} นาที</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>👁️</span>
                <span>อ่าน</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-3">
            {/* Excerpt */}
            {post.excerpt && (
              <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
                <Typography variant="paragraph" className="text-lg text-neutral-700 italic leading-relaxed">
                  &ldquo;{post.excerpt}&rdquo;
                </Typography>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <BlogPostContent content={post.content} />
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-800">เขียนโดย MOSBytes</div>
                    <div className="text-sm text-neutral-600">แบ่งปันความรู้และเทคนิคการพัฒนา</div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <span>👍</span>
                  </button>
                  <button className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <span>💬</span>
                  </button>
                  <button className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <span>📤</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Table of Contents */}
            <div className="card p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <span>📋</span>
                <span>สารบัญ</span>
              </h3>
              <nav className="space-y-2">
                {post.content.split('\n').map((line, index) => {
                  if (line.startsWith('## ')) {
                    const title = line.replace('## ', '');
                    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                      <a
                        key={index}
                        href={`#${id}`}
                        className="block text-sm text-neutral-600 hover:text-blue-600 transition-colors duration-300 py-1"
                      >
                        {title}
                      </a>
                    );
                  }
                  return null;
                })}
              </nav>
            </div>

            {/* Related Articles */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <span>📚</span>
                <span>บทความที่เกี่ยวข้อง</span>
              </h3>
              <div className="space-y-4">
                <Link href="/blog" className="block group">
                  <div className="text-sm font-medium text-neutral-800 group-hover:text-blue-600 transition-colors duration-300">
                    ดูบทความทั้งหมด
                  </div>
                  <div className="text-xs text-neutral-500">ค้นพบความรู้ใหม่ๆ</div>
                </Link>
                <Link href="/about" className="block group">
                  <div className="text-sm font-medium text-neutral-800 group-hover:text-blue-600 transition-colors duration-300">
                    เกี่ยวกับ MOSBytes
                  </div>
                  <div className="text-xs text-neutral-500">รู้จักเราเพิ่มเติม</div>
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="card p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                <span>📧</span>
                <span>รับข่าวสาร</span>
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                รับบทความและเทคนิคล่าสุดจาก MOSBytes
              </p>
              <Link href="/" className="btn btn-primary w-full text-sm">
                สมัครรับข่าวสาร
              </Link>
            </div>
          </aside>
        </div>

        {/* Back to Blog */}
        <div className="mt-16 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-neutral-600 hover:text-blue-600 transition-colors duration-300"
          >
            <span>←</span>
            <span>กลับไปยังบล็อก</span>
          </Link>
        </div>
      </div>
    </div>
  );
}