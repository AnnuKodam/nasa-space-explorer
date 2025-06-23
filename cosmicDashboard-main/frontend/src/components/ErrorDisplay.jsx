import { AlertTriangle } from 'lucide-react';

const ErrorDisplay = ({ message = "An unknown error occurred." }) => {
    return (
        <div className="bg-red-900/40 border border-red-700 text-red-200 px-4 py-3 rounded-lg flex items-center gap-4 shadow-lg">
        <AlertTriangle className="h-8 w-8 text-red-400" />
        <div>
            <strong className="font-bold">An Error Occurred</strong>
            <span className="block sm:inline ml-2">{message}</span>
        </div>
    </div>
    );
};

export default ErrorDisplay;