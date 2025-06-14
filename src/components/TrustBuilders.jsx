import React, { useRef, useEffect, useState } from "react";
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

const TrustBuilders = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Helper for animation classes
  const anim = (delay) =>
    `opacity-0 ${inView ? "animate-fadeInUp" : ""}` +
    (inView ? "" : "") +
    (inView ? "" : "");

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 sm:px-6 md:px-12 bg-themeLight"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Row 1 */}
        <div
          className={`flex flex-col items-center justify-center md:items-center rounded-xl shadow p-6 ${anim(
            ""
          )}`}
          style={{
            animationDelay: inView ? "0.1s" : undefined,
            animationFillMode: "forwards",
          }}
        >
          <img
            src={doctorPhoto}
            alt="Dr. Burzin Khan, Cosmetic Dentist"
            className="w-72 h-72 object-cover bg-themeLight rounded-full shadow-xl border-4 border-white"
            loading="lazy"
          />
        </div>
        <div
          className={`flex flex-col items-center md:items-start justify-center bg-white rounded-xl shadow p-6 ${anim(
            ""
          )}`}
          style={{
            animationDelay: inView ? "0.3s" : undefined,
            animationFillMode: "forwards",
          }}
        >
          <div className="text-3xl font-semibold text-themeLight mb-1">
            Dr. Burzin Khan, MDS
          </div>
          <div className="text-gray-700 font-medium mb-3">
            Cosmetic Dentistry Expert
          </div>
          <div className="italic text-gray-500 mb-3">
            Passionate about giving patients confidence in their smiles.
          </div>
          <blockquote className="border-l-4 border-themeLight pl-4 text-black text-lg font-medium max-w-xl mt-3 mb-0">
            “I believe every patient deserves a smile they love. My goal is to
            provide veneers that look natural and help you smile confidently, in
            a stress-free experience.”
          </blockquote>
        </div>
        {/* Row 2 */}
        <div
          className={`flex flex-col items-center md:items-start justify-center bg-white rounded-xl shadow p-6 ${anim(
            ""
          )}`}
          style={{
            animationDelay: inView ? "0.5s" : undefined,
            animationFillMode: "forwards",
          }}
        >
          <ul className="list-disc list-inside text-black space-y-2 w-full pl-2">
            {credentials.map((item) => (
              <li key={item} className="text-lg font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`flex flex-row flex-wrap justify-center items-center gap-6 bg-white rounded-xl shadow p-6 ${anim(
            ""
          )}`}
          style={{
            animationDelay: inView ? "0.7s" : undefined,
            animationFillMode: "forwards",
          }}
        >
          {logos.map((logo, idx) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`h-16 w-auto sm:h-20 ${anim("")}`}
              style={{
                animationDelay: inView ? `${0.9 + idx * 0.2}s` : undefined,
                animationFillMode: "forwards",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBuilders;
