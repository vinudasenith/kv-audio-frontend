const sampleArr = [
    {
        key: "jbl-flip6-001",
        name: "JBL Flip 6 Bluetooth Speaker",
        price: 129.95,
        category: "Speakers",
        dimensions: "17.8 x 6.8 x 7.2 cm",
        description: "Bold sound for every adventure. The JBL Flip 6 delivers powerful JBL Original Pro Sound with exceptional clarity. Waterproof, dustproof, and built for outdoor fun.",
        availability: true,
        image: ["https://images.jbl.com/Flip6_Hero_Black.png"]
    },
    {
        key: "jbl-tune510bt-002",
        name: "JBL Tune 510BT Wireless Headphones",
        price: 49.99,
        category: "Headphones",
        dimensions: "16.3 x 8.9 x 18.4 cm",
        description: "Powerful JBL Pure Bass sound, wireless streaming with Bluetooth, and up to 40 hours of battery life with quick charge support.",
        availability: true,
        image: ["https://images.jbl.com/Tune510BT_Hero_Black.png"]
    },
    {
        key: "jbl-go3-003",
        name: "JBL GO 3 Portable Waterproof Speaker",
        price: 39.95,
        category: "Speakers",
        dimensions: "8.6 x 6.9 x 4.0 cm",
        description: "Ultra-portable design with vibrant color options, IP67 waterproof and dustproof, with surprisingly big sound.",
        availability: true,
        image: ["https://images.jbl.com/GO3_Hero_Black.png"]
    },
    {
        key: "jbl-livepro2-004",
        name: "JBL Live Pro 2 TWS Earbuds",
        price: 149.95,
        category: "Earbuds",
        dimensions: "5.6 x 4.6 x 2.5 cm",
        description: "True Adaptive Noise Cancelling earbuds with smart ambient mode, up to 40 hours battery life, and 6 built-in microphones.",
        availability: true,
        image: ["https://images.jbl.com/LivePro2_Hero_Black.png"]
    },
    {
        key: "jbl-bar500-005",
        name: "JBL Bar 500 Soundbar with Dolby Atmos",
        price: 599.95,
        category: "Soundbars",
        dimensions: "101.0 x 5.6 x 10.0 cm",
        description: "Dolby Atmos and MultiBeam surround sound with punchy bass, 590W output, and built-in Chromecast, Alexa Multi-Room and AirPlay 2.",
        availability: true,
        image: ["https://images.jbl.com/Bar500_Hero_Black.png"]
    }
];


import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function AdminItemsPage() {
    const [items, setItems] = useState(sampleArr);

    return (
        <div className="w-full h-full bg-white relative">
            <table>
                <thead>
                    <th>key</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Dimension</th>
                    <th>Availability</th>
                </thead>
                <tbody>
                    {items.map((Product) => {
                        console.log(Product)
                        return (
                            <tr key={Product.key}>
                                <td>{Product.key}</td>
                                <td>{Product.name}</td>
                                <td>{Product.price}</td>
                                <td>{Product.category}</td>
                                <td>{Product.dimensions}</td>
                                <td>{Product.availability ? "Available" : "Not Available"}</td>
                            </tr>
                        )

                    })

                    }


                </tbody>







            </table>
            <Link to="/admin/items/add">
                <FaCirclePlus className="text-[50px] absolute left-2 bottom-2 hover:text-[55px] cursor-pointer  " />
            </Link>

        </div>
    )
}