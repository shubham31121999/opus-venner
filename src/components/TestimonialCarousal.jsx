import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    img: "https://codingyaar.com/wp-content/uploads/headshot-1-scaled.jpg",
    name: "Ashoo Samant",
    text: "Opus Dental specialities has been my constant in terms of dental related issues of mine but this time I walked in for a cosmetic transformation. After feeling not so confident about my bad set of teeth I planned to undergo treatment at Opus and it was indeed a quick, planned and painless procedure. Huge shoutout to Dr. Burzin and his team of doctors for the great work they put in.",
    stars: 5,
  },
  {
    img: "https://codingyaar.com/wp-content/uploads/headshot-2-scaled.jpg",
    name: "Irfan Wani",
    text: "Dr. Neha with experience and patience gave the perfect look & smile to my mother. Dr. Burzin Khan, Dr. Neha along with the rest of Doctors & the staff makes OPUS Dental Specialities the best Dental Solution not only in Mumbai but the whole of India.",
    stars: 4,
  },
  {
    img: "https://codingyaar.com/wp-content/uploads/headshot-3-scaled.jpg",
    name: "Hilu Damjiwala",
    text: "After spending years being scared of the dentist's chair I had to see a dentist due to an issue that arose in my teeth. Super grateful that I decided to come to Opus Dental Specialities for my treatment as the entire process was indeed taken good care of by Dr. Burzin and his talented team. Absolutely love how my smile looks right now all thanks to Opus Dental Specialities.",
    stars: 5,
  },
  // Add more testimonials if needed
];

const StarRating = ({ count }) => {
  return (
    <div className="flex mb-2">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.683a1 1 0 00.95.69h3.882c.969 0 1.371 1.24.588 1.81l-3.14 2.28a1 1 0 00-.364 1.118l1.2 3.683c.3.921-.755 1.688-1.538 1.118l-3.14-2.28a1 1 0 00-1.175 0l-3.14 2.28c-.783.57-1.838-.197-1.538-1.118l1.2-3.683a1 1 0 00-.364-1.118L2.43 9.11c-.783-.57-.38-1.81.588-1.81h3.882a1 1 0 00.95-.69l1.2-3.683z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialCarousel() {
  return (
    <div className="bg-darkGray py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <i className="bi bi-quote text-4xl mb-2 inline-block"></i>
          <h2 className="text-3xl font-bold">What our customers say</h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white text-black rounded-lg shadow-md overflow-hidden">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-1">
                    {testimonial.name}
                  </h5>
                  <StarRating count={testimonial.stars} />
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
