import React from "react";

const Map = () => {
  return (
    <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-16 md:py-28 lg:py-32 px-4">
      {/* Left Section */}
      <div className="space-y-8">
        <h2 className="text-4xl font-bold">Get in touch</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl">📧</div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600 dark:text-gray-400">
                hello@example.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">📞</div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600 dark:text-gray-400">(907) 555-0101</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">📍</div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600 dark:text-gray-400">
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24314.296425321336!2d-96.73972245359749!3d32.94833309573925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2048f69e1c3d%3A0xadd5e3c8f1b7ecb2!2sRichardson%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1681888417205!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
