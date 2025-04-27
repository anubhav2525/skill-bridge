'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Cristopher Cardenas',
    role: 'Data Analyst',
    review:
      'Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate their attitude and approach.',
    stars: 5,
  },
  {
    name: 'Samantha Grey',
    role: 'UX Designer',
    review:
      'Very smooth and intuitive design. The team helped me deliver results faster. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Daniel Lee',
    role: 'Project Manager',
    review:
      'Loved working with this product! Professional team, responsive, and reliable.',
    stars: 4,
  },
];

const Reviews =()=> {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const { name, role, review, stars } = testimonials[index];

  return (
    <section className="bg-white py-16 md:py-28 lg:py-32 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        What our customer say
      </h2>

      <div className="flex justify-center mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="text-yellow-400 text-xl mx-0.5" fill='#facc15 '/>
        ))}
      </div>

      <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-6">
        {review}
      </p>

      <h4 className="text-lg font-bold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="flex justify-center mt-8 space-x-6">
        <button
          onClick={goToPrevious}
          className="text-gray-600 hover:text-black transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="text-gray-600 hover:text-black transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default Reviews;