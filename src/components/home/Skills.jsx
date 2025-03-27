/* eslint-disable react/prop-types */

import { DiMysql } from "react-icons/di";
import {
    FaNodeJs,
    FaCss3,
    FaDocker,
    FaHtml5,
    FaJs,
    FaLaravel,
    FaReact,
} from "react-icons/fa";
import { RiBootstrapFill, RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
    return (
        <section
            id="skills"
            className="bg-gradient-to-t from-slate-400 from-10% via-slate-400 via-30% to-blue-400 to-90% text-slate-900 dark:bg-gradient-to-t dark:from-slate-900 dark:from-10% dark:via-slate-900 dark:via-30% dark:to-blue-900 dark:to-90% dark:text-white pt-20 md:pt-28"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* section title */}
                <div className="mb-10 space-y-2 text-left">
                    <span className="uppercase text-blue-900 dark:text-blue-300 text-md tracking-wider">
                        My Skills
                    </span>
                    <h2 className="text-slate-900 dark:text-white text-4xl font-bold">Technical Skills & Tools</h2>
                </div>

                {/* Skills section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* skill card */}
                    <SkillCard
                        icon={<FaHtml5 size={40} className="text-orange-500" />}
                        title="HTML5"
                        desc="Mastery of HTML5, allowing me to create semantic and structured web content. I build user-friendly, accessible websites and web apps with modern HTML elements and attributes."
                    />

                    {/* skill card */}
                    <SkillCard
                        icon={<FaCss3 size={40} className="text-blue-400" />}
                        title="CSS3"
                        desc="With CSS3, I create stunning, responsive designs using Flexbox, Grid Layouts, and advanced animations to ensure a seamless experience across all devices."
                    />

                    {/* skill card */}
                    <SkillCard
                        icon={<FaJs size={40} className="text-yellow-500" />}
                        title="JavaScript (JS)"
                        desc="JavaScript brings interactivity and dynamic features to websites. I write efficient, scalable code to build real-time applications and complex web features."
                    />

                    {/* skill card */}
                    <SkillCard
                        icon={<FaLaravel size={40} className="text-red-500" />}
                        title="Laravel"
                        desc="Laravel allows me to build robust backends with clean, maintainable code. From API development to database management, I ensure scalable solutions for complex projects."
                    />

                    {/* skill card for React.js */}
                    <SkillCard
                        icon={<FaReact size={40} className="text-sky-500" />} // Use a vibrant blue color for React
                        title="React.js"
                        desc="I build dynamic, high-performance web applications with React.js, utilizing its component-based architecture and virtual DOM for efficient rendering and seamless user experiences."
                    />

                    {/* skill card for Tailwind CSS */}
                    <SkillCard
                        icon={<RiTailwindCssFill size={40} className="text-blue-400" />} // Use a soft blue color for Tailwind CSS
                        title="Tailwind CSS"
                        desc="Tailwind CSS empowers me to design responsive and visually appealing interfaces quickly, with utility-first classes that streamline development and maintain a consistent design system."
                    />

                    {/* skill card for Bootstrap */}
                    <SkillCard
                        icon={<RiBootstrapFill size={40} className="text-purple-600" />} // Use a purple color for Bootstrap
                        title="Bootstrap"
                        desc="Bootstrap helps me quickly create responsive, mobile-first websites with its pre-designed components and grid system. I rely on Bootstrap to ensure fast development while maintaining a clean and modern design."
                    />


                    {/* skill card */}
                    <SkillCard
                        icon={<FaNodeJs size={40} className="text-green-500" />}
                        title="Node.js"
                        desc="Node.js enables me to create fast, scalable server-side applications. I leverage its non-blocking I/O to build real-time apps and RESTful APIs with high efficiency."
                    />

                    {/* skill card */}
                    <SkillCard
                        icon={<RiFlutterFill size={40} className="text-blue-400" />}
                        title="Flutter"
                        desc="Flutter allows me to build natively compiled applications for mobile, web, and desktop from a single codebase. With its rich set of pre-designed widgets and high-performance rendering engine, I can create fast, beautiful, and responsive user interfaces for cross-platform apps."
                    />

                    {/* skill card */}
                    <SkillCard
                        icon={<FaDocker size={40} className="text-blue-400" />}
                        title="Docker"
                        desc="Docker streamlines my development workflow by creating consistent environments across platforms. I use Docker to build isolated and efficient testing and production environments."
                    />

                    {/* skill card */}
                    <SkillCard
                        icon={<DiMysql size={40} className="text-blue-500" />}
                        title="MySQL"
                        desc="MySQL is a powerful relational database management system. I use it to store and manage structured data with speed and reliability, creating efficient back-end solutions for web applications."
                    />

                </div>
            </div>
        </section>
    );
}

const SkillCard = ({ icon, title, desc }) => {
    return (
        <div className="bg-slate-300 text-slate-900 dark:text-white dark:bg-slate-800 p-6 rounded-lg shadow-lg transform hover:scale-95 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
                {icon}
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <p>{desc}</p>
        </div>
    );
};
