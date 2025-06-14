import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import smiling from "../assets/smiling.webp"; // Make sure this path is correct

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[url('/images/hero.png')] bg-cover bg-center text-white relative">
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center text-center md:text-left">
          {/* Hero Image */}
          <img
            src={smiling}
            alt="Smiling patient with veneers"
            className="w-60 h-60 object-cover rounded-full mb-4 shadow-lg border-4 border-white md:mb-6"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Transform Your Smile with Porcelain Veneers in Bandra & Fort
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Led by 30+ years of expertise, Opus Dental delivers natural-looking
            veneers with personalized care in Mumbai.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-6">
            <div className="flex items-center gap-2 text-themeLight font-medium">
              <Star className="w-5 h-5" />
              Rated 4.9★ by 1000+ patients
            </div>
            <div className="flex items-center gap-2 text-themeLight font-medium">
              <ShieldCheck className="w-5 h-5" />
              Certified Implant Center
            </div>
          </div>
        </div>
        {/* Right Content - Form */}
        <div id="appointment-form" className="w-full md:w-1/2">
          <form className="bg-white p-6 rounded shadow-md w-full">
            <label
              htmlFor="fname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="fname"
              type="text"
              placeholder="Enter your full name"
              className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeLight"
            />
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mb-3 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeLight"
            />
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="mb-4 w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-themeLight"
            />
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-themeLight text-black px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition border-2 border-black w-full"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/thank-you");
                }}
              >
                Book Appointment Now!
              </button>
              {/* Secondary CTA: Click-to-Call */}
              <a
                href="tel:+912212345678"
                className="w-full text-center bg-white text-themeLight border-2 border-themeLight py-2 rounded font-semibold hover:bg-themeLight hover:border-2 hover:border-black hover:text-black transition"
              >
                📞 Call Now
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
