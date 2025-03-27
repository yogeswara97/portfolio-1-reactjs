/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import About from "../components/home/About";
import Experiences from "../components/home/Experiences";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Project from "../models/Project";  // Impor model Project untuk mengambil data
import Experience from "../models/Experience";
import Form from "../components/home/Form";
import LoadingIndicator from "../components/General/LoadingIndicator";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [expereinces, setExpereinces] = useState([]);

    // console.log("Your OpenAI API Key:", process.env.OPENAI_API_KEY);


    useEffect(() => {
        document.title = "YogesWr | Dashboard"; // Sesuaikan dengan title halaman

        // Fungsi untuk mengambil data proyek
        async function fetchProjects() {
            try {
                const fetchedProjects = await Project.getAllProjects();
                const fetchedExperiences = await Experience.getAllExperiences();
                setProjects(fetchedProjects);
                setExpereinces(fetchedExperiences);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false); // Mengubah status loading setelah data selesai diambil
                window.scrollTo(0, 0);
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
            <Hero />
            {/* Kirim data proyek yang sudah diambil ke komponen Projects */}
            <Projects projects={projects} />
            <Skills />
            <About />
            <Experiences experiences={expereinces}/>
            <Form />
        </div>
    );
}
