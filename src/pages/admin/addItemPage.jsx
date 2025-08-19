import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";


export default function AddItemPage() {
    //state variables
    const [productKey, setProductKey] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCategory, setProductCategory] = useState("audio");
    const [productDimension, setProductDimension] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImages, setProductImages] = useState([]);
    const navigate = useNavigate();

    //handles add item
    async function handleAddItem() {
        const promises = [];

        //upload images
        for (let i = 0; i < productImages.length; i++) {

            console.log(productImages[i]);
            const promise = mediaUpload(productImages[i]);
            promises.push(promise);
        }

        console.log(productKey, productName, productPrice, productCategory, productDimension, productDescription);

        const token = localStorage.getItem("token");


        if (token) {
            try {
                const imageUrls = await Promise.all(promises);

                const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products`, {
                    key: productKey,
                    name: productName,
                    price: productPrice,
                    category: productCategory,
                    dimensions: productDimension,
                    description: productDescription,
                    image: imageUrls,
                }, {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                toast.success(result.data.message);
                navigate("/admin/items");

            } catch (err) {
                toast.error(err.response.data.error);
            }
        } else {
            toast.error("You are not authorized to add items");
        }
    }


    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-2xl font-bold my-4">Add Items</h1>
            <div className="w-[400px] border p-4 flex flex-col gap-4 rounded shadow">
                <input
                    type="text"
                    placeholder="Product Key"
                    value={productKey}
                    onChange={(e) => setProductKey(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="border p-2 rounded"
                />
                <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="">Select Category</option>
                    <option value="audio">Audio</option>
                    <option value="lights">Lights</option>
                </select>
                <input
                    type="text"
                    placeholder="Product Dimension"
                    value={productDimension}
                    onChange={(e) => setProductDimension(e.target.value)}
                    className="border p-2 rounded"
                />
                <textarea
                    type="text"
                    placeholder="Product Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="border p-2 rounded"
                />
                <input type="file" multiple onChange={(e) => setProductImages(e.target.files)} className="w-full p-2 border rounded" />
                <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Add
                </button>
                <button onClick={() => { navigate("/admin/items/") }} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Cancel
                </button>
            </div>
        </div>
    );
}
