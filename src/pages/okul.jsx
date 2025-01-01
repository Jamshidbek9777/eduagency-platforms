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
            icon: <FaBuilding className="text-6xl text-gray-600" />,
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            title: "Sınıf Konseptleri ve Düzenlemeleri",
            description: [
                "İleri Teknolojiyle Donatılmış Sınıflar: Modern eğitim araçlarıyla (akıllı tahta, tablet ve bilgisayarlar) donatılmış sınıflar sunuyoruz.",
                "Öğrenci Merkezli Sınıf Tasarımları: Daha verimli ve işlevsel sınıf düzenlemeleri yapıyoruz.",
                "Yaratıcı Çalışma Alanları: Öğrencilerin yaratıcı düşünme becerilerini geliştirecek alanlar tasarlıyoruz.",
            ],
            icon: <FaChalkboardTeacher className="text-6xl text-gray-600" />,
            gradient: "from-green-400 to-teal-500",
        },
        {
            title: "Laboratuvar Kurulumu",
            description: [
                "Bilim ve Fen Laboratuvarları: Modern ve güvenli laboratuvar alanları tasarlıyoruz.",
                "STEM Laboratuvarları: Robotik ve 3D yazıcılarla donatılmış alanlar oluşturuyoruz.",
                "Yüksek Teknolojiyle Desteklenen Eğitim Alanları: Sanal gerçeklik araçlarıyla zenginleştirilmiş laboratuvarlar kuruyoruz.",
            ],
            icon: <FaFlask className="text-6xl text-gray-600" />,
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
            gradient: "from-pink-500 to-red-500",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-sans pt-48">
            <h1 className="text-4xl font-bold text-center text-[#2664eb] mb-10">
                EduAgency Eğitimde Mükemmellik İçin Okul Mimarisi ve Tasarım Hizmetleri
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                Özbekistan'da eğitimde fark yaratmaya yönelik okul binalarının ve öğrenme alanlarının tasarımında öncülük ediyoruz.{" "}
                <span className="font-bold">Eğitimdeki başarı, doğru ortamda yetişen öğrencilerle başlar!</span> Biz de bu yaklaşımı
                benimsiyor ve okul mimarisi alanında sunduğumuz kapsamlı hizmetlerle ilham verici ve fonksiyonel mekanlar tasarlıyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative bg-gradient-to-r ${service.gradient} p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300`}
                    >
                        <div className="absolute -top-10 left-6">{service.icon}</div>
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
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
