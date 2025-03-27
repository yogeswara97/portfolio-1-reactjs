import landingPhoto from "../assets/maintenance/maintenanc-page-removebg.png";

export default function MaintenancePage() {
    return (
        <section
            id="maintenance"
            className="bg-gradient-to-t from-gray-200 via-blue-300 to-gray-200 text-black 
      dark:bg-gradient-to-t dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 dark:text-white 
      h-screen flex items-center justify-center px-4"
        >
            <div
                className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 
        bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl"
            >
                <img
                    src={landingPhoto}
                    alt="Maintenance"
                    className="w-80 md:w-96 object-contain"
                />
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        We’ll Be Back Soon!
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our website is currently undergoing maintenance to serve you
                        better. Please check back later. Thank you for your patience!
                    </p>
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium 
            rounded-lg transition-all"
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        </section>
    );
}
