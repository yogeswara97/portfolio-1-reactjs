/* eslint-disable react/prop-types */

export default function Experiences({ experiences }) {
    console.log(experiences);
    
    return (
        <section id="experience" className="bg-gradient-to-b from-gray-300 to-gray-400 text-slate-900 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 dark:text-white pt-20 pb-4 md:pt-28">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 space-y-2">
                    <span className="uppercase text-blue-900 dark:text-blue-300 text-md tracking-wider">My Experience</span>
                    <h2 className="text:slate-900 dark:text-white text-4xl font-bold">Work Experience</h2>
                </div>

                {/* Experience cards section */}
                <div className="grid grid-cols-1 gap-8">
                    {/* Experience card */}
                    {experiences.map((experince) => (

                        <div key={experince.id} className="bg-gray-200 dark:bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-start">
                            <div className="mb-4 lg:mb-0 w-full lg:w-1/4 bg-blue-300 dark:bg-blue-500 rounded-lg p-4 h-full space-y-2">
                                <h1 className="text-xl font-bold">{experince.title}</h1>
                                <h3 className="text-md text-gray-800 dark:text-gray-300">{experince.start} - {experince.end}</h3>
                                <p className="text-xs text-slate-900 font-semibold bg-white/90 py-1 px-3 inline-block rounded-2xl uppercase">{experince.type}</p>
                            </div>
                            <div className="lg:w-2/3 lg:pl-6">
                                <h3 className="text-2xl font-semibold mb-2">{experince.company}</h3>
                                <p className="text-slate-900 dark:text-gray-200">
                                    {experince.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    {/* Add more cards here */}
                </div>
            </div>
        </section>
    );
}
