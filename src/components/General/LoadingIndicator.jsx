export default function LoadingIndicator(){
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-900 text-slate-900 dark:text-white">
            <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-blue-900 dark:border-blue-500 border-opacity-50"></div>
        </div>
    )
}