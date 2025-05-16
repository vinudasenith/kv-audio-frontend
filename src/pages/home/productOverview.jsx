import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageSlider from "../../components/imageSlider";
import { addToCart, loadCart } from "../../utils/cart";
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
        <div className="w-full h-full flex justify-center">
            {
                loadingStatus === "loading" &&
                <div className="w-full h-full flex  justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            }
            {
                loadingStatus == "loaded" &&
                <div className=" w-full h-full  flex  flex-col md:flex-row justify-center items-center">
                    <h1 className="text-2xl my-6 md:hidden  font-bold text-accent text-center ">{product.name}</h1>
                    <div className="w-full md:w-[49%]">
                        <ImageSlider images={product.image} />
                    </div>
                    <div className="w-full md:w-[49%] p-2 flex flex-col items-center">
                        <h1 className="hidden md:block text-3xl font-bold text-accent">{product.name}</h1>
                        <h2 className="text-xl font-semibold text-gray-800">
                            {product.category} category
                        </h2>
                        <p className="text-gray-700 mt-4 text-center">{product.description}</p>
                        <p className="text-lg  text-green-500">Rs. {product.price.toFixed(2)}</p>
                        <div className="mt-4 text-sm text-gray-600">
                            <span className="font-medium">Dimensions:</span>{" "}
                            {product.dimensions}
                        </div>

                        <button
                            className="w-[200px] h-[50px] bg-blue-500 text-white py-2 mt-4 rounded-lg hover:bg-blue-600"
                            onClick={() => {
                                addToCart(product.key, 1);
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
                    <div className="w-[50px] h-[50px] border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>
                </div>
            }

        </div>
    )
}