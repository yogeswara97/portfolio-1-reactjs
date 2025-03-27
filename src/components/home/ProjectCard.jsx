/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
    const navigate = useNavigate();
    const handleView = (id) => navigate(`/project/${id}`);
    
    return (
        <div className="text-slate-900 bg-gray-200 dark:bg-slate-800 rounded-lg p-5 shadow-lg dark:text-white hover:scale-95 duration-300">
            <div className="w-full h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                {project.image ? (
                    <img src={project.image[0]} alt={project.name} className="h-full w-full object-cover rounded" />
                ) : (
                    <span className="text-white">No Image Available</span>
                )}
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-slate-800 dark:text-gray-100 mb-4 capitalize text-sm">
                        {project.createdAt}
                    </p>

                </div>
                <button onClick={() => handleView(project.id)} className="bg-slate-300 slate dark:bg-slate-500 hover:bg-blue-300 dark:hover:bg-blue-600 text-black dark:text-white rounded-full p-3">
                    <FaArrowRight size={18} />
                </button>
            </div>
        </div>
    )


}