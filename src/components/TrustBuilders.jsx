import React from "react";
import doctorPhoto from "../assets/DrBurzinKhan.webp";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";

const credentials = [
  "Over 30 years of experience transforming smiles",
  "Former Professor at XYZ Dental College",
  "Fellow, International Academy of Cosmetic Dentistry",
  "Pioneer of digital smile design in India",
];

const logos = [
  { src: logo1, alt: "IDA" },
  { src: logo2, alt: "ISO Certified" },
  { src: logo3, alt: "Award" },
];

const TrustBuilders = () => (
  <section className="w-full bg-[#222222] py-14 px-4 sm:px-6 md:px-12">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left: Photo, Name, Quote */}
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <img
          src={doctorPhoto}
          alt="Dr. Burzin Khan, Cosmetic Dentist"
          className="w-64 h-64 object-cover bg-themeLight rounded-full shadow-lg border-4 border-white mb-4"
          loading="lazy"
        />
        <div className="text-2xl font-semibold text-themeLight mb-1 text-center md:text-left">
          Dr. Burzin Khan, MDS
        </div>
        <div className="text-white font-medium mb-3 text-center md:text-left">
          Cosmetic Dentistry Expert
        </div>
        <blockquote className="border-l-4 border-themeLight pl-4 text-gray-100 text-base font-medium max-w-xs md:max-w-none mx-auto md:mx-0 mt-3">
          “I believe every patient deserves a smile they love. My goal is to
          provide veneers that look natural and help you smile confidently, in a
          stress-free experience.”
        </blockquote>
      </div>
      {/* Right: Credentials (bulleted), Logos */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <ul className="list-disc list-inside text-gray-100 space-y-3 mb-6 w-full">
          {credentials.map((item) => (
            <li key={item} className="text-base font-medium">
              {item}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6 bg-themeLight rounded-xl px-6 py-4 w-full">
            {logos.map((logo, idx) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${0.2 + idx * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              />
            ))}
          </div>
        </div>
        <div className="italic text-gray-400 mb-3">
          Passionate about giving patients confidence in their smiles.
        </div>
      </div>
    </div>
  </section>
);

export default TrustBuilders;
