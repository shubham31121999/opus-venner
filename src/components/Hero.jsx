import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import smiling from "../assets/smiling.webp"; // Make sure this path is correct
import  { useState } from "react";
const Hero = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(event, "event");

    const formData = {
      fullName: fullName,
      email: email,
      phone: phone,
      // timestamp: new Date().toISOString(), // Add a timestamp
    };

    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/22908877/uoyrvlo/",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: JSON.stringify(formData),
        }
      );

      console.log(response, "response");
       navigate("/thankyou");
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <section className="w-full bg-white bg-cover bg-center text-white relative">
      {/* Overlay for text readability */}
      <div className="absolute inset-0  z-0" />
      <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-center text-center md:text-left">
          {/* Hero Image */}
          
          <h1 className="text-3xl text-black md:text-5xl font-bold mb-4 leading-tight">
           Transform Your Smile with the Best Dental Veneers in Bandra & Fort
          </h1>
          <p className="text-lg text-darkGray mb-6">
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
         <div className="w-full md:w-1/2" >
         <h3 className="text-xl md:text-5xl font-bold mb-4 leading-tight text-center">Relief Starts Today - Book Now</h3>
                       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-green w-full">
            <div>
              <label className="block text-sm text-darkGray font-medium"> Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-darkGray font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 mt-1"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm text-darkGray font-medium">Phone</label>
              <input
                type="tel"
                className="mb-3 w-full border border-gray-300 px-4 py-2 rounded text-darkGray focus:outline-none focus:ring-2 focus:ring-themeGreen"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-10/12  bg-themeLight text-darkGray py-3 rounded font-semibold border-2 border-darkGray hover:bg-darkGray hover:text-white transition"
              >
                Book Appointment Now
              </button>
            </div>
          </form>

  

  

          </div>
      </div>
    </section>
  );
};

export default Hero;
