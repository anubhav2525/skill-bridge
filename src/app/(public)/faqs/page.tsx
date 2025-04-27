import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What types of courses are available on this platform?",
    answer:
      "Our platform offers a wide range of courses across various categories, difficulty levels, and durations. You can browse and filter courses to find the one that suits your interests and learning goals.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, simply sign up or log in, browse the Courses page, select your desired course, and follow the on-screen instructions to complete your enrollment, including secure payment if required.",
  },
  {
    question: "Are there free trials or demo content available?",
    answer:
      "Yes, we offer demo and free trial sections for many courses, allowing you to explore limited course content before making a commitment.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit/debit cards and other secure payment options through our integrated payment gateway.",
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer:
      "Yes, learners who successfully complete eligible courses will receive a digital certificate, which can be downloaded from your dashboard.",
  },
  {
    question: "Can I access course materials offline?",
    answer:
      "Yes, our platform supports offline access for many course materials. You can download resources to study without an internet connection.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Visit the Contact page and fill out the support form. Our team will respond to your inquiry as soon as possible.",
  },
  {
    question: "How do I apply to become a trainer?",
    answer:
      "Use the Apply Trainer form on our platform. Complete the multi-step process to submit your expertise, qualifications, and availability.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, we prioritize your privacy and use secure protocols to protect your data. Please refer to our Privacy Policy for more details.",
  },
  {
    question: "Can parents monitor their child's progress?",
    answer:
      "Yes, parents have dedicated dashboards to view their child’s progress, achievements, and engagement with courses.",
  },
];

const FaqsPage = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 py-16 space-y-4 ">
        <div className="space-y-3 ">
          <h1 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Here are some of the most common questions we get asked. If you have
            any other questions, feel free to reach out to us.
          </p>
        </div>

        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem value={item.question} key={item.question}>
                <AccordionTrigger className="text-xl md:text-2xl ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqsPage;
