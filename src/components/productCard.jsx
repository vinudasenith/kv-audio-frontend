export default function ProductCard({ item }) {
    return (
        <div className="w-56 bg-white shadow rounded-md overflow-hidden hover:shadow-md transition duration-300 border border-gray-200 m-2">
            <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-32 object-cover"
            />

            <div className="p-2 space-y-1 h-40 overflow-hidden">
                <h3 className="text-sm font-semibold text-gray-800 truncate">{item.name}</h3>
                <p className="text-xs text-gray-500 truncate">{item.category}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
                <p className="text-xs text-gray-500 truncate">
                    <span className="font-medium">Size:</span> {item.dimensions}
                </p>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-bold text-blue-600">Rs. {item.price}</span>
                    <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${item.availability
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            }`}
                    >
                        {item.availability ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                {/* Rounded View Details Button */}
                <div className="pt-1 text-center">
                    <button className="px-4 py-1 text-xs text-white bg-blue-600  hover:bg-blue-700 focus:outline-none">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
