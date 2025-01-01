import { FaBuilding, FaChalkboardTeacher, FaFlask, FaMicroscope } from "react-icons/fa";

const OkulMimari = () => {
    const services = [
        {
            title: "Mimari Proje ve Tasarım",
            description: [
                "Fonksiyonel ve Estetik Okul Tasarımları: Öğrencilerin akademik başarılarını en üst düzeye çıkaracak, estetik açıdan cazip okul yapıları tasarlıyoruz.",
                "Çevre Dostu Okul Yapıları: Sürdürülebilir malzemeler ve enerji tasarrufu sağlayan çevre dostu yapılar oluşturuyoruz.",
                "Adaptif Alanlar: Gelişen eğitim metotlarına göre şekillenen esnek alanlar tasarlıyoruz.",
            ],
            icon: <FaBuilding className="text-6xl text-yellow-400" />,
            image: "/img/okulcard1.jpg",
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            title: "Sınıf Konseptleri ve Düzenlemeleri",
            description: [
                "İleri Teknolojiyle Donatılmış Sınıflar: Modern eğitim araçlarıyla (akıllı tahta, tablet ve bilgisayarlar) donatılmış sınıflar sunuyoruz.",
                "Öğrenci Merkezli Sınıf Tasarımları: Daha verimli ve işlevsel sınıf düzenlemeleri yapıyoruz.",
                "Yaratıcı Çalışma Alanları: Öğrencilerin yaratıcı düşünme becerilerini geliştirecek alanlar tasarlıyoruz.",
            ],
            icon: <FaChalkboardTeacher className="text-6xl text-red-600" />,
            image: "/img/okulcard2.webp", // Example image
            gradient: "from-green-400 to-teal-500",
        },
        {
            title: "Laboratuvar Kurulumu",
            description: [
                "Bilim ve Fen Laboratuvarları: Modern ve güvenli laboratuvar alanları tasarlıyoruz.",
                "STEM Laboratuvarları: Robotik ve 3D yazıcılarla donatılmış alanlar oluşturuyoruz.",
                "Yüksek Teknolojiyle Desteklenen Eğitim Alanları: Sanal gerçeklik araçlarıyla zenginleştirilmiş laboratuvarlar kuruyoruz.",
            ],
            icon: <FaFlask className="text-6xl text-blue-700" />,
            image: "/img/okulcard3.jpg", // Example image
            gradient: "from-yellow-400 to-orange-500",
        },
        {
            title: "Bilim Merkezi Kurulumu",
            description: [
                "Eğitim ve Keşif Merkezi: Öğrencilerin öğrenme isteklerini artıran bilim merkezleri tasarlıyoruz.",
                "Atölye ve Sergi Alanları: Öğrencilerin keşif yaparak öğrenebileceği alanlar oluşturuyoruz.",
                "Ziyaretçi Dostu Bilim Merkezleri: Eğitim teknolojileri ve bilimsel keşifleri birleştiren merkezler sunuyoruz.",
            ],
            icon: <FaMicroscope className="text-6xl text-gray-600" />,
            image: "/img/okulcard4.jpg", // Example image
            gradient: "from-pink-500 to-red-500",
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
                        EduAgency Eğitimde Mükemmellik İçin Okul Mimarisi ve Tasarım Hizmetleri
                    </h1>
                </div>
            </div>

            {/* Intro Text */}
            <p className="text-lg text-gray-600 text-center mb-12">
                Özbekistan'da eğitimde fark yaratmaya yönelik okul binalarının ve öğrenme alanlarının tasarımında öncülük ediyoruz.{" "}
                <span className="font-bold">Eğitimdeki başarı, doğru ortamda yetişen öğrencilerle başlar!</span> Biz de bu yaklaşımı
                benimsiyor ve okul mimarisi alanında sunduğumuz kapsamlı hizmetlerle ilham verici ve fonksiyonel mekanlar tasarlıyoruz.
            </p>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative bg-gradient-to-r ${service.gradient} p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl`}
                    >
                        {/* Service Image with Darker Gradient Overlay */}
                        <div className="absolute inset-0 bg-cover bg-center rounded-xl"
                             style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black transparent to-transparent rounded-xl"></div>
                        </div>

                        {/* Service Icon */}
                        <div className="absolute -top-10 left-6 z-10">{service.icon}</div>

                        <div className="relative z-20 mt-16">
                            <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                            <ul className="text-gray-100 space-y-2">
                                {service.description.map((desc, idx) => (
                                    <li key={idx} className="text-sm">{desc}</li>
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
