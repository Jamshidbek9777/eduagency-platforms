import { useState } from "react";

const OkulMimari = () => {
    const [activePanel, setActivePanel] = useState(null);

    const togglePanel = (panel) => {
        setActivePanel(activePanel === panel ? null : panel);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 font-sans pt-48">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
                EduAgency Eğitimde Mükemmellik İçin Okul Mimarisi ve Tasarım Hizmetleri
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Özbekistan'da eğitimde fark yaratmaya yönelik okul binalarının ve
                öğrenme alanlarının tasarımında öncülük ediyoruz. <span className="font-bold">Eğitimdeki başarı, doğru ortamda yetişen öğrencilerle başlar!</span> Biz de bu yaklaşımı benimsiyor ve okul mimarisi alanında sunduğumuz kapsamlı hizmetlerle ilham verici ve fonksiyonel mekanlar tasarlıyoruz.
            </p>

            <div className="space-y-6">
                {/* Mimari Proje ve Tasarım */}
                <div>
                    <button
                        onClick={() => togglePanel("design")}
                        className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg shadow"
                    >
                        1. Mimari Proje ve Tasarım
                    </button>
                    {activePanel === "design" && (
                        <div className="mt-3 pl-4 border-l-4 border-blue-500 space-y-2">
                            <p>Fonksiyonel ve Estetik Okul Tasarımları: Öğrencilerin akademik başarılarını en üst düzeye çıkaracak, estetik açıdan cazip okul yapıları tasarlıyoruz.</p>
                            <p>Çevre Dostu Okul Yapıları: Sürdürülebilir malzemeler ve enerji tasarrufu sağlayan çevre dostu yapılar oluşturuyoruz.</p>
                            <p>Adaptif Alanlar: Gelişen eğitim metotlarına göre şekillenen esnek alanlar tasarlıyoruz.</p>
                        </div>
                    )}
                </div>

                {/* Sınıf Konseptleri ve Düzenlemeleri */}
                <div>
                    <button
                        onClick={() => togglePanel("classrooms")}
                        className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg shadow"
                    >
                        2. Sınıf Konseptleri ve Düzenlemeleri
                    </button>
                    {activePanel === "classrooms" && (
                        <div className="mt-3 pl-4 border-l-4 border-blue-500 space-y-2">
                            <p>İleri Teknolojiyle Donatılmış Sınıflar: Modern eğitim araçlarıyla (akıllı tahta, tablet ve bilgisayarlar) donatılmış sınıflar sunuyoruz.</p>
                            <p>Öğrenci Merkezli Sınıf Tasarımları: Daha verimli ve işlevsel sınıf düzenlemeleri yapıyoruz.</p>
                            <p>Yaratıcı Çalışma Alanları: Öğrencilerin yaratıcı düşünme becerilerini geliştirecek alanlar tasarlıyoruz.</p>
                        </div>
                    )}
                </div>

                {/* Laboratuvar Kurulumu */}
                <div>
                    <button
                        onClick={() => togglePanel("labs")}
                        className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg shadow"
                    >
                        3. Laboratuvar Kurulumu
                    </button>
                    {activePanel === "labs" && (
                        <div className="mt-3 pl-4 border-l-4 border-blue-500 space-y-2">
                            <p>Bilim ve Fen Laboratuvarları: Modern ve güvenli laboratuvar alanları tasarlıyoruz.</p>
                            <p>STEM Laboratuvarları: Robotik ve 3D yazıcılarla donatılmış alanlar oluşturuyoruz.</p>
                            <p>Yüksek Teknolojiyle Desteklenen Eğitim Alanları: Sanal gerçeklik araçlarıyla zenginleştirilmiş laboratuvarlar kuruyoruz.</p>
                        </div>
                    )}
                </div>

                {/* Bilim Merkezi Kurulumu */}
                <div>
                    <button
                        onClick={() => togglePanel("science")}
                        className="w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg shadow"
                    >
                        4. Bilim Merkezi Kurulumu
                    </button>
                    {activePanel === "science" && (
                        <div className="mt-3 pl-4 border-l-4 border-blue-500 space-y-2">
                            <p>Eğitim ve Keşif Merkezi: Öğrencilerin öğrenme isteklerini artıran bilim merkezleri tasarlıyoruz.</p>
                            <p>Atölye ve Sergi Alanları: Öğrencilerin keşif yaparak öğrenebileceği alanlar oluşturuyoruz.</p>
                            <p>Ziyaretçi Dostu Bilim Merkezleri: Eğitim teknolojileri ve bilimsel keşifleri birleştiren merkezler sunuyoruz.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OkulMimari;
