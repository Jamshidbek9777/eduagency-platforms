import React, { useState } from "react";
import Wrapper from "../layout/wrapper";
import {
  FaVideo,
  FaBullhorn,
  FaNewspaper,
  FaCalendarAlt,
  FaCamera,
  FaChild,
  FaUtensils,
  FaBed,
  FaListUl,
  FaPills,
  FaThermometerHalf,
  FaCheckSquare,
  FaRulerVertical,
  FaFlag,
  FaSmile,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaTrophy,
  FaCloud,
  FaServer,
  FaLock,
  FaSyncAlt,
  FaGlobe,
  FaRocket,
  FaMobileAlt,
  FaUsers,
  FaPlayCircle,
  FaShieldAlt,
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBrain,
  FaClipboardCheck,
  FaAward,
  FaPuzzlePiece,
  FaCalendarCheck,
  FaChartLine,
  FaApple,
  FaGooglePlay,
  FaStar,
  FaGamepad,
  FaFlask,
} from "react-icons/fa";

const MentalUp = () => {
  const features = [
    {
      icon: <FaBookOpen size={40} className="text-pink-500" />,
      title: "Fun Learning Games",
    },
    {
      icon: <FaBrain size={40} className="text-blue-500" />,
      title: "Attention & Memory Exercises",
    },
    {
      icon: <FaPuzzlePiece size={40} className="text-purple-700" />,
      title: "Brain Games & Exercises",
    },
    {
      icon: <FaCalendarCheck size={40} className="text-teal-500" />,
      title: "Fun Events & Challenges",
    },
    {
      icon: <FaChartLine size={40} className="text-orange-500" />,
      title: "Advanced Performance Tracking",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          <span className="text-orange-500">Everything You Want</span> on{" "}
          <span className="text-purple-700">MentalUP!</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Gamified exercises to develop cognitive skills for ages 4 to 13 — and
          even adults — all in one app, complete with performance reports
          showing strengths and areas for improvement!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white shadow-lg rounded-full flex items-center justify-center p-4">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.mentalup.co/"
          className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Try MentalUP Now!
        </a>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold">
            Discover Their <span className="text-purple-700">True</span>{" "}
            <span className="text-orange-500">Potential</span>
          </h2>
          <p className="text-gray-600 mt-4">
            MentalUP is the smartest way to unlock your kids' brains and
            physical power!
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="text-purple-700 mr-2">•</span> Memory games to
              improve learning abilities
            </li>
            <li className="flex items-center">
              <span className="text-purple-700 mr-2">•</span> Attention
              exercises to support focus and concentration
            </li>
            <li className="flex items-center">
              <span className="text-purple-700 mr-2">•</span> Visual
              intelligence games that inspire and{" "}
              <span className="text-purple-700 font-semibold">boost</span>{" "}
              creative thinking
            </li>
          </ul>
        </div>
        <div>
          <img
            src="/img/mup1.jpg"
            alt="Kid using MentalUP"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="/img/mup2.jpg"
            alt="Child engaged in activities"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold">
            <span className="text-purple-700">Supercharge</span> Their Mind and
            Body
          </h2>
          <p className="text-gray-600 mt-4">
            MentalUP makes improving your kids' minds and bodies more fun than
            ever with hundreds of games and workouts!
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="text-purple-700 mr-2">•</span> Motivational and
              personalized brain exercises
            </li>
            <li className="flex items-center">
              <span className="text-purple-700 mr-2">•</span> Fun intelligence
              and brain games that strengthen the mind
            </li>
            <li className="flex items-center">
              <span className="text-purple-700 mr-2">•</span> The special
              formula for creating a habit of daily exercise and training
            </li>
          </ul>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            Try Today
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Stats & Download */}
        <div>
          <h2 className="text-3xl font-bold">
            Kids <span className="text-orange-500">Love</span>, Parents{" "}
            <span className="text-purple-700">Trust</span>
          </h2>
          <p className="text-gray-600 mt-4">
            <strong>Millions of users</strong> around the world enjoy playing
            MentalUP.
          </p>
          <div className="flex gap-6 mt-6">
            {/* Users Stat */}
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-600 text-4xl" />
              <div>
                <h3 className="text-2xl font-bold text-purple-700">
                  20+ Million
                </h3>
                <p className="text-gray-600 text-sm">Users</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaStar className="text-yellow-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-bold text-purple-700">4.8/5</h3>
                <p className="text-gray-600 text-sm">300K+ Reviews</p>
              </div>
            </div>
          </div>
          {/* Download Button */}
          <div className="mt-8">
            <a
              href="#"
              className="flex items-center gap-3 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 w-fit"
            >
              <FaApple />
              <FaGooglePlay />
              Download Now
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              letter: "B",
              review:
                "Thanks to MentalUP, my kid is learning and having fun at the same time! With hundreds of brain teasers and puzzles, he is improving his attention and memory skills every day.",
              name: "BRANDON A.",
            },
            {
              letter: "C",
              review:
                "This app is amazing! From math to logic, there are fun games for all ages. We enjoy playing as a family and improving our skills together. I highly recommend it!",
              name: "CLAIRE N.",
            },
            {
              letter: "V",
              review:
                "Playing MentalUP has become a daily routine for my family. My kids are improving their cognitive skills every day with safe, no-ads games. I’m really grateful for an app that makes learning so entertaining.",
              name: "VANESSA D.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
            >
              <div className="p-2 px-4 flex items-center justify-center text-white font-bold text-xl rounded-full bg-purple-600">
                {review.letter}
              </div>
              <div>
                <p className="text-gray-600 mb-2">{review.review}</p>
                <p className="font-semibold text-gray-800">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Future = () => {
  const features = [
    {
      icon: <FaGamepad size={40} className="text-blue-500" />,
      title: "Interactive Space Missions",
      description:
        "Engage in thrilling missions that simulate real-life space exploration scenarios.",
    },
    {
      icon: <FaFlask size={40} className="text-green-500" />,
      title: "Science Experiments",
      description:
        "Conduct experiments that explain the wonders of space and science in a fun way.",
    },
    {
      icon: <FaPuzzlePiece size={40} className="text-purple-500" />,
      title: "Educational Mini-Games",
      description:
        "Enjoy mini-games that enhance learning about planets, stars, and the universe.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Embark on a Space Adventure with{" "}
          <span className="text-blue-600">Future Astronaut</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Designed for kids aged 4-10, Future Astronaut combines fun games,
          interactive missions, and engaging science experiments to spark a love
          for space and science.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-3xl font-bold">
            The Ultimate{" "}
            <span className="text-purple-700">Space Exploration</span> Game
          </h2>
          <p className="text-gray-600 mt-4">
            Future Astronaut provides a **realistic space simulation**
            experience, allowing players to train like astronauts, navigate
            through space stations, and perform spacewalks.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">•</span> Learn how
              zero-gravity environments affect astronauts.
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">•</span> Solve space puzzles
              to unlock new planets.
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">•</span> Train for upcoming
              Mars and Moon missions.
            </li>
          </ul>
        </div>

        <div>
          <img
            src="/img/9.jpg"
            alt="Astronaut training"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="/img/12.jpg"
            alt="Space Adventure"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold">
            <span className="text-purple-700">Unleash Your Inner</span>{" "}
            Astronaut
          </h2>
          <p className="text-gray-600 mt-4">
            Get hands-on experience with **space travel mechanics**, rocket
            launches, and planet landings in this thrilling, educational game.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">•</span> Control spacecraft
              and explore the **International Space Station**.
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">•</span> Participate in
              **multi-level astronaut training** challenges.
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">•</span> Engage with real
              space **simulations and physics-based gameplay**.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const UppyEdu = () => {
  const screenshots = [
    "/img/uppyS1.webp",
    "/img/uppyS2.webp",
    "/img/uppyS3.webp",
    "/img/uppyS4.webp",
    "/img/uppyS5.webp",
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Early Learning</h1>
        <p className="text-lg mb-6">
          Unlock fun, safe, and expert-approved learning content for your child!
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Start 7-day Free Trial
        </a>
        <p className="text-gray-600 mt-4">
          Join 700,000+ families who trust Uppy to support their child's
          learning journey!
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaPlayCircle className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Engaging Content</h3>
              <p className="text-gray-600">
                Expert-approved videos and activities that make learning fun.
              </p>
            </div>
            <div className="text-center">
              <FaShieldAlt className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
              <p className="text-gray-600">
                100% safe digital space for children to explore and learn.
              </p>
            </div>
            <div className="text-center">
              <FaUsers className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a community of over 700,000 families worldwide.
              </p>
            </div>
            <div className="text-center">
              <FaMobileAlt className="text-blue-600 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">
                Multi-Platform Access
              </h3>
              <p className="text-gray-600">
                Available on App Store and Google Play Store for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Uppy Edu</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take a closer look at our intuitive and engaging learning platform.
          </p>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4">
            {screenshots.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1}`}
                className="w-56 h-96 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Parents Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Uppy Edu has transformed the way my child learns. The content
                is engaging and safe!"
              </p>
              <p className="font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "As a parent, I love the expert-approved materials. My son looks
                forward to learning every day."
              </p>
              <p className="font-semibold">- Michael B.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The safe digital environment gives me peace of mind while my
                daughter explores new topics."
              </p>
              <p className="font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Enhance Your Child's Learning?
        </h2>
        <p className="text-lg mb-6">
          Start your 7-day free trial today and join a community dedicated to
          safe and fun learning.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Start 7-day Free Trial
        </a>
      </section>
    </div>
  );
};

const Adaptive = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-16 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">
          Personalized Digital Learning
        </h1>
        <p className="text-lg mb-6">
          Adaptive Curriculum provides interactive, standards-based learning
          experiences to improve student achievement.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Adaptive Curriculum
        </a>
        <p className="text-gray-600 mt-4">
          Empowering students and educators with interactive and engaging
          lessons.
        </p>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2">
          <img
            src="/img/adaptiveLeftBg.jpg"
            alt="Adaptive Learning Overview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            What is Adaptive Curriculum?
          </h3>
          <p className="text-gray-600 mb-6">
            Adaptive Curriculum is an innovative digital learning platform that
            personalizes student learning through interactive content and
            data-driven insights.
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBookOpen />,
                title: "Interactive Lessons",
                desc: "Engage students with hands-on digital content.",
              },
              {
                icon: <FaChalkboardTeacher />,
                title: "Real-Time Feedback",
                desc: "Track student progress instantly.",
              },
              {
                icon: <FaLaptopCode />,
                title: "STEM-Based Approach",
                desc: "Focus on Science, Math, and Technology.",
              },
              {
                icon: <FaBrain />,
                title: "Adaptive Learning Paths",
                desc: "Personalized study plans for each student.",
              },
              {
                icon: <FaUsers />,
                title: "Collaborative Tools",
                desc: "Facilitate group discussions and teamwork.",
              },
              {
                icon: <FaMobileAlt />,
                title: "Multi-Platform Access",
                desc: "Learn anywhere, on any device.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-blue-600 text-3xl">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <FaClipboardCheck />,
                value: "16%",
                text: "Improvement in high-stakes test scores",
              },
              {
                icon: <FaAward />,
                value: "87%",
                text: "Approval rate by students",
              },
              {
                icon: <FaGlobe />,
                value: "10+",
                text: "Countries have Adaptive Curriculum subscribers",
              },
              {
                icon: <FaUsers />,
                value: "25M",
                text: "Students impacted worldwide",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <div className="text-green-700 text-4xl mb-3">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center py-16 bg-blue-50">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Learning?
        </h2>
        <p className="text-lg mb-6">
          Experience Adaptive Curriculum and enhance student engagement with
          interactive digital content.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

const Oilalar = () => {
  const categories = [
    { key: "mentalup", label: "Mental Up", component: <MentalUp /> },
    { key: "ft", label: "Future astonaut", component: <Future /> },
    { key: "uppyedu", label: "Uppy Edu", component: <UppyEdu /> },
    { key: "adaptive", label: "Adaptive Cirriculum", component: <Adaptive /> },
  ];

  const [activeTab, setActiveTab] = useState("mentalup");

  return (
    <Wrapper>
      <div className="py-10 pt-32 bg-gray-50">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Oilalar uchun yechimlar
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 justify-center mt-8 border-b pb-2">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveTab(category.key)}
            className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 
                ${
                  activeTab === category.key
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              `}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 px-6">
        {categories
          .filter((category) => category.key === activeTab)
          .map((category) => (
            <div
              key={category.key}
              className="p-6 bg-white shadow-lg rounded-lg"
            >
              {category.component}
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Oilalar;
