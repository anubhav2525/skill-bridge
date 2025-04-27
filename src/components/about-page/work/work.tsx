import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <section className="text-center py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-900">We work with</h2>
      <p className="text-gray-600 mt-2">
        Quisque aliquet, libero consequat elementum convallis.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {["dropbox", "facebook", "google", "heroku", "lenovo", "microsoft"].map(
          (logo) => (
            <div key={logo}>
              <Image
                src={`/logos/${logo}.png`}
                alt={logo}
                width={100}
                height={50}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Work;
