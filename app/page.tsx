"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.05}px, ${-mousePosition.y * 0.05}px)`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.08}px, ${-mousePosition.y * 0.08}px)`,
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-500 rounded-full animate-pulse-glow" />
          <div className="absolute top-20 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-500 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              ✨ เรียนรู้ AI และ Web Development อย่างง่าย
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up stagger-1">
              <span className="gradient-text text-primary-600">MOSBytes</span>
              <br />
              <span className="text-4xl md:text-6xl font-light text-neutral-600">
                🚀
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
              แบ่งปัน <strong className="text-neutral-800">เทคนิคง่าย ๆ</strong>, เครื่องมือ AI 🤖
              และแนวทางที่ใช้ได้จริง เพื่อช่วยให้คุณ{" "}
              <br className="hidden md:block" />
              <strong className="text-neutral-800">เริ่มต้น สร้าง และเติบโต</strong> ไปกับโปรเจกต์ที่คุณชื่นชอบ
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up stagger-3">
              <Link 
                href="/blog" 
                className="btn btn-primary text-lg px-8 py-4 hover-lift"
              >
                🚀 เข้าสู่บล็อก
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/about" 
                className="btn btn-secondary text-lg px-8 py-4 hover-lift"
              >
                👋 รู้จักเรา
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up stagger-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-neutral-600">บทความคุณภาพ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-neutral-600">ผู้อ่านที่ไว้วางใจ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-neutral-600">อัพเดทความรู้ใหม่</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              ใช้ AI แล้วยังงงๆ อยู่ใช่ไหม? 🤯
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              บทเรียนส่วนใหญ่มักกระจัดกระจายและเข้าใจยาก
              จนคุณอาจรู้สึกสับสน นั้นเป็นเรื่องปกติครับ <br />
              <strong className="text-neutral-800">แต่เรามีวิธีที่ง่ายและฉลาดกว่านั้น</strong>
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📚",
                title: "ข้อมูลกระจัดกระจาย",
                description: "หาความรู้จากหลายแหล่ง จนสับสนไม่รู้จะเริ่มต้นตรงไหน"
              },
              {
                icon: "🤔",
                title: "เข้าใจยาก",
                description: "เนื้อหาซับซ้อนเกินไป ไม่เหมาะกับผู้เริ่มต้น"
              },
              {
                icon: "⏰",
                title: "เสียเวลา",
                description: "ใช้เวลานานในการเรียนรู้ แต่ได้ผลลัพธ์น้อย"
              }
            ].map((item, index) => (
              <div key={index} className="card p-8 text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            ผมขอเป็นไกด์ให้คุณ ✨
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-1">
            สวัสดีครับ ผม Mos 🙌 ที่นี่ผมจะมาแบ่งปันเทคนิคการเรียนรู้ที่เข้าใจง่าย ช่วยให้คุณ{" "}
            <strong className="text-neutral-800">เรียนรู้ได้เร็วขึ้น ลงมือทำจริง และต่อยอดสู่การเติบโต</strong>{" "}
            มาลองทำให้ AI เป็นเรื่องสนุกและเข้าถึงได้สำหรับทุกคนกันครับ 🚀
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "เป้าหมายชัดเจน",
                description: "เรียนรู้จากตัวอย่างจริง ใช้ได้ทันที"
              },
              {
                icon: "🚀",
                title: "เร็วและง่าย",
                description: "เข้าใจง่าย ลงมือทำได้เลย"
              },
              {
                icon: "💡",
                title: "ไอเดียใหม่",
                description: "อัพเดทเทรนด์และเทคโนโลยีล่าสุด"
              }
            ].map((item, index) => (
              <div key={index} className="card p-8 text-center hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              เริ่มต้นง่าย ๆ แค่ 3 ขั้นตอน 🚀
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-fade-in-up stagger-1">
              กระบวนการเรียนรู้ที่ออกแบบมาให้เข้าใจง่ายและได้ผลจริง
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "📚",
                title: "เรียนรู้",
                description: "เริ่มต้นจากคู่มือและตัวอย่างที่เข้าใจง่าย ใช้ได้จริง",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                icon: "🛠️",
                title: "ลงมือทำ",
                description: "ลองใช้ AI Prompts และ สร้างโปรเจกต์จริง",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "03",
                icon: "🌱",
                title: "เติบโต",
                description: "สร้างผลงาน แบ่งปันความรู้และ ต่อยอดทักษะของคุณ",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((item, index) => (
              <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Connection Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-neutral-200 to-neutral-300 transform -translate-y-1/2 z-0" />
                )}
                
                <div className="card p-8 text-center hover-lift relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white text-2xl font-bold mb-6`}>
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-light p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              มาเริ่มต้นไปด้วยกันวันนี้เลย ✨
            </h2>
            <p className="text-xl text-neutral-medium mb-8 animate-fade-in-up stagger-1">
              รับความรู้และเทคนิคล่าสุดจาก MOSBytes ผ่านอีเมล
            </p>
            
            <div className="animate-fade-in-up stagger-2">
              <NewsletterForm />
            </div>
            
            <div className="mt-8 animate-fade-in-up stagger-3">
              <Link 
                href="/blog" 
                className="btn btn-primary text-lg px-8 py-4 hover-lift"
              >
                🚀 เข้าสู่บล็อก
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in-up">
            เสียงจากผู้อ่าน 💬
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "MOSBytes ทำให้การเรียนรู้ AI และ Web Development กลายเป็นเรื่องที่ง่าย ใช้ได้จริง และสนุกขึ้นเยอะเลย!",
                author: "คุณสมชาย",
                role: "Frontend Developer"
              },
              {
                quote: "เนื้อหาชัดเจน เข้าใจง่าย และสามารถนำไปใช้ได้ทันที ขอบคุณที่แบ่งปันความรู้ดีๆ แบบนี้",
                author: "คุณสมหญิง",
                role: "UX Designer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card p-8 text-left hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-2xl mb-4">💬</div>
                <blockquote className="text-lg text-neutral-700 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-neutral-800">{testimonial.author}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
