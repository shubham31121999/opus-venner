import React from "react";
import { CalendarCheck, Monitor, Hammer, Sparkles, Smile } from "lucide-react";

const steps = [
  {
    title: "Personalized Consultation",
    description:
      "We discuss your smile goals, examine your teeth, and use digital scans to design your perfect veneers.",
    icon: <CalendarCheck className="w-8 h-8 text-themeLight" />,
    duration: "Visit 1",
  },
  {
    title: "Smile Design Preview",
    description:
      "See a mock-up of your future smile before we begin – you get to approve how it will look!",
    icon: <Monitor className="w-8 h-8 text-themeLight" />,
    duration: "Preview Day",
  },
  {
    title: "Precision Preparation",
    description:
      "We gently prepare your teeth (minimal shaping) and place temporary veneers so you’re never without a smile.",
    icon: <Hammer className="w-8 h-8 text-themeLight" />,
    duration: "Visit 2",
  },
  {
    title: "Custom Veneer Fabrication",
    description:
      "Our lab artisans craft your veneers from high-quality porcelain to match your desired shape and shade.",
    icon: <Sparkles className="w-8 h-8 text-themeLight" />,
    duration: "Lab Work",
  },
  {
    title: "Final Placement & Follow-up",
    description:
      "We bond the veneers securely and do final adjustments. Walk out with a brand new smile! We’ll check in to ensure you’re thrilled with the result.",
    icon: <Smile className="w-8 h-8 text-themeLight" />,
    duration: "Final Visit",
  },
];

const VeneerJourney = () => (
  <section className="bg-white px-4 sm:px-6 md:px-12 py-16">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-12">
        Our Veneers Process in 5 Easy Steps
        <br />
        <span className="text-themeLight">What to Expect</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-black rounded-lg shadow-sm p-6 flex flex-col items-center text-center transition-transform duration-300  hover:shadow-xl hover:border-themeLight"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-bold text-themeLight mb-2">
              {step.title}
            </h3>
            <p className="text-base text-gray-600 mb-3">{step.description}</p>
            <span className="text-xs text-themeLight font-semibold bg-themeLight/10 px-3 py-1 rounded-full">
              {step.duration}
            </span>
          </div>
        ))}
      </div>
      <div className="text-gray-600 text-xl mt-6 mb-4">
        <span className="font-semibold">P.S.</span> It’s a comfortable procedure
        – our patients often watch Netflix during treatment!
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="bg-themeLight  text-black px-6 py-3 rounded font-semibold border-2 border-black hover:bg-themeLight hover:text-themeLight "
        >
          Ready to start your journey? Book your consultation now
        </button>
      </div>
    </div>
  </section>
);

export default VeneerJourney;
