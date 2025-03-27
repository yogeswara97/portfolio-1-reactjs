/* eslint-disable react/prop-types */
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectCard from '../home/ProjectCard';

export default function ProjectList({ projects }) {

    return (
        <section id="project" className="bg-gradient-to-b from-gray-200 via-blue-300 to-gray-200 dark:bg-gradient-to-b dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 dark:text-white py-20 lg:py-36 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 space-y-2 flex justify-between ">
                    <div>
                        <span className="uppercase text-blue-300 text-md tracking-wider">My Projects</span>
                        <h2 className="text-4xl font-bold">Recent Projects</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {projects.map((project) => (
                        <div key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
