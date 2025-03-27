import { motion } from "framer-motion";
import Typical from "react-typical";
import landingPhoto from "../../assets/hero/Landing_Pag3_3.png";
// import landingPhoto2 from "../../assets/hero/profile-nobg.png";
import remoteConfig from "../../FirebaseConfig";
import { getBoolean } from "firebase/remote-config";
import { useEffect } from "react";

const Hero = () => {
    useEffect(
        () => {
            try {
                const val = getBoolean(remoteConfig, "test");
                console.log('val -> ', val)
            } catch (error) {
                console.error("error rc babi: ", error)
            }
        }

        , [])
    return (
        <section id="home" className="bg-gradient-to-t from-gray-200 via-blue-300 to-gray-200 text-black dark:bg-gradient-to-t dark:from-gray-950 dark:via-blue-900 dark:to-gray-900 dark:text-white md:h-screen flex justify-center pt-10 md:pt-36">
            <div className="w-[95%] md:w-[80%] flex-col md:flex-row flex justify-between gap-16">
                {/* Text Section */}
                <motion.div
                    className="fle pt-14 flex-col space-y-4 md:space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="uppercase text-blue-900 dark:text-blue-300 text-lg tracking-wider">
                        Mobile and Web Developer
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl lg:text-6xl font-bold uppercase">
                        Hay! I&apos;m Yoges
                    </h1>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-800 dark:text-blue-500 uppercase">
                        <Typical
                            steps={['I\'m a Developer', 5000, 'I\'m a Programer', 5000,]}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </h2>
                    <p className="text-slate-800 dark:text-gray-400 max-w-lg text-lg">
                        Passionate about creating efficient, user-friendly applications. I enjoy solving complex problems and turning ideas into functional, intuitive web and mobile solutions. With a focus on clean code and performance, I strive to build applications that offer seamless experiences across all platforms.
                    </p>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-xl">
                        <a href="/chatbot">
                            Try Chatbot
                        </a>
                    </button>
                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-6">
                        <a href="#" className="bg-blue-600 p-3 rounded-full text-xl"></a>
                        <a href="#" className="bg-pink-500 p-3 rounded-full text-xl"></a>
                        <a href="#" className="bg-blue-300 p-3 rounded-full text-xl"></a>
                    </div>
                </motion.div>

                {/* Image Section */}
                <div className="max-w-[35rem] h-full flex items-center justify-center rounded-t-full">
                    <img src={landingPhoto} alt="" className="h-full object-cover " />
                </div>
            </div>

            

        </section>
    );
};

export default Hero;
