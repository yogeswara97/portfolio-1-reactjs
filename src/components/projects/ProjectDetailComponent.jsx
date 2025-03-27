/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectDetailComponent({ project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="bg-gradient-to-b from-gray-200 via-blue-300 to-gray-200 dark:bg-gradient-to-b dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 dark:text-white pt-20 lg:pt-32 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-center gap-10">

                    {/* Project Image */}
                    <div className="w-full lg:w-2/3">
                        <Swiper
                            pagination={true}
                            spaceBetween={20}
                            modules={[Pagination]}
                            slidesPerView={1}
                            className="h-[200px] md:h-[300px] lg:h-[500px] rounded-lg shadow-lg"
                        >
                            {project.image.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="overflow-hidden relative rounded-lg h-full cursor-pointer" onClick={() => openModal(image)}>
                                        <img
                                            src={image}
                                            alt={`Project Image ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Project Information */}
                    <div className="flex-none w-full lg:w-96 p-3 max-w-full">
                        <h1 className="text-3xl md:text-4xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-950 dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600">{project.name}</h1>
                        <h2 className="text-lg md:text-xl mb-4 text-gray-800 dark:text-gray-300">
                            {project.category.map((category, index) => (
                                <span key={index} className="mr-2">
                                    {category}
                                    {index < project.category.length - 1 && ','}
                                </span>
                            ))}
                        </h2>
                        <h3 className="text-md md:text-lg mb-4 text-gray-900 dark:text-gray-400">Created at {project.firstCreated}</h3>
                        <div className="text-sm md:text-md leading-relaxed prose prose-sm text-slate-900 dark:text-white mb-6" dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>

                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                    <div className="relative max-w-3xl w-full mx-4 p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-2 right-4 rounded-full p-2 text-black text-2xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-lg max-h-[80vh] object-contain" />
                    </div>
                </div>
            )}


        </div>
    );
}
