"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function LandingPage() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY * 0.3); // speed factor
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ transform: `translateY(${offsetY}px)` }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        fill="none"
      >
        <circle cx="400" cy="300" r="200" fill="url(#gradient)" opacity="0.2" />
        <defs>
          <radialGradient
            id="gradient"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(400 300) scale(200)"
          >
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#f472b6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Hero */}
      <AnimatedSection className="text-center py-28 md:py-36 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
            MOSBytes 🚀
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            แบ่งปัน <strong>เทคนิคง่าย ๆ</strong>, เครื่องมือ AI 🤖
            และแนวทางที่ใช้ได้จริง เพื่อช่วยให้คุณ{" "}<br/>
            <strong>เริ่มต้น สร้าง และเติบโต</strong> ไปกับโปรเจกต์ที่คุณชื่นชอบ
          </p>
        </div>
      </AnimatedSection>

      {/* Problem */}
      <AnimatedSection className="mb-24">
        <SectionWrapper>
          <h2 className="text-3xl font-semibold mb-4">
             ใช้ AI แล้วยังงงๆ อยู่ใช่ไหม? 🤯
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            บทเรียนส่วนใหญ่มักกระจัดกระจายและเข้าใจยาก
            จนคุณอาจรู้สึกสับสน นั้นเป็นเรื่องปกติครับ <br />
            <strong>แต่เรามีวิธีที่ง่ายและฉลาดกว่านั้น</strong>
          </p>
        </SectionWrapper>
      </AnimatedSection>

      {/* Guide */}
      <AnimatedSection className="py-16 text-center px-4 relative z-10 mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">ผมขอเป็นไกด์ให้คุณ ✨</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            สวัสดีครับ ผม Mos 🙌
            ที่นี่ผมจะมาแบ่งปันเทคนิคการเรียนรู้ที่เข้าใจง่าย ช่วยให้คุณ{" "}
            <strong>เรียนรู้ได้เร็วขึ้น ลงมือทำจริง และต่อยอดสู่การเติบโต</strong>{" "}
            มาลองทำให้ AI เป็นเรื่องสนุกและเข้าถึงได้สำหรับทุกคนกันครับ 🚀
          </p>
        </div>
      </AnimatedSection>

      {/* Plan */}
      <AnimatedSection className="mb-24">
        <SectionWrapper>
          <h2 className="text-3xl font-semibold mb-8">
            เริ่มต้นง่าย ๆ แค่ 3 ขั้นตอน 🚀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="1. เรียนรู้ 📚"
              description="เริ่มต้นจากคู่มือและตัวอย่างที่เข้าใจง่าย ใช้ได้จริง"
            />
            <FeatureCard
              title="2. ลงมือทำ 🛠️"
              description="ลองใช้ AI Prompts และสร้างโปรเจกต์จริง"
            />
            <FeatureCard
              title="3. เติบโต 🌱"
              description="สร้างผลงาน แบ่งปันความรู้ และต่อยอดทักษะของคุณ"
            />
          </div>
        </SectionWrapper>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 text-center px-4 relative z-10 mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            มาเริ่มต้นไปด้วยกันวันนี้เลย ✨
          </h2>
          <Link
            href="/blog"
            className="px-8 py-4 bg-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-purple-800 transform hover:-translate-y-1 transition-all duration-300 inline-block font-semibold"
          >
            เข้าสู่บล็อก
          </Link>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="pb-24">
        <SectionWrapper>
          <h2 className="text-3xl font-semibold mb-4">เสียงจากผู้อ่าน 💬</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "MOSBytes ทำให้การเรียนรู้ AI และ Web Development
            กลายเป็นเรื่องที่ง่าย ใช้ได้จริง และสนุกขึ้นเยอะเลย!"
          </p>
        </SectionWrapper>
      </AnimatedSection>
    </div>
  );
}
