import React from "react";

const benefitsData = [
  {
    icon: "🌟",
    title: "User-Friendly Interface",
    description: "Navigate effortlessly with our intuitive design.",
  },
  {
    icon: "💼",
    title: "Wide Range of Job Listings",
    description:
      "Explore opportunities across various industries and locations.",
  },
  {
    icon: "🔍",
    title: "Advanced Search Options",
    description:
      "Find the perfect job with our powerful search and filter tools.",
  },
  {
    icon: "✔️",
    title: "Verified Employers",
    description: "Trust that all job postings are authentic and high-quality.",
  },

  {
    icon: "📱",
    title: "Mobile Accessibility",
    description: "Job search on the go with our mobile app.",
  },

  {
    icon: "🛠️",
    title: "Customer Support",
    description: "Get help when you need it with our dedicated support team.",
  },
  {
    icon: "🔗",
    title: "Networking Opportunities",
    description: "Connect with potential employers and industry professionals.",
  },

  {
    icon: "🔒",
    title: "Security and Privacy",
    description: "Your data is safe with our advanced security measures.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="w-full my-2 mt-4 text-5xl font-bold leading-tight text-center text-gray-800">
        Why Choose Our Platform ?
      </h2>
      <div className="w-full mt-2">
        <div className="h-1 mx-auto gradient w-64 mb-10 opacity-65 my-0 py-0 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl  transition-transform transform  border-gray-700 "
          >
            <div className="text-3xl mb-4">{benefit.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
