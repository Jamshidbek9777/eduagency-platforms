import React from "react";

const KindergardensPage = () => {
    return (
        <div className="container mx-auto p-6  pt-48">
            <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Kindergardens</h1>

            <section className="mb-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <div>
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Okulaile</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            OkulAile bilan Bolalar bog‘chalari, Boshlang‘ich maktablar, O‘rta maktablar, Xususiy maktablar, Kollejlar, Xususiy ta’lim kurslari, O‘quv markazlari, San’at markazlari va Reabilitatsiya markazlari barcha ehtiyojlarini mobil platformada oson va tez bajarishlari mumkin.


                        </p>
                    </div>
                    <img
                        src="/img/okulaile.png"
                        alt="Okulaile"
                        className="w-full lg:w-1/2 h-auto rounded-xl "
                    />
                </div>
            </section>

            <section className="mb-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <img
                        src="/img/mentalup.webp"
                        alt="Mental Up"
                        className="w-full lg:w-1/2 h-auto rounded-xl shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Mental Up</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Mental Up offers brain-training games and exercises that help children boost their memory, attention span, and problem-solving skills. It is designed to make learning both effective and enjoyable.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <img
                        src="/img/futureast.png"
                        alt="Future Astronaut"
                        className="w-full lg:w-1/2 h-auto rounded-xl"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Future Astronaut</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Ignite the curiosity of young minds with our Future Astronaut program. This service introduces kids to the wonders of space exploration through fun and engaging activities, fostering a love for science and discovery.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                    <img
                        src="/img/stem.png"
                        alt="STEMLab"
                        className="w-full lg:w-1/2 h-auto rounded-xl shadow-lg"
                    />
                    <div>
                        <h2 className="text-3xl font-semibold text-blue-500 mb-4">STEMLab</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            STEMLab provides hands-on science, technology, engineering, and math activities tailored to young learners. It encourages creativity, critical thinking, and a passion for innovation from an early age.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KindergardensPage;
