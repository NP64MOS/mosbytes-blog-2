import { Metadata } from "next";
import {AnimatedSection} from "@/components/AnimatedSection";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "ติดต่อเรา - MOSBytes",
  description: "ติดต่อ MOSBytes สำหรับความร่วมมือ คำถาม หรือข้อเสนอแนะ",
};

const ContactPage = () => {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">ติดต่อเรา</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-center mb-8">
              มีคำถาม ข้อเสนอโครงการ หรือเพียงแค่ต้องการทักทาย?
              กรอกแบบฟอร์มด้านล่างแล้วเราจะติดต่อกลับโดยเร็วที่สุด
            </p>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default ContactPage;