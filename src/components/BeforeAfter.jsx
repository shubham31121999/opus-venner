import React, { useState } from "react";
import BeforeAfterImg from "../assets/Before1.webp"; // merged before-after image 1
import BeforeAfterImg2 from "../assets/Before2.webp"; // merged before-after image 2

const cases = [
  {
    image: BeforeAfterImg,
    caption:
      "Rohit: Closed the gap in his front teeth and brightened his smile with veneers. “I can’t stop smiling now!”",
    name: "Rohit",
    rating: 5,
  },
  {
    image: BeforeAfterImg2,
    caption:
      "Rita: Transformed her smile with 8 veneers. “I finally love my smile!”",
    name: "Rita",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center justify-center mt-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ))}
  </div>
);

const Avatar = ({ name }) => (
  <div className="w-10 h-10 rounded-full bg-themeLight flex items-center justify-center text-white font-bold text-lg shadow mr-2 overflow-hidden select-none">
    {name && name.trim().charAt(0).toUpperCase()}
  </div>
);

const BeforeAfter = () => {
  // For mobile swipe: track which image is shown
  const [current, setCurrent] = useState(0);

  // Handle swipe/arrow for mobile
  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === cases.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 bg-darkGray">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-2 text-center">
          Smile Transformations
        </h2>
        <p className="text-themeLight text-lg mb-10 text-center">
          Real patients, real results – see the difference veneers can make.
        </p>
        {/* Mobile: swipe/arrow navigation */}
        <div className="w-full flex sm:hidden flex-col items-center relative">
          <div className="relative w-full flex justify-center">
            <img
              src={cases[current].image}
              alt="Before and After veneers"
              className="w-full max-w-2xl rounded-xl border-4 border-white shadow-lg"
            />
            {/* Overlay labels */}
            
            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow text-themeLight"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow text-themeLight"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
          <div className="flex items-center justify-center mt-6 w-full">
            <div className="flex items-center bg-white rounded-xl shadow px-4 py-3 w-full max-w-lg">
              <div className="w-1/6 flex-shrink-0 flex justify-center">
                <Avatar name={cases[current].name} />
              </div>
              <div className="w-5/6 flex-1 pl-3">
                <p className="text-lg text-darkGray italic text-left max-w-xl">
                  {cases[current].caption}
                </p>
              </div>
            </div>
          </div>
          <StarRating rating={cases[current].rating} />
          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {cases.map((_, idx) => (
              <span
                key={idx}
                className={`inline-block w-3 h-3 rounded-full ${
                  idx === current ? "bg-themeLight" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Desktop: show both images side by side */}
        <div className="hidden sm:flex flex-row gap-10 w-full justify-center">
          {cases.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center w-1/2">
              <div className="relative w-full flex justify-center">
                <img
                  src={c.image}
                  alt="Before and After veneers"
                  className="w-full max-w-2xl rounded-xl border-4 border-white shadow-lg"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-black font-bold px-4 py-1 rounded shadow">
                  BEFORE
                </span>
                <span className="absolute bottom-4 right-4 bg-white/90 text-black font-bold px-4 py-1 rounded shadow">
                  AFTER
                </span>
              </div>
              <div className="flex items-center justify-center mt-6 w-full">
                <div className="flex items-center bg-white rounded-xl shadow px-4 py-3 w-full max-w-lg">
                  <div className="w-1/6 flex-shrink-0 flex justify-center">
                    <Avatar name={c.name} />
                  </div>
                  <div className="w-5/6 flex-1 pl-3">
                    <p className="text-lg text-darkGray italic text-left max-w-xl">
                      {c.caption}
                    </p>
                  </div>
                </div>
              </div>
              <StarRating rating={c.rating} />
            </div>
          ))}
        </div>
        {/* Aggregate Stats */}
        <div className="text-xl font-semibold text-themeLight mt-8 mb-2 text-center">
          Over 500 veneers done with a 99% patient satisfaction rate
        </div>
        <div className="text-themeLight mb-8 text-center">
          Hundreds of smiles transformed since 1995.
        </div>
        {/* CTA */}
        <div className="text-white text-center">
          Imagine what we can do for your smile!
          <span className=" ml-4">
            <a
              href="#appointment-form"
              className="inline-block bg-themeLight text-black border-2 border-black font-semibold px-8 py-3 rounded-lg shadow hover:bg-themeLight/90 transition hover:bg-white  hover:text-themeLight "
            >
              {" "}
              Book a Consultation
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;