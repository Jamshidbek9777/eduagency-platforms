import {getText} from "../languages/index.js";
import {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";

const AcademicTourPage = () => {
    const academicTours = [
        {
            title: getText('akademikTur1'),
            description: getText('akademikTur2'),
            image: "/img/akademikcard1.jpg",
        },
        {
            title: getText('akademikTur3'),
            description:getText('akademikTur4'),
            image: "/img/akademikcard2.jpg",
        },
        {
            title: getText('akademikTur5'),
            description: getText('akademikTur6'),
            image: "/img/akademikcard3.jpg",
        },
    ];
    const { selectedLanguage, selectedFlag, changeLanguage } =
        useContext(LanguageContext);

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">{getText('akademikTur7')}</h2>
                <p className="text-gray-600 mb-10">{getText('akademikTur8')}</p>
            </div>

            {/* Tour Sections */}
            <div className="space-y-16 max-w-7xl mx-auto">
                {academicTours.map((tour, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                    >
                        <img
                            src={tour.image}
                            alt={tour.title}
                            className="w-full md:w-1/2 rounded-lg shadow-lg"
                        />
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{tour.title}</h3>
                            <p className="text-gray-600 text-lg">{tour.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional Info Section */}
            <div className="max-w-7xl mx-auto text-center mt-16">
                <h4 className="text-2xl font-semibold text-blue-600 mt-10">{getText('akademikTur8')}</h4>
                <p className="text-gray-600 mb-6">
                    {getText('akademikTur9')}
                </p>
            </div>
        </div>
    );
};

export default AcademicTourPage;
