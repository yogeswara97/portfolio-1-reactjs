import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Project from "../models/Project";

import ProjectDetailComponent from "../components/projects/ProjectDetailComponent";
import LoadingIndicator from "../components/General/LoadingIndicator";

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState();

    useEffect(() => {
        document.title = "YogesWr | Project";

        async function fetchProject() {
            try {
                const fetchedProject = await Project.getProjectById(id);
                setProject(fetchedProject);
            } catch (error) {
                console.error('Error fetching project:', error);
                navigate('/projects', { replace: true });
            } finally {
                setLoading(false);
                window.scrollTo(0, 0); // Pindahkan scroll reset di sini
            }
        }

        fetchProject();
    }, [id, navigate]);

    if (loading) {
        return (
            <LoadingIndicator />
        );
    }

    return (
        <ProjectDetailComponent project={project} />
    );
}
