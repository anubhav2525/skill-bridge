import React from "react";

const Values = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Core values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Customer satisfaction", icon: "👍" },
            { title: "Transparency", icon: "📋" },
            { title: "Reputation", icon: "⭐" },
            { title: "Cooperation", icon: "🤝" },
          ].map((item) => (
            <div key={item.title} className="text-center space-y-4">
              <div className="text-5xl">{item.icon}</div>
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 text-sm">
                Aenean urna dictum adipiscing nec, cras quisque.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
