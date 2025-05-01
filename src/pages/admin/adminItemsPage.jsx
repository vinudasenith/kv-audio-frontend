import axios from "axios";
import { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

// Fallback sample data
const sampleArr = [
    {
        key: "jbl-flip6-001",
        name: "JBL Flip 6 Bluetooth Speaker",
        price: 129.95,
        category: "Speakers",
        dimensions: "17.8 x 6.8 x 7.2 cm",
        description: "Bold sound for every adventure...",
        availability: true,
        image: ["https://images.jbl.com/Flip6_Hero_Black.png"]
    },
    {
        key: "jbl-tune510bt-002",
        name: "JBL Tune 510BT Wireless Headphones",
        price: 49.99,
        category: "Headphones",
        dimensions: "16.3 x 8.9 x 18.4 cm",
        description: "Powerful JBL Pure Bass sound...",
        availability: true,
        image: ["https://images.jbl.com/Tune510BT_Hero_Black.png"]
    },
    {
        key: "jbl-go3-003",
        name: "JBL GO 3 Portable Waterproof Speaker",
        price: 39.95,
        category: "Speakers",
        dimensions: "8.6 x 6.9 x 4.0 cm",
        description: "Ultra-portable design with vibrant color...",
        availability: true,
        image: ["https://images.jbl.com/GO3_Hero_Black.png"]
    },
    {
        key: "jbl-livepro2-004",
        name: "JBL Live Pro 2 TWS Earbuds",
        price: 149.95,
        category: "Earbuds",
        dimensions: "5.6 x 4.6 x 2.5 cm",
        description: "True Adaptive Noise Cancelling earbuds...",
        availability: true,
        image: ["https://images.jbl.com/LivePro2_Hero_Black.png"]
    },
    {
        key: "jbl-bar500-005",
        name: "JBL Bar 500 Soundbar with Dolby Atmos",
        price: 599.95,
        category: "Soundbars",
        dimensions: "101.0 x 5.6 x 10.0 cm",
        description: "Dolby Atmos and MultiBeam surround sound...",
        availability: true,
        image: ["https://images.jbl.com/Bar500_Hero_Black.png"]
    }
];

export default function AdminItemsPage() {
    const [items, setItems] = useState(sampleArr);
    const [itemsLoaded, setItemsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/products", {
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
            axios.delete(`http://localhost:3000/api/products/${key}`, {
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
                                <td className="px-4 py-2 border-b">${product.price.toFixed(2)}</td>
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
                                            onClick={() => navigate(`/admin/items/edit`)}
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
