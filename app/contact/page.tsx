
import { Metadata } from "next";
import {AnimatedSection} from "@/components/AnimatedSection";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - MOSBytes",
  description: "Get in touch with MOSBytes for collaborations, questions, or feedback.",
};

const ContactPage = () => {
  return (
    <SectionWrapper>
      <AnimatedSection>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-center mb-8">
              Have a question, a project proposal, or just want to say hello?
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default ContactPage;
