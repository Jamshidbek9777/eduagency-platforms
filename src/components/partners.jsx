import React from "react";

const partners = [
  "/img/partner1.svg",
  "/img/partner2.svg",
  "/img/partner3.png",
  "/img/partner4.svg",
  "/img/partner5.png",
  "/img/partner6.webp",
  "/img/partner7.svg",
  "/img/partner8.png",
  "/img/partner9.png",
];

const Partners = () => {
  return (
    <div className="py-10 overflow-hidden relative">
      <h2 className="text-blue-500 text-3xl font-bold text-center mb-6">
        Hamkorlarimiz
      </h2>

      <div className="flex items-center justify-center w-full">
        <div className="w-full overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-scroll">
            {[...partners, ...partners].map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-6">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-32 h-20 object-contain transition-transform duration-300 hover:scale-110"
                  style={{
                    filter: "drop-shadow(0px 0px 12px rgba(0, 162, 255, 0.8))",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Partners;
