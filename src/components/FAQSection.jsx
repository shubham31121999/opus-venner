import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are dental implants painful?",
    answer:
      "Explain that the procedure is done under anesthesia, so there’s minimal pain during it, and that postoperative discomfort is manageable with medication and usually subsides in a few days.",
  },
  {
    question: "How much do dental implants cost?",
    answer:
      "Without getting too detailed on the page (since price can vary), give a range or explain factors affecting cost, and crucially mention financing options or EMI plans available. ",
  },
  {
    question: "How long do implants last?",
    answer:
      "Emphasize that implants are a long-term solution, often lasting decades or even a lifetime with proper care, unlike other options. ",
  },
  {
    question: "What if I’m not a candidate for implants?",
    answer:
      "Reassure that most people are candidates, and even if bone is low, procedures like bone grafts can help, which OPUS can evaluate. ",
  },
  {
    question: "How soon can I get back to normal life after the procedure? ",
    answer:
      "Briefly say most patients return to work next day or within a couple of days, and normal eating after the crown is placed, etc. Emphasize quick recovery to remove fear of downtime.",
  },
  {
    question: "How long does a routine scale-and-polish take? ",
    answer:
      "Around 25 minutes chair-time; add a few minutes if you choose an Air-Flow polish for extra brightness.",
  },
  {
    question: "Can you handle dental emergencies? ",
    answer:
      "Yes. We reserve urgent care slots daily for toothaches, trauma or swelling. Call the emergency number listed above for priority assistance.",
  },
    {
    question: "Do you accept insurance or reimbursements?",
    answer:
      "We issue detailed treatment invoices and codes so you can claim with your insurer. Our desk can verify eligibility quickly.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
    >
      {question}
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <p className="text-gray-600 text-sm pb-4 transition-all duration-300">
        {answer}
      </p>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(index === openIndex ? null : index);

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-[90%] sm:max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-themeGreen text-center mb-0">
          Frequently Asked Questions
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-themeGreen text-center mb-12">
          (FAQ)
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
