import axios from "axios";
import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Fallback sample data


export default function AdminItemsPage() {
    const [items, setItems] = useState([]);
    const [itemsLoaded, setItemsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
            headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
            console.log(res.data);
            setItems(res.data);
            setItemsLoaded(true);
        }).catch((err) => {
            console.error(err);
        });
    }, [itemsLoaded]);

    const handleDelete = (key) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter((item) => item.key !== key));
            const token = localStorage.getItem("token");
            axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`, {
                headers: { Authorization: `Bearer ${token}` },
            }).then((res) => {
                console.log(res.data);
                setItemsLoaded(false);
            }
            ).catch((err) => {
                console.log(err);
            });
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col">
            {!itemsLoaded && (<div className="border-7 my-4 border-b-green-500 rounded-full animate-spin border-b w-[100px] h-[100px]"></div>)}
            {itemsLoaded && (<div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow border rounded-md">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-gray-700">
                            <th className="px-4 py-2 border-b">Key</th>
                            <th className="px-4 py-2 border-b">Name</th>
                            <th className="px-4 py-2 border-b">Price</th>
                            <th className="px-4 py-2 border-b">Category</th>
                            <th className="px-4 py-2 border-b">Dimensions</th>
                            <th className="px-4 py-2 border-b">Availability</th>
                            <th className="px-4 py-2 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(product => (
                            <tr key={product.key} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-2 border-b">{product.key}</td>
                                <td className="px-4 py-2 border-b">{product.name}</td>
                                <td className="px-4 py-2 border-b">LKR{product.price.toFixed(2)}</td>
                                <td className="px-4 py-2 border-b">{product.category}</td>
                                <td className="px-4 py-2 border-b">{product.dimensions}</td>
                                <td className="px-4 py-2 border-b">
                                    <span className={`font-medium ${product.availability ? "text-green-600" : "text-red-500"}`}>
                                        {product.availability ? "Available" : "Not Available"}
                                    </span>
                                </td>
                                <td className="px-4 py-2 border-b text-center">
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={() => navigate(`/admin/items/edit`, { state: product })}
                                            title="Edit"
                                            className="text-blue-600 hover:text-blue-800 cursor-pointer text-lg"
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(product.key)}
                                            title="Delete"
                                        >
                                            <FaTrash className="text-red-600 hover:text-red-800 cursor-pointer text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)}

            <Link to="/admin/items/add">
                <FaCirclePlus
                    className="text-green-600 hover:text-green-700 hover:scale-110 transition-all duration-200 text-[50px] fixed bottom-6 left-6 z-10 cursor-pointer"
                    title="Add Item"
                />
            </Link>
        </div>
    );
}
