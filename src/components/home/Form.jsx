import { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Form() {
    const form = useRef(null); // Create a reference to the form
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        setStatus("");

        // Send the form using EmailJS
        emailjs
            .sendForm(
                "service_6ptfgkx",
                "template_78t0mic",
                form.current,
                "U3q7YVO2H1JRgZvOQ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSending(false);
                    setStatus("Message sent successfully!");
                    // Reset form after submission
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log(error.text);
                    setSending(false);
                    setStatus("Error sending message. Please try again.");
                }
            );
    };

    return (
        <section
            id="form"
            className="bg-gradient-to-b from-gray-400 to-gray-200 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-900 text-white pt-10 pb-4 md:pt-20"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-10 space-y-2 flex justify-between">
                    <div>
                        <span className="uppercase text-blue-800 dark:text-blue-300 text-md tracking-wider">
                            Let&apos;s Talk
                        </span>
                        <h2 className="text-slate-900 dark:text-white text-4xl font-bold">
                            Send a Message
                        </h2>
                    </div>
                </div>

                <form
                    ref={form} // Attach the ref to the form
                    className="p-6 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col items-center w-full mb-6 space-x-0 space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                        <div className="w-full">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-lg font-semibold text-blue-800 dark:text-blue-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                autoComplete="name"
                                className="block w-full rounded-md bg-gray-300 dark:bg-gray-800 p-3 text-slate-900 dark:text-white shadow-sm border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-md sm:leading-6"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-lg font-semibold text-blue-800 dark:text-blue-300"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                autoComplete="email"
                                className="block w-full rounded-md bg-gray-300 dark:bg-gray-800 p-3 text-slate-900 dark:text-white shadow-sm border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-md sm:leading-6"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-lg font-semibold text-blue-800 dark:text-blue-300"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="7"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="block p-3 w-full text-slate-900 dark:text-white bg-gray-300 dark:bg-gray-800 rounded-md shadow-sm border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-md sm:leading-6"
                            placeholder="Write your message here..."
                            required
                        ></textarea>
                    </div>

                    <div className="text-end">
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 transform hover:scale-105"
                            disabled={sending}
                        >
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>

                {status && (
                    <div
                        className={`mt-4 text-center ${status.includes("Error") ? "text-red-500" : "text-green-500"
                            }`}
                    >
                        {status}
                    </div>
                )}
            </div>
        </section>
    );
}
