import { useEffect, useState } from "react";
import { formatDate, loadCart } from "../../utils/cart";
import BookingItem from "../../components/bookingItem";
import axios from "axios";
import toast from "react-hot-toast";

export default function BookingPage() {
    //state variables
    const [cart, setCart] = useState(loadCart());
    const [startingDate, setStartingDate] = useState(formatDate(new Date()));
    const [endingDate, setEndingDate] = useState(formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000)));
    const [total, setTotal] = useState(0);
    const daysBetween = Math.max((new Date(endingDate) - new Date(startingDate)) / (1000 * 60 * 60 * 24), 1);

    //reload carts and calculate total
    function reloadCart() {
        setCart(loadCart());
        calculateTotal();

    }

    //calculate total by sending cart info
    function calculateTotal() {
        const cartInfo = loadCart();
        cartInfo.startingDate = startingDate;
        cartInfo.endingDate = endingDate;
        cartInfo.days = daysBetween;
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders/quote`,
            cartInfo
        ).then((res) => {
            console.log(res.data)
            setTotal(res.data.total);
        }).catch((err) => {
            console.error(err);
        })
    }

    //recalculate total when date changes
    useEffect(() => {
        calculateTotal();
    }, [startingDate, endingDate])

    //handle booking creation
    function handleBookingCreation() {
        const cart = loadCart();
        cart.startingDate = startingDate;
        cart.endingDate = endingDate;
        cart.days = daysBetween;

        const token = localStorage.getItem("token");
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, cart, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data);
            localStorage.removeItem("cart");
            toast.success("Booking Created");
            setCart(loadCart());
        }).catch((err) => {
            console.error(err);
            toast.error("Failed to create booking");
        })
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center px-4 py-8">
            <h1 className="text-3xl font-bold text-yellow-400 mb-6 drop-shadow">Create Booking</h1>

            <div className="w-full max-w-xl bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center gap-6">
                <div className="w-full flex flex-col gap-4">
                    <label className="flex flex-col text-sm">
                        <span className="text-yellow-300 font-semibold mb-1">Starting Date:</span>
                        <input
                            type="date"
                            value={startingDate}
                            onChange={(e) => setStartingDate(e.target.value)}
                            className="bg-gray-900 border border-gray-600 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </label>
                    <label className="flex flex-col text-sm">
                        <span className="text-yellow-300 font-semibold mb-1">Ending Date:</span>
                        <input
                            type="date"
                            value={endingDate}
                            onChange={(e) => setEndingDate(e.target.value)}
                            className="bg-gray-900 border border-gray-600 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </label>
                </div>

                <p className="text-yellow-300 font-medium text-lg">Total Days: {daysBetween}</p>
            </div>

            <div className="w-full max-w-4xl mt-6 grid gap-4  justify-center">
                {
                    cart.orderedItems.map((item) => {
                        return (
                            <BookingItem itemKey={item.key} key={item.key} qty={item.qty} refresh={reloadCart} />
                        );
                    })
                }
            </div>

            <div className="w-full max-w-xl mt-6 text-center">
                <p className="text-yellow-400 font-semibold text-xl">Total: LKR {total.toFixed(2)}</p>
            </div>

            <div className="w-full max-w-xl mt-6 flex justify-center">
                <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg shadow transition duration-300"
                    onClick={handleBookingCreation}
                >
                    Create Booking
                </button>
            </div>
        </div>

    )
}