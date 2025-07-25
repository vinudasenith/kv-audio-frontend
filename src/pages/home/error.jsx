import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center space-y-6 hover:shadow-xl transition-shadow duration-300">
                {/* Error Icon */}
                <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-5xl font-bold text-red-600">404</span>
                </div>

                {/* Error Message */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
                    <p className="text-gray-600">
                        The page you're looking for doesn't exist or may have been moved.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        to="/"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-md"
                    >
                        ← Return Home
                    </Link>
                    <Link
                        to="/contact"
                        className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}