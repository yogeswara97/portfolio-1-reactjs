import { motion } from "framer-motion";

export default function ChatLoading() {
    return (
        <div className="flex space-x-1">
            <motion.span
                className=" bg-blue-700 dark:bg-blue-200 w-2 h-2 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            />
            <motion.span
                className=" bg-blue-700 dark:bg-blue-200 w-2 h-2 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: 0.2,
                }}
            />
            <motion.span
                className=" bg-blue-700 dark:bg-blue-200 w-2 h-2 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: 0.4,
                }}
            />
        </div>
    );
}