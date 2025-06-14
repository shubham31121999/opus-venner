import React from "react";
import {
  UserCheck,
  Smile,
  ScanLine,
  HeartPulse,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "30+ Years Experience",
    desc: "Cosmetic dentistry expertise led by Dr. Burzin Khan.",
  },
  {
    icon: Smile,
    title: "1,000+ Smile Makeovers",
    desc: "Hundreds of real patient transformations.",
  },
  {
    icon: ScanLine,
    title: "Digital Smile Design",
    desc: "Preview your new smile before treatment.",
  },
  {
    icon: HeartPulse,
    title: "Painless & Comfortable",
    desc: "Gentle, stress-free veneer procedures.",
  },
  {
    icon: MapPin,
    title: "2 Mumbai Locations",
    desc: "Clinics in Bandra & Fort for your convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & Safe",
    desc: "ISO protocols & strict sterilization for your safety.",
  },
];

const KeyValue = () => (
  <section className="w-full px-4 sm:px-6 md:px-12 py-14">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-themeLight mb-8">
        Benefit Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="group flex items-start gap-4 bg-white border-2 border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-lg transition hover:scale-[1.03] hover:bg-themeLight hover:text-white"
          >
            <b.icon className="w-8 h-8 text-themeLight transition-colors duration-200 group-hover:text-white" />
            <div>
              <div className="font-semibold text-base mb-1">{b.title}</div>
              <div className="text-sm">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default KeyValue;
