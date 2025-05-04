import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard";


export default function Items() {
    const [state, setState] = useState("loading")//loading,success,error
    const [items, setItems] = useState([])
    useEffect(() => {
        if (state == "loading") {
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`).then((res) => {
                console.log(res.data)
                setItems(res.data)
                setState("success")

                // setState("success")

            }).catch((err) => {
                toast.error(err?.response?.data?.error || "Something went wrong")
                setState("error")
            })
        }
    }, [])
    return (
        <div className="w-full h-full bg-white flex flex-wrap justify-center pt-[50px]">
            {
                state == "loading" &&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-[3px]  rounded-full border-t-green-300 animate-spin ">
                    </div>
                </div>
            }
            {
                state == "success" &&
                items.map((item) => {
                    return (
                        <ProductCard key={item.key} item={item} />

                    )

                })
            }


        </div>
    )
}



// {
//     "image": [
//         "https://www.istockphoto.com/collaboration/boards/T8JZEfFFtUic8LQzZYrkcQ"
//     ],
//     "_id": "67d8f36684b5b6cffa6561c5",
//     "key": "sound-001",
//     "name": "Audio Mixer Theater System",
//     "price": 12000,
//     "category": "Audio",
//     "dimensions": "100x100x150 cm",
//     "description": "A powerful 5.1",
//     "availability": true,
//     "__v": 0
// }