import { Metadata } from "next";
import {AnimatedSection} from "@/components/AnimatedSection";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "คู่มือ - MOSBytes",
  description: "คู่มือเชิงลึกเกี่ยวกับการพัฒนาเว็บ, AI และอีกมากมาย",
};

const GuidesPage = () => {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">คู่มือ</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-center mb-8">
              เร็วๆ นี้! คู่มือเชิงลึกเกี่ยวกับการพัฒนาเว็บ, AI และอีกมากมาย
            </p>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default GuidesPage;