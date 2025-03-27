/* eslint-disable react/prop-types */
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
    

    return (
        <section id="project" className="bg-gradient-to-b from-gray-200 to-blue-400 text-slate-200 dark:bg-gradient-to-b dark:from-gray-950 dark:to-blue-900 dark:text-white pt-20 md:pt-36">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 space-y-2 flex justify-between ">
                    <div>
                        <span className="uppercase text-blue-900 dark:text-blue-300 text-md tracking-wider">My Projects</span>
                        <h2 className="text-slate-900 dark:text-white text-4xl font-bold">Recent Projects</h2>
                    </div>
                    <a href="/projects" className='hidden md:block bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-lg'>
                        View all projects
                    </a>
                </div>

                <Swiper
                    pagination={true}
                    spaceBetween={20}
                    modules={[Pagination]}
                    breakpoints={{
                        640: { width: 640, slidesPerView: 1 },
                        768: { width: 768, slidesPerView: 2 },
                        1024: { width: 1024, slidesPerView: 3 },
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <ProjectCard project={project}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <a href="/projects" >
                    <button className='blcok md:hidden w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg text-lg mt-4'>View all projects</button>
                </a>
            </div>
        </section>
    );
}
