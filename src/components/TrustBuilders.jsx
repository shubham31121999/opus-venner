import React from "react";
import DrBurzinKhan from "../assets/DrBurzinKhan.webp";

const DoctorProfile = () => {
  const scrollToAppointment = () => {
    const formEl = document.getElementById("appointment-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-darkGray text-white px-6 py-0 sm:py-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-0 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center my-5 lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Meet Your <span className="text-themeLight">Cosmetic</span> Dentist
          </h2>

          <div className="text-left">
            <h3 className="text-2xl font-semibold ">Dr. Burzin Khan, MDS</h3>
            <p className="text-themeLight font-semibold">
              Cosmetic Dentistry Expert
            </p>
          </div>

          <ul className="space-y-3 text-left text-gray-200 max-w-md mx-auto lg:mx-0 list-none">
  {[
    "Over 30 years of experience transforming smiles",
    "Pioneer of digital smile design in India",
    "Member of Indian Dental Association",
    "Passionate about giving patients confidence in their smiles",
  ].map((item, index) => (
    <li key={index} className="relative pl-6 text-base leading-relaxed">
      <span className="absolute left-0 top-1 text-themeLight">•</span>
      <span className="inline-block">{item}</span>
    </li>
  ))}
</ul>


          <button
            onClick={scrollToAppointment}
            className="bg-themeLight text-black border-2 border-white font-bold py-3 px-6 rounded mt-4 hover:bg-white hover:text-black transition"
          >
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Doctor Image with background and quote */}
        <div className="flex-1 relative flex justify-center items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none mx-auto">
          {/* Background box centered behind image */}
          <div className="absolute z-0 w-[60%] h-[60%] bg-themeLight rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Doctor Image */}
          <img
            src={DrBurzinKhan}
            alt="Dr. Burzin Khan smiling confidently"
            className="relative z-10 w-4/5 sm:w-3/4 md:w-2/3 object-contain"
          />

          {/* Quote Bubble */}
          <div className="absolute bottom-2 left-4 sm:left-6 lg:left-[-30px] bg-white text-black text-sm p-4 rounded-xl shadow-md z-20 w-[40%] sm:w-[60%] lg:w-64 max-w-xs mb-4">
  <p className="font-medium text-xs sm:text-base">
    “I believe every patient deserves a smile they love. My goal is to
    provide veneers that look natural and help you smile confidently,
    in a stress-free experience.”
  </p>
</div>


        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
