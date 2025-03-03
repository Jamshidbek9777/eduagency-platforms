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
} from "react-icons/fa";

const Okulaile = () => {
  const features = [
    {
      icon: <FaVideo size={40} className="text-blue-500" />,
      title: "Sınırsız Video Paylaşımı",
      description:
        "Veliler çocuklarının gelişimine daha fazla tanıklık edebilsin diye OkulAile Anaokulu Mobil Uygulamasından sınırsız video paylaşabilirsiniz. Veliler videoları indirebilir.",
    },
    {
      icon: <FaCamera size={40} className="text-blue-500" />,
      title: "Sınırsız Fotoğraf Paylaşımı",
      description:
        "Velilerinizle sınırsız sayıda fotoğrafı tek işlemle, hızlı ve pratik bir şekilde paylaşabilirsiniz. Velileriniz fotoğrafları indirebilir.",
    },
    {
      icon: <FaChild size={40} className="text-blue-500" />,
      title: "Beslenme, Faaliyet, Uyuma",
      description:
        "Öğrencilerinizin günlük beslenme, faaliyete katılım ve uyuma bilgisini paylaşabilir ve istediğiniz notu altına ekleyebilirsiniz.",
    },
    {
      icon: <FaBullhorn size={40} className="text-blue-500" />,
      title: "Duyuru & Görüldü Bilgisi",
      description:
        "Velilerinize istediğiniz kadar duyuru atabilir, duyuruya dosya ekleyebilir ve kimlerin okuyup okumadığını görebilirsiniz.",
    },
    {
      icon: <FaNewspaper size={40} className="text-blue-500" />,
      title: "Bülten",
      description:
        "Anaokulu için haftalık veya aylık yaptığınız veya yapacağınız eğitim içeriklerini ve etkinlikleri paylaşabilirsiniz. Velilerinize rehberlik ve veli bilgilendirme bültenleri gönderebilirsiniz.",
    },
    {
      icon: <FaCalendarAlt size={40} className="text-blue-500" />,
      title: "Etkinlik Takvimi",
      description:
        "Okulunuzun gezileri, tiyatro, vb. sosyal etkinliklerini takvime tanımlayabilirsiniz. Etkinlik takvimini veliler ve öğretmenler de görebilir.",
    },
  ];
  const otherFeatures = [
    {
      icon: <FaUtensils size={32} className="text-gray-600" />,
      title: "Beslenme",
      description:
        "Öğrencilerinizin günlük öğünlerde ne kadar yemek yediğini veya yemediğini paylaşabilir altına notlar ekleyebilirsiniz.",
    },
    {
      icon: <FaTrophy size={32} className="text-gray-600" />,
      title: "Faaliyete Katılma",
      description:
        "Gün içinde okulda yaptığınız faaliyetlerde öğrencinin katılım durumunu belirtip altına notlar ekleyebilirsiniz.",
    },
    {
      icon: <FaBed size={32} className="text-gray-600" />,
      title: "Uyuma",
      description:
        "Öğrencinizin uyuyup uyumadığını belirtebilir ve saat bilgisi ekleyebilirsiniz.",
    },
    {
      icon: <FaListUl size={32} className="text-gray-600" />,
      title: "Yemek Listesi",
      description:
        "Sizin için tasarlanmış öğün bilgilerini yazabilir veya yemek listenizi dosya olarak ekleyebilirsiniz.",
    },
    {
      icon: <FaEnvelopeOpenText size={32} className="text-gray-600" />,
      title: "İzin / Onay",
      description:
        "Gezi, sinema vb. etkinlikler için veli izin onayını alabilir ve canlı görebilirsiniz.",
    },
    {
      icon: <FaCheckSquare size={32} className="text-gray-600" />,
      title: "Yoklama",
      description:
        "Öğrencinizin devamsızlık bilgilerini girerek rapor alabilirsiniz.",
    },
    {
      icon: <FaPills size={32} className="text-gray-600" />,
      title: "İlaç Takibi",
      description:
        "Öğrencinizin hangi gün ve saatlerde ilaç içeceğini görüntüleyebilir, bildirim alabilirsiniz.",
    },
    {
      icon: <FaThermometerHalf size={32} className="text-gray-600" />,
      title: "Ateş Ölçme",
      description:
        "Öğrencinizin gün içerisinde ateş ölçümlerini girerek rapor alabilirsiniz.",
    },
    {
      icon: <FaRulerVertical size={32} className="text-gray-600" />,
      title: "Boy - Kilo",
      description:
        "Öğrencilerinizin boy ve kilo bilgilerini girerek büyüme takibi yapabilirsiniz.",
    },
    {
      icon: <FaSmile size={32} className="text-gray-600" />,
      title: "Duygu Durumu",
      description:
        "Öğrencinizin gün içerisindeki duygu durumlarını (mutlu, heyecanlı vb.) velilerle paylaşabilirsiniz.",
    },
    {
      icon: <FaFlag size={32} className="text-gray-600" />,
      title: "Gelişim Raporu",
      description:
        "Öğrencinizin dönemlik gelişim raporlarını oluşturup yazdırabilirsiniz.",
    },
    {
      icon: <FaFileAlt size={32} className="text-gray-600" />,
      title: "Karne",
      description: "Öğrenciniz için dönem sonu karne oluşturabilirsiniz.",
    },
  ];
  return (
    <div className="py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Okulaile</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Okulunuzun verimliliğini artırın, öğretmen ve velilerinizin
          hayatlarını kolaylaştırın.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="flex flex-col space-y-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <img
            src="/img/mobiledevice.png"
            alt="OkulAile App"
            className="w-[250px] md:w-[300px] lg:w-[350px] shadow-xl rounded-lg"
          />
        </div>

        <div className="flex flex-col space-y-6">
          {features.slice(3, 6).map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-gray-100 mt-16">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Diğer Özellikler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-3">
          {otherFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-16 bg-blue-50 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Demo olish uchun biz bilan bog'laning
        </h2>
      </div>
    </div>
  );
};

const Sebit = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Sebit VCloud</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Bulut texnologiyalarida eng ilg‘or yechimlardan biri – Sebit VCloud.
          Ma’lumotlaringizni xavfsiz saqlash, tezkor ishlov berish va mustahkam
          bulut infratuzilmasidan foydalanish imkoniyati.
        </p>
      </div>

      {/* Image & Text Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img
            src="/img/sebitv.png"
            alt="Sebit VCloud"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Sebit VCloud nima?
          </h3>
          <p className="text-gray-600 mb-6">
            Sebit VCloud - bu korxonalar va tashkilotlar uchun xavfsiz va
            ishonchli bulutli infratuzilma. U kompaniyalarga server resurslarini
            optimallashtirish, tezkor ulanish va xavfsiz saqlash imkoniyatini
            taqdim etadi.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h3 className="text-center text-3xl font-bold text-gray-900 mb-10">
          Sebit VCloud xususiyatlari
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaCloud />,
              title: "Bulutli infratuzilma",
              desc: "Ma'lumotlaringiz xavfsiz va ishonchli bulut tizimida saqlanadi.",
            },
            {
              icon: <FaServer />,
              title: "Tezkor serverlar",
              desc: "Yuqori unumdorlik va barqaror ishlash imkoniyati.",
            },
            {
              icon: <FaLock />,
              title: "Yuqori xavfsizlik",
              desc: "Ma’lumotlaringiz himoyalangan va xavfsizlik standartlariga mos.",
            },
            {
              icon: <FaSyncAlt />,
              title: "Tezkor sinxronizatsiya",
              desc: "Har qanday qurilmadan tezkor kirish va sinxronizatsiya.",
            },
            {
              icon: <FaGlobe />,
              title: "Global ulanish",
              desc: "Dunyoning istalgan nuqtasidan barqaror ulanish imkoniyati.",
            },
            {
              icon: <FaRocket />,
              title: "Oson integratsiya",
              desc: "Turli xizmatlar bilan muammosiz bog‘lanish va ishlash.",
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

      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-900">
          Sebit VCloud xizmatidan foydalaning
        </h3>
        <p className="text-gray-600 mt-2">
          Korxonangiz uchun eng ishonchli bulutli yechimni sinab ko’ring.
        </p>
      </div>
    </div>
  );
};

const UppyEdu = () => {
  const screenshots = [
    "/img/sUppy1.jpg",
    "/img/sUppy1.jpg",
    "/img/sUppy1.jpg",
    "/img/sUppy1.jpg",
    "/img/sUppy1.jpg",
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

      {/* Testimonials Section */}
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

const Adaptive = () => (
  <div className="p-6 text-center text-gray-700">
    Adaptive Curriculum Content
  </div>
);

const Okullar = () => {
  const categories = [
    { key: "okulaile", label: "Okulaile", component: <Okulaile /> },
    { key: "sebit", label: "Sebit VCloud", component: <Sebit /> },
    { key: "uppyedu", label: "Uppy Edu", component: <UppyEdu /> },
    { key: "adaptive", label: "Adaptive Cirriculum", component: <Adaptive /> },
  ];

  const [activeTab, setActiveTab] = useState("okulaile");

  return (
    <Wrapper>
      <div className="py-10 pt-32 bg-gray-50">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Okullar uchun yechimlar
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

export default Okullar;
