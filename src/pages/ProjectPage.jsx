import { useEffect, useState } from "react";
import ProjectList from "../components/projects/ProjectList";
import Project from "../models/Project";  // Impor model Project untuk mengambil data
import LoadingIndicator from "../components/General/LoadingIndicator";

export default function ProjectPage(){
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = "YogesWr | Project";
        // Fungsi untuk mengambil data proyek
        async function fetchProjects() {
            try {
                const fetchedProjects = await Project.getAllProjects();
                setProjects(fetchedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false); // Mengubah status loading setelah data selesai diambil
                // window.scrollTo(0, 0);
            }
        }

        fetchProjects();
        
    }, []); // Memanggil fetchProjects saat komponen dimuat pertama kali

    if (loading) {
        return (
            <LoadingIndicator />
        );
    }
    return (

        <div className="">
            <ProjectList projects={projects}/>
        </div>
    );
}