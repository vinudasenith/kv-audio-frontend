import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold mb-6 text-yellow-400 drop-shadow-md leading-snug">
                    Premium Sound Systems for Every Occasion
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed text-justify">
                    Elevate your events with top-of-the-line sound equipment. Whether it's a concert, wedding, or corporate event — we’ve got the gear and expertise to make it unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/items">
                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-300">
                            Explore Rentals
                        </button>
                    </Link>

                    <Link to="/contact">
                        <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
