import Wrapper from "../layout/wrapper.jsx";

const HeroSection = () => {
    return (
        <Wrapper>

            <div className="h-screen pt-48 flex flex-wrap items-center justify-center lg:justify-between      py-12 relative">
                {/* Left Content */}
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                        Welcome to
                        <span className="text-[#EBAD26]"> EduAgency</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Your trusted partner in delivering exceptional educational services tailored to your needs.
                    </p>
                    <button
                        className="mt-6 px-6 py-3 bg-[#2664eb] text-white rounded-lg shadow-lg  transition">
                        Get Started Today
                    </button>
                </div>


                {/* Right Content */}
                <div className="relative lg:w-1/2 flex justify-center items-center">
                    {/* Main Student Image */}
                    <div className="w-72 h-72 lg:w-[450px] lg:h-[570px]  overflow-hidden">
                        <img
                            src="/img/student1.png"
                            alt="Student"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* 3D Icons */}
                    <div className="absolute top-[-30px] right-[-1px] rotate-[25deg]">
                        <img
                            src="/img/chart.png"
                            alt="3D Icon 1"
                            className="w-12 h-12 lg:w-16 lg:h-16"
                        />
                    </div>
                    <div className="absolute bottom-[350px] left-[8px] rotate-[-15deg]">
                        <img
                            src="/img/book.png"
                            alt="3D Icon 2"
                            className="w-16 h-16 lg:w-20 lg:h-20"
                        />
                    </div>
                    <div className="absolute top-[50%] right-[50px] rotate-[45deg]">
                        <img
                            src="/img/pen.png"
                            alt="3D Icon 3"
                            className="w-10 h-10 lg:w-14 lg:h-14"
                        />
                    </div>

                    {/* Contact Box */}
                    <div className="absolute bottom-[20px] left-0 bg-white shadow-lg rounded-lg px-4 py-3">
                        <p className="text-sm text-gray-600">ONLINE SUPPORT</p>
                        <p className="text-lg font-bold text-red-500">+012 (345) 6789</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="w-full  bg-gray-100 py-10 rounded-xl">
                    <div
                        className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {/* Service Stats */}
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-green-600">150+</span>
                            <p className="mt-2 text-gray-700">Services Provided</p>
                        </div>
                        {/* Students Stats */}
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-blue-600">10,000+</span>
                            <p className="mt-2 text-gray-700">Students Enrolled</p>
                        </div>
                        {/* Partner Institutions */}
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-red-600">50+</span>
                            <p className="mt-2 text-gray-700">Partner Institutions</p>
                        </div>
                        {/* Support Team */}
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-yellow-600">24/7</span>
                            <p className="mt-2 text-gray-700">Support Available</p>
                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>

    );
};

export default HeroSection;
