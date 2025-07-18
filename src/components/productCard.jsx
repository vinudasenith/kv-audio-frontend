import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
    return (
        <div className="w-[200px] h-[400px] bg-white  overflow-hidden shadow hover:shadow-md transition duration-300 border border-gray-200 mt-6 mx-auto gap-2">

            <div className="w-full h-28 bg-gray-50 flex items-center justify-center">
                <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-full object-contain p-2"
                />
            </div>


            <div className="p-3 space-y-1.5 h-[300px] overflow-hidden">
                <h3 className="text-xs font-semibold text-gray-800 truncate">{item.name}</h3>
                <p className="text-[10px] text-gray-500 truncate">{item.category}</p>
                <p className="text-[10px] text-gray-600 line-clamp-2">{item.description}</p>
                <p className="text-[10px] text-gray-600 truncate">
                    <span className="font-medium">Size:</span> {item.dimensions}
                </p>


                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-bold text-gray-900">Rs. {item.price}</span>
                    <span
                        className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${item.availability
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                            }`}
                    >
                        {item.availability ? "In Stock" : "Out of Stock"}
                    </span>
                </div>


                <div className="pt-2 text-center">
                    <Link
                        to={"/product/" + item.key}
                        className="inline-block w-full px-3 py-1 text-[10px] font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                    >
                        View Details
                    </Link>
                </div>

            </div>
            <div className="fixed bottom-4 right-4 z-50">
                <Link to="/reviews">
                    <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition duration-300">
                        View Reviews
                    </button>



                </Link>



            </div>
        </div>



    );
}
