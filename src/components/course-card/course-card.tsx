import React from "react";
import Image from "next/image";
import { Clock, Signal, Star } from "lucide-react";

const CourseCard = ({
  category,
  title,
  price,
  originalPrice,
  discountedPrice,
  rating,
  reviewCount,
  studentCount,
  instructor,
  duration,
  level,
  imageUrl,
  description,
}: any) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full object-cover"
        height={500}
        width={400}
      />
      <div className="p-4">
        <div className="flex items-end justify-between mb-2">
          <span className="text-xs lg:text-sm font-semibold text-amber-700 uppercase">{category}</span>
          {originalPrice && (
            <span className="text-gray-400 text-base font-semibold">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-semibold">
            ${price ? price.toFixed(2) : discountedPrice.toFixed(2)}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-base font-medium text-gray-800 mb-2">
          {description}
        </p>
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 mr-1" fill="yellow" />
          <span className="text-sm text-gray-700">{rating}</span>
          <span className="text-sm text-gray-400 ml-1">
            ({reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
            <Image
              height={50}
              width={50}
              src={imageUrl}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <span className="text-base text-gray-600">{instructor}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center">
            {/* You might use a clock icon here */}
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Signal
              className={`w-4 h-4 mr-1 ${
                level === "Beginner"
                  ? "text-green-500"
                  : level === "Intermediate"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            />
            <span>{level}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
