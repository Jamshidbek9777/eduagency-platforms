import { FaChalkboardTeacher, FaFlask } from "react-icons/fa";
import { getText } from "../languages/index.js";
import { useContext } from "react";
import { LanguageContext } from "../context/language.jsx";

const OkulMimari = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const services = [
    {
      title: getText("okul5"),
      description: [getText("okul6")],
      icon: <FaChalkboardTeacher className="text-6xl text-red-600" />,
      image: "/img/okulcard2.webp", // Example image
      gradient: "from-green-400 to-teal-500",
    },
    {
      title: getText("okul7"),
      description: [getText("okul8")],
      icon: <FaFlask className="text-6xl text-blue-700" />,
      image: "/img/okulcard3.jpg", // Example image
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans pt-48 rounded-xl">
      {/* Header Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-96 rounded-xl mb-10"
        style={{ backgroundImage: 'url("/img/okulbg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center px-6">
            {getText("okul1")}
          </h1>
        </div>
      </div>

      {/* Intro Text */}
      <p className="text-lg text-gray-600 text-center mb-12">
        {getText("okul2")}
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-r ${service.gradient} p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl`}
          >
            {/* Service Image with Darker Gradient Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black transparent to-transparent rounded-xl"></div>
            </div>

            {/* Service Icon */}
            <div className="absolute -top-10 left-6 z-10">{service.icon}</div>

            <div className="relative z-20 mt-16">
              <h2 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h2>
              <ul className="text-gray-100 space-y-2">
                {service.description.map((desc, idx) => (
                  <li key={idx} className="text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OkulMimari;
