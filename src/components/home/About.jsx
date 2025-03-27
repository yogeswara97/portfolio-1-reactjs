import photo1 from "../../assets/grid/photo1.avif";
import photo2 from "../../assets/grid/photo2.jpg";
import photo3 from "../../assets/grid/photo3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-t from-slate-300 to-slate-400 text-gray-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-900 dark:text-white min-h-screen flex justify-center pt-10 md:pt-28">

            <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row justify-between lg:gap-16">
                {/* Image Section (using grid for 4 images) */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    {/* Gambar 1 - Kolom kiri atas, tinggi 2 baris */}
                    <div className="relative row-span-2 flex items-center justify-center">
                        <img src={photo1} alt="Beach 1" className="object-cover w-full h-80 rounded-lg" />
                    </div>

                    {/* Gambar 2 - Kolom kanan atas, tinggi 2 baris */}
                    <div className="relative row-span-2 flex items-center justify-center">
                        <img src={photo2} alt="Beach 2" className="object-cover w-full h-80 rounded-lg" />
                    </div>

                    {/* Gambar 3 - Posisi di bawah kedua gambar atas */}
                    <div className="relative col-span-2 flex items-center justify-center">
                        <img src={photo3} alt="Beach 3" className="object-cover w-full h-60 rounded-lg" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col pt-8 md:pt-14 space-y-8 max-w-lg md:max-w-md mb-10">
                    <div className="uppercase text-blu-800 dark:text-blue-300 text-lg tracking-wider">About Me</div>
                    <h1 className="text-4xl md:text-3xl font-bold leading-tight uppercase">
                        I AM A MOBILE AND WEB DEVELOPER
                    </h1>
                    <p className="text-gray-900 dark:text-gray-400 text-lg">
                        I specialize in building user-friendly and responsive mobile and web applications. With a passion for clean code and innovative designs, I strive to create seamless experiences for users across multiple platforms.
                    </p>
                    <div className="flex space-x-6 mt-6">
                        <a href="" className="text-white bg-black p-3 rounded-full text-xl"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        <a href="https://instagram.com/yogeswr_" className="text-white bg-pink-500 p-3 rounded-full text-xl"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                        <a href="https://www.linkedin.com/in/yogeswr/" className="text-white bg-blue-300 p-3 rounded-full text-xl"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
