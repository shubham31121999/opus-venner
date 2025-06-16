
import { Star } from "lucide-react";
import { useState } from "react";
import Before1 from "../assets/Before1.webp";
import Before2 from "../assets/Before2.webp";

const testimonials = [
  {
    name: "Asha R.",
    location: "Bandra",
    treatment: "Dental Implants",
    content:
      "I was nervous about implants, but Dr. Khan and his team made it so easy and painless. Now I can chew and smile confidently again!",
    rating: 5,
    image: "/patients/asha.jpg",
  },
  {
    name: "Rahul M.",
    location: "Fort",
    treatment: "Implants",
    content:
      "Got my implants done here and I’m beyond satisfied. The precision, tech, and friendly care made the experience amazing.",
    rating: 5,
    image: "/patients/rahul.jpg",
  },
  {
    name: "Sneha T.",
    location: "Mumbai",
    treatment: "Root Canal",
    content:
      "Booked an emergency appointment for a root canal. They handled everything so smoothly. Clean, modern and truly professional!",
    rating: 5,
    image: "/patients/sneha.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md mx-auto text-left flex flex-col items-start">
    <div className="flex items-center gap-4 mb-4">
      {/* <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover"
      /> */}
      <div>
        <h4 className="text-md font-semibold text-themeGreen">
          {testimonial.name}
        </h4>
        <p className="text-xs text-gray-500">
          {testimonial.location} • {testimonial.treatment}
        </p>
      </div>
    </div>

    <p className="text-gray-700 italic mb-4">“{testimonial.content}”</p>

    <div className="flex items-center gap-1 text-yellow-500 mt-auto">
      {Array.from({ length: testimonial.rating }).map((_, idx) => (
        <Star key={idx} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white pt-7 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Emotional Hook */}
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-themeGreen mb-4">
          Real Stories, Real Smiles
        </h2>
        <p className="text-gray-600 mb-10 text-base md:text-lg">
          Rated <span className="font-semibold text-yellow-500">4.9/5 ★</span> on Google Reviews – from 500+ smiles transformed.
        </p> */}

        {/* Testimonials Grid - Desktop */}
        {/* <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard testimonial={t} key={i} />
          ))}
        </div> */}

        {/* Carousel - Mobile */}
        <div className="sm:hidden">
          <TestimonialCard testimonial={testimonials[current]} />
          <div className="flex justify-center mt-6 gap-6">
            <button
              className="text-themeGreen font-bold text-2xl"
              onClick={prevSlide}
            >
              ‹
            </button>
            <button
              className="text-themeGreen font-bold text-2xl"
              onClick={nextSlide}
            >
              ›
            </button>
          </div>
        </div>

        {/* Case Spotlight */}
        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Before & After <br/> 
            <h5 className=" text-xl">Rohit’s <span className="text-themeLight">Smile Restored</span> with Implants</h5>
          </h3>
          <div className="flex flex-row gap-4 justify-center">
  <img
    src={Before1}
    alt="Before implants"
    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded border"
  />
  <img
    src={Before2}
    alt="After implants"
    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded border"
  />
</div>

          <p className="text-sm text-gray-600 mt-2">
            Real transformation. Real confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

