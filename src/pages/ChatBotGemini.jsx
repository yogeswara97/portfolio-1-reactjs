import { useEffect, useState, useCallback } from 'react';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import MarkdownIt from 'markdown-it';
import Chatbot from "../models/Chatbot"
import ChatLoading from '../components/General/ChatLoading';

// import DataSetCustom from '../assets/data/data.json';

const ChatbotGemini = () => {
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [dataSet, setDataSet] = useState(null);
    const [chatHistory, setChatHistory] = useState([]);
    const [skill, setSkill] = useState([])

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    // Initialize markdown parser only once
    const md = new MarkdownIt();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const chatbots = await Chatbot.getProgramingDataSet();

                const chatBotJSON = JSON.stringify(chatbots, null, 2);
                console.log(chatBotJSON);

                // If chatbots is an array, you can iterate over it to get the IDs
                const docIds = [];
                chatbots.forEach((chatbot) => {
                    if (chatbot.id) {
                        docIds.push(chatbot.id); // Collecting document IDs
                    }
                });

                const docIdsString = docIds.join(', '); // Join with a comma and space
                console.log('Document IDs as string:', docIdsString); // Log the string

                setDataSet(chatBotJSON)
                setSkill(docIds)
            } catch (error) {
                console.error('Terjadi kesalahan saat mengambil dataset:', error);
            }
        };

        fetchData();
    }, []);

    const generateResponse = useCallback(async () => {
        setUserInput('')
        if (!API_KEY || !userInput.trim()) {
            alert('API Key tidak ditemukan atau input kosong!');
            return;
        }

        setLoading(true);

        if (!dataSet) {
            setLoading(false);
            return;
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
                },
            ],
        });

        console.log('User Input:', userInput);


        const prompt = `Anda adalah seseorang yang memiliki pengetahuan di bidang ${skill} dengan pengetahuan seperti: ${dataSet}. Jawablah pertanyaan berikut: ${userInput} (jika jawabanya tidak ada di database maka janganlah di jawab dan kasi alasan bukan ruang linkup saya)`

        console.log(prompt);

        // Tambahkan input penggunak ke chat History
        setChatHistory(prev => [...prev, { type: 'user', text: userInput }])

        // Tambahkan loading ke chat history
        const loadingMessage = { type: 'loading', text: 'Loading...' }
        setChatHistory(prev => [...prev, loadingMessage])

        try {
            const result = await model.generateContent(prompt);
            let content = '';

            if (result.stream) {
                for await (const res of result.stream) content += res.text();
            } else {
                content = result.response.text();
            }

            // Hapus loading dan tambahkan respons dari bot
            setChatHistory(prev => prev.map(chat => chat === loadingMessage ? { type: 'bot', text: md.render(content) } : chat))
        } catch (error) {
            console.error('Terjadi kesalahan saat menghasilkan respons:', error);
        } finally {
            setLoading(false);
            setUserInput('');
            console.log(chatHistory);
        }
    }, [API_KEY, userInput, dataSet, skill, md, chatHistory]);

    const handleOnKeyDown = (event) => {
        if (event.key === 'Enter' && userInput.trim()) {
            event.preventDefault();
            generateResponse();
        }
    };

    return (
        <section
            id="home"
            className="bg-gradient-to-t from-gray-200 via-blue-300 to-gray-200 text-black dark:bg-gradient-to-t dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 dark:text-white flex justify-center pt-20 md:pt-24 pb-10 md:pb-15 h-[calc(100vh-3.5rem)]  "
        >
            <div className='w-[95%] md:w-[80%] flex flex-col lg:flex-row h-full gap-4'>
                {/* Left Side Text */}
                <div className="hidden sm:flex flex-col justify-center p-6 w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 dark:text-white mb-3">
                        Welcome to Gezz AI
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        Ask me anything about programming, and I&apos;ll do my best to help you!
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                        Your journey to mastering coding starts here. Let&apos;s explore together!
                    </p>
                </div>


                {/* Chat Box */}
                <div className='flex flex-col h-full w-full lg:w-2/3 pt-10 md:pt-0'>
                    {/* Chat Header */}
                    <div className="flex justify-between items-center bg-blue-500 dark:bg-blue-700 text-white p-4 rounded-t-lg">
                        <h2 className='text-lg font-bold'>Gezz AI</h2>
                        <button
                            onClick={() => setChatHistory([])}
                            className='text-sm bg-red-600 dark:bg-red-900 px-3 py-2 rounded-lg hover:bg-red-300 dark:hover:bg-red-400 transition-all'>
                            Clear Chat
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 overflow-y-auto bg-gray-200 dark:bg-gray-900 p-4 space-y-3">

                        {/* Chat Bubbles */}
                        {chatHistory.length > 0 ? (
                            chatHistory.map((chat, index) => (
                                <div
                                    key={index}
                                    className={`
                                        ${chat.type === 'user' ? 'self-end ml-auto bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white' :
                                            chat.type === 'loading' ? 'self-start bg-blue-200 dark:bg-sky-700 text-blue-900 dark:text-white' :
                                                'self-start bg-blue-200 dark:bg-sky-700 text-blue-900 dark:text-white'} p-3 rounded-xl break-words w-fit max-w-[90%] sm:max-w-[70%]
                                    `}
                                >
                                    {chat.type === 'loading' ? (
                                        <ChatLoading />
                                    ) : (
                                        <div dangerouslySetInnerHTML={{ __html: chat.text }} />
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center h-full ">
                                <div className="text-center text-white">
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-4 text-blue-900 dark:text-white">
                                        Try <span className="text-blue-700">Gezz</span> AI
                                    </h1>
                                    <p className="text-md md:text-lg font-medium opacity-80 text-blue-900 dark:text-white">
                                        Unlock the future of technology with AI-powered solutions
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Input Area */}
                    <div className="flex items-center bg-gray-300 dark:bg-gray-700 p-3 rounded-b-lg">
                        <input
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleOnKeyDown}
                            type="text"
                            placeholder='Type a question...'
                            className='flex-grow bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg focus:outline focus:ring-2 focus:ring-blue-500'
                        />
                        <button
                            onClick={generateResponse}
                            disabled={loading || !userInput.trim()} // Disable if loading or input is empty
                            className={`ml-3 px-4 py-2 rounded-lg 
                                ${loading || !userInput.trim() ?
                                    'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' :
                                    'bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-400 text-white'}`}>
                            Ask Gezz AI
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );


};

export default ChatbotGemini;
