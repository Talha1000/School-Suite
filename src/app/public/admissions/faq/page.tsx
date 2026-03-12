import React from "react";
import { HelpCircle, ChevronDown, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Admissions FAQ | Your School",
  description: "Common questions and answers regarding admissions.",
};

const faqs = [
  {
    question: "What is the deadline for applications?",
    answer: "Our standard application deadline is January 15th for the upcoming academic year. However, we accept rolling admissions if space remains available in specific grade levels."
  },
  {
    question: "Do you offer transportation/bus services?",
    answer: "Yes, we offer comprehensive bus routes covering most major neighborhoods. Transportation fees are billed separately from tuition."
  },
  {
    question: "What is the average class size?",
    answer: "We maintain a low student-to-teacher ratio. The average class size is 18 students for Primary school and 22 students for Middle and High school."
  },
  {
    question: "Are there after-school care options?",
    answer: "Yes, we provide an extended day program from 3:30 PM to 6:00 PM for students in Grades 1-6, which includes homework help and supervised activities."
  },
  {
    question: "How can I check the status of my child's application?",
    answer: "Once you submit your application, you will receive login credentials to our Parent Portal where you can track the status of your application in real-time."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-50 py-16 px-6 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <HelpCircle className="mx-auto text-blue-600 mb-4" size={40} />
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Find quick answers to the most common questions about our admissions process, academics, and student life.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group bg-white border border-slate-200 rounded-xl shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer text-slate-900 font-semibold text-lg">
                {faq.question}
                <ChevronDown className="text-slate-400 group-open:-rotate-180 transition-transform duration-300" size={20} />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600">Our admissions team is here to help you every step of the way.</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shrink-0">
            <PhoneCall size={18} />
            Contact Admissions
          </button>
        </div>
      </section>
    </main>
  );
}