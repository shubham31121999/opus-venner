// // import { useState } from "react";
// // import { ChevronDown } from "lucide-react";

// // const faqs = [
// //   {
// //     question: "Is dental treatment painful at OPUS?",
// //     answer:
// //       "Not at all! At OPUS Dental, we prioritize pain-free procedures using gentle techniques and advanced technology. Most patients report minimal discomfort.",
// //   },
// //   {
// //     question: "How do I book an appointment?",
// //     answer:
// //       "You can book an appointment online via our website or call either of our clinics in Bandra or Fort. Same-day appointments are often available for emergencies.",
// //   },
// //   {
// //     question: "Do you offer specialized treatments?",
// //     answer:
// //       "Yes. We offer a wide range of specialties including implants, orthodontics, cosmetic dentistry, pediatric dentistry, and TMJ treatments.",
// //   },
// //   {
// //     question: "Are your hygiene and sterilization protocols certified?",
// //     answer:
// //       "Absolutely. We follow ISO-certified sterilization standards and maintain strict infection control to ensure your safety and peace of mind.",
// //   },
// // ];

// // const FAQItem = ({ question, answer, isOpen, onToggle }) => (
// //   <div className="border-b border-gray-200">
// //     <button
// //       onClick={onToggle}
// //       className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
// //     >
// //       {question}
// //       <ChevronDown
// //         className={`w-5 h-5 transition-transform duration-300 ${
// //           isOpen ? "rotate-180" : ""
// //         }`}
// //       />
// //     </button>
// //     {isOpen && (
// //       <p className="text-gray-600 text-sm pb-4 transition-all duration-300">
// //         {answer}
// //       </p>
// //     )}
// //   </div>
// // );

// // const FAQSection = () => {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggleFAQ = (index) =>
// //     setOpenIndex(index === openIndex ? null : index);

// //   return (
// //     <section className="bg-white py-24 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <h2 className="text-3xl sm:text-4xl font-bold text-themeLight text-center mb-12">
// //           Frequently Asked Questions
// //         </h2>

// //         <div className="space-y-4">
// //           {faqs.map((faq, index) => (
// //             <FAQItem
// //               key={index}
// //               question={faq.question}
// //               answer={faq.answer}
// //               isOpen={openIndex === index}
// //               onToggle={() => toggleFAQ(index)}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default FAQSection;

// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//   {
//     question: "Are dental implants painful?",
//     answer:
//       "The procedure is performed under local anesthesia, so there’s little to no pain during it. Post-surgery discomfort is minimal and manageable with medication, and most patients report feeling fine after a few days. We also offer sedation for extra comfort if needed.",
//   },
//   {
//     question: "How much do dental implants cost?",
//     answer:
//       "Implant costs vary based on your needs — like how many teeth, and whether bone grafting is required. After your consultation, we provide a transparent quote. We also offer 0% EMI options to make implants affordable for everyone.",
//   },
//   {
//     question: "How long do implants last?",
//     answer:
//       "With proper care, dental implants can last decades or even a lifetime. They are a long-term solution and far more durable than bridges or dentures. Regular checkups help ensure their longevity.",
//   },
//   {
//     question: "What if I’m not a candidate for implants?",
//     answer:
//       "Most people are suitable for implants. Even if your bone levels are low, procedures like bone grafting can help. Visit us for a scan and we’ll guide you to the best solution for your smile.",
//   },
//   {
//     question: "How soon can I return to normal after the implant?",
//     answer:
//       "Most patients resume daily activities within 1–2 days after the implant procedure. Eating and chewing normally is possible after the final crown placement, but we’ll guide you every step of the way during healing.",
//   },
// ];

// const FAQItem = ({ question, answer, isOpen, onToggle }) => (
//   <div className="border-b border-gray-200">
//     <button
//       onClick={onToggle}
//       className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 hover:text-themeLight transition-colors duration-200"
//     >
//       {question}
//       <ChevronDown
//         className={`w-5 h-5 text-themeLight transition-transform duration-300 ${
//           isOpen ? "rotate-180" : ""
//         }`}
//       />
//     </button>
//     <div
//       className={`overflow-hidden transition-all duration-300 ${
//         isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//       }`}
//     >
//       <p className="text-gray-600 text-sm pb-4 pr-4">{answer}</p>
//     </div>
//   </div>
// );

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => setOpenIndex(index === openIndex ? null : index);

//   return (
//     <section className="bg-white  px-6 mt-4 mb-6 ">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-themeLight text-center mb-4">
//         Frequently Asked Questions (FAQ)

//         </h2>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               question={faq.question}
//               answer={faq.answer}
//               isOpen={openIndex === index}
//               onToggle={() => toggleFAQ(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are dental veneers and how can they improve my smile?",
    answer:
      "Veneers are thin custom-made shells that cover the front of teeth to fix discoloration, chips, gaps, or misalignment. They can dramatically enhance the shape, color, and symmetry of your smile for a natural look.",
  },
  {
    question: "Does the veneers procedure hurt or damage my teeth?",
    answer:
      "No – the procedure is minimally invasive. We may gently etch the enamel surface, but it’s painless under local anesthesia. We preserve as much of your natural tooth as possible.",
  },
  {
    question: "How long do veneers last? Are they permanent?",
    answer:
      "Porcelain veneers are very durable – they can last 10-15 years or even longer with proper care. They’re considered a long-term cosmetic solution. While veneers may eventually need replacing, our high-quality materials ensure they’ll serve you well for many years.",
  },
  {
    question: "What is the cost of veneers and do you offer payment plans?",
    answer:
      "The cost varies depending on how many veneers and the materials. During your consult, we’ll provide a detailed quote. We do accept major cards, so you can comfortably manage payments. No surprises – all costs are discussed upfront.",
  },
  {
    question: "Will my veneers look fake or will they look natural?",
    answer:
      "We customize each veneer’s shape and shade to blend with your smile. Thanks to our digital design and experienced ceramists, your veneers will look extremely natural – most people won’t know you’ve had dental work, only that you have a great smile!",
  },
  {
    question: "How soon can I get my veneers? (What’s the timeline?)",
    answer:
      "It usually takes 2-3 visits from consultation to final veneers. We accommodate your schedule, and you’ll have temporary veneers in the meantime, so you’re never without teeth. If you have a deadline (wedding, etc.), let us know and we’ll do our best to expedite.",
  },
  {
    question:
      "Is Opus Dental taking precautions for COVID-19 / general hygiene?",
    answer:
      "Absolutely. We follow strict sterilization and hygiene protocols for every patient. Instruments are fully sterilized (autoclaved) and treatment rooms are sanitized after each visit. Your health and safety are our top priority.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-800 hover:text-themeLight transition-colors duration-200"
    >
      {question}
      <ChevronDown
        className={`w-5 h-5 text-themeLight transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-gray-600 text-sm pb-4 pr-4">{answer}</p>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(index === openIndex ? null : index);

  return (
    <section className="bg-white px-6 mt-4 mb-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-themeLight text-center mb-6">
          Frequently Asked Questions
        </h2>
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
