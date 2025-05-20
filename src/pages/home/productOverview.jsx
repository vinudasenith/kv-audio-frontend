import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageSlider from "../../components/imageSlider";
import { addToCart, loadCart } from "../../utils/cart";
import toast from "react-hot-toast";
export default function ProductOverview() {

    const params = useParams();
    console.log(params);
    const key = params.key;
    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`).then((res) => {
            setProduct(res.data);
            setLoadingStatus("loaded");
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
            setLoadingStatus("error");
        })


    }, [])
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex justify-center p-4">
            {
                loadingStatus === "loading" &&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            }
            {
                loadingStatus == "loaded" &&
                <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-8">
                    <h1 className="text-2xl my-6 md:hidden font-bold text-yellow-400 text-center">{product.name}</h1>
                    <div className="w-full md:w-[49%]">
                        <ImageSlider images={product.image} />
                    </div>
                    <div className="w-full md:w-[49%] p-4 flex flex-col items-center gap-4 bg-gray-800 rounded-lg shadow-lg">
                        <h1 className="hidden md:block text-3xl font-bold text-yellow-400">{product.name}</h1>
                        <h2 className="text-xl font-semibold text-gray-300">{product.category} category</h2>
                        <p className="text-gray-400  text-justify">{product.description}</p>
                        <p className="text-lg font-bold text-green-400">LKR {product.price.toFixed(2)}</p>
                        <div className="text-sm text-gray-400">
                            <span className="font-medium">Dimensions:</span> {product.dimensions}
                        </div>
                        <button
                            className="w-[200px] h-[50px] bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-200"
                            onClick={() => {
                                addToCart(product.key, 1);
                                toast.success("Added to Cart");
                                console.log(loadCart());
                                window.location.href = "/booking";
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            }
            {
                loadingStatus == "error" &&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 border-gray-600 border-t-red-500 rounded-full animate-spin"></div>
                </div>
            }
        </div>

    )
}